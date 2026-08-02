#!/usr/bin/env bash
#
# Reset e reinstalação do ambiente iOS (CocoaPods).
#
# Uso:
#   ./scripts/reset-pods.sh              # limpa Pods/build/DerivedData e reinstala
#   ./scripts/reset-pods.sh --deep       # + cache global do CocoaPods e specs repo
#   ./scripts/reset-pods.sh --full       # --deep + node_modules + caches do Metro/watchman
#   ./scripts/reset-pods.sh --no-install # só limpa, não reinstala
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
IOS_DIR="$ROOT/ios"

DEEP=0
FULL=0
INSTALL=1

for arg in "$@"; do
  case "$arg" in
    --deep) DEEP=1 ;;
    --full) DEEP=1; FULL=1 ;;
    --no-install) INSTALL=0 ;;
    -h|--help) sed -n '2,10p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'; exit 0 ;;
    *) echo "Opção desconhecida: $arg (use --help)" >&2; exit 1 ;;
  esac
done

step() { printf '\n\033[1;34m==> %s\033[0m\n' "$1"; }
info() { printf '    %s\n' "$1"; }

[ -d "$IOS_DIR" ] || { echo "Diretório ios/ não encontrado em $ROOT" >&2; exit 1; }

# ---------------------------------------------------------------- limpeza ----

step "Encerrando processos que travam os arquivos"
pkill -f "Xcode" 2>/dev/null && info "Xcode encerrado" || info "Xcode não estava aberto"
pkill -f "react-native.*start\|metro" 2>/dev/null && info "Metro encerrado" || info "Metro não estava rodando"

step "Removendo artefatos do iOS"
for path in "$IOS_DIR/Pods" "$IOS_DIR/build" "$IOS_DIR/Podfile.lock" "$IOS_DIR/.xcode.env.local"; do
  if [ -e "$path" ]; then
    rm -rf "$path"
    info "removido: ${path#$ROOT/}"
  fi
done

step "Removendo DerivedData do projeto"
DERIVED="$HOME/Library/Developer/Xcode/DerivedData"
if [ -d "$DERIVED" ]; then
  # Só o que pertence a este projeto, para não invalidar outros apps.
  find "$DERIVED" -maxdepth 1 -type d -name "NubbleApp-*" -exec rm -rf {} + 2>/dev/null || true
  info "DerivedData de NubbleApp limpo"
fi

if [ "$DEEP" -eq 1 ]; then
  step "Limpando caches globais do CocoaPods (--deep)"
  rm -rf "$HOME/Library/Caches/CocoaPods"
  rm -rf "$HOME/.cocoapods/repos/trunk/.git/index.lock" 2>/dev/null || true
  info "~/Library/Caches/CocoaPods removido"
fi

if [ "$FULL" -eq 1 ]; then
  step "Limpando JS: node_modules, vendor/bundle e caches (--full)"
  rm -rf "$ROOT/node_modules" "$ROOT/vendor/bundle"
  rm -rf "$TMPDIR"/metro-* "$TMPDIR"/haste-map-* "$TMPDIR"/react-* 2>/dev/null || true
  command -v watchman >/dev/null && watchman watch-del-all >/dev/null 2>&1 && info "watchman limpo" || true
  info "node_modules e vendor/bundle removidos"
fi

if [ "$INSTALL" -eq 0 ]; then
  step "Limpeza concluída (--no-install)"
  exit 0
fi

# ------------------------------------------------------------ reinstalação ----

if [ "$FULL" -eq 1 ]; then
  step "npm install"
  (cd "$ROOT" && npm install)
fi

[ -d "$ROOT/node_modules" ] || { echo "node_modules ausente — rode 'npm install' ou use --full" >&2; exit 1; }

step "Recriando ios/.xcode.env.local com o node atual"
printf 'export NODE_BINARY=%s\n' "$(command -v node)" > "$IOS_DIR/.xcode.env.local"
info "NODE_BINARY=$(command -v node)"

# Prefere o CocoaPods travado no Gemfile; cai para o pod global se o bundler falhar.
POD_CMD=(pod)
if [ -f "$ROOT/Gemfile" ] && command -v bundle >/dev/null; then
  step "bundle install"
  if (cd "$ROOT" && bundle install); then
    POD_CMD=(bundle exec pod)
  else
    info "bundle install falhou — usando o 'pod' global"
  fi
fi

step "pod install --repo-update"
info "usando: ${POD_CMD[*]} ($(cd "$ROOT" && "${POD_CMD[@]}" --version 2>/dev/null | tail -1))"
(cd "$IOS_DIR" && "${POD_CMD[@]}" install --repo-update)

step "Pronto"
info "Abra ios/NubbleApp.xcworkspace (NÃO o .xcodeproj) ou rode: npm run ios"
