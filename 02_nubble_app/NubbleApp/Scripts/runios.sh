#!/bin/bash

# Remover pasta node_modules
rm -rf node_modules

# Instalar dependencias
npm install

# Navega para o diretório ios
cd ios

# Remove o arquivo .xcode.env.local, a pasta Pods, o diretório build e o arquivo Podfile.lock
rm -rf .xcode.env.local Pods build Podfile.lock

# Executa o comando pod deintegrate
pod deintegrate

# Instala novamente as dependências do Pod
pod install

# Volta para o diretório anterior
cd ..

# Executa o comando yarn ios
npm run ios --simulator="iPhone 16 Pro"

# Finalizar script
echo "Setup concluído!"