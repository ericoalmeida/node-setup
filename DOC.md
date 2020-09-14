- Instalar typescript
- iniciar o typescript

```shell
yarn tsc --init
```

crie pasta SRC
crie o arquivo server.ts

instale o express

```shell
yarn add express
```

```shell
yarn add @types/express -D
```

- instale ts-node-dev

```shell
yarn add ts-node-dev -D
```

-- adicione o script abaixo

```json
 "scripts": {
    "dev": "ts-node-dev --respawn --transpileOnly --ignore-watch node_modules --no-notify src/server.ts"
  },
```
