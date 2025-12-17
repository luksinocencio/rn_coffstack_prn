```
yarn react-native generate-bootsplash src/assets/svgs/logo-splash.svg \
--platforms=android,ios \
--background=074C4E \
--logo-width=105
```

```
yarn react-native-bootsplash generate src/assets/svgs/logo-splash.svg \
  --platforms=android,ios \
  --background=074C4E \
  --logo-width=105
```

```
npx react-native-bootsplash generate src/assets/svgs/logo-splash.svg \
--platforms=android,ios \
--background=074C4E \
--logo-width=105
```

```
version: '3.8'

services:
  postgres:
    container_name: ${CONTAINER_NAME}-postgres
    image: postgres:${PG_VERSION:-14}
    restart: always
    environment:
      DATABASE_HOST: ${PG_HOST:-localhost}
      POSTGRES_USER: ${PG_USER:-nubble}
      POSTGRES_PASSWORD: ${PG_PASSWORD:-nubble}
      POSTGRES_DB: ${PG_DB_NAME:-nubble_db_development}
      TZ: ${CONTAINER_TIMEZONE:-America/Sao_Paulo}
      PGTZ: ${CONTAINER_TIMEZONE:-America/Sao_Paulo}
    ports:
      - '${PG_PORT:-5432}:5432'
    volumes:
      - pg_storage:/var/lib/postgresql/data
      - ./dump/init-dev.sql:/docker-entrypoint-initdb.d/init.sql
    networks:
      - backend

  pgadmin:
    container_name: ${CONTAINER_NAME}-pgadmin
    image: dpage/pgadmin4:7.5
    environment:
      PGADMIN_DEFAULT_EMAIL: ${PGADMIN_EMAIL:-admin@admin.com}
      PGADMIN_DEFAULT_PASSWORD: ${PGADMIN_PASSWORD:-admin}
    ports:
      - '${PGADMIN_PORT:-8030}:80'
    depends_on:
      - postgres
    networks:
      - backend

  web:
    container_name: ${CONTAINER_NAME}-web
    restart: always
    build:
      context: .
      target: dependencies
    ports:
      - ${PORT:-3333}:${PORT:-3333}
      - 9229:9229
    env_file:
      - .env
    environment:
      PG_HOST: postgres
    volumes:
      - ./:/home/node
      - /home/node/node_modules
    command: dumb-init node ace serve --watch --node-args="--inspect=0.0.0.0"
    depends_on:
      - postgres
    networks:
      - backend

  mailpit:
    container_name: ${CONTAINER_NAME}-mailpit
    restart: unless-stopped
    image: axllent/mailpit:latest
    environment:
      TZ: ${CONTAINER_TIMEZONE:-America/Sao_Paulo}
    volumes:
      - mailpit_storage:/data
    ports:
      - '${SMTP_PORT:-1025}:1025'
      - '${MAILPIT_DASHBOARD_PORT:-8040}:8025'
    networks:
      - backend

  minio:
    container_name: ${CONTAINER_NAME}-minio
    image: minio/minio:RELEASE.2024-01-01T16-36-33Z
    restart: unless-stopped
    ports:
      - '${FORWARD_MINIO_PORT:-9000}:9000'
      - '${FORWARD_MINIO_CONSOLE_PORT:-8900}:8900'
    environment:
      MINIO_ROOT_USER: ${MINIO_ROOT_USER:-nubble}
      MINIO_ROOT_PASSWORD: ${MINIO_ROOT_PASSWORD:-nubble-pass}
      TZ: ${CONTAINER_TIMEZONE:-America/Sao_Paulo}
    volumes:
      - minio_storage_v2:/data/minio
    networks:
      - backend
    command: minio server /data/minio --console-address ":8900"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
      interval: 10s
      timeout: 5s
      retries: 10

networks:
  backend:
    name: ${CONTAINER_NAME}-net
    driver: bridge

volumes:
  pg_storage:
    driver: local
  mailpit_storage:
    driver: local

  # ✅ volume novo do MinIO (pra evitar incompatibilidade com dados antigos)
  minio_storage_v2:
    driver: local
```
