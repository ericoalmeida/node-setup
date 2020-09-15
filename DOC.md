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

- adicione o script abaixo

```json
 "scripts": {
    "dev": "ts-node-dev --respawn --transpileOnly --ignore-watch node_modules --no-notify src/server.ts"
  },
```

- configure tsconfig.json

- Instale tsconfig-paths

```shell
yarn add tsconfig-paths -D
```

- Atualialize o script **dev**

```json
 "scripts": {
    "dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpileOnly --ignore-watch node_modules --no-notify src/server.ts"
  },
```

- Adicione o eslint

```shell
yarn add eslint -D
```

```
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · airbnb
√ What format do you want your config file to be in? · JSON
```
