## Setup para projetos Node.js/Typescript

- Inicie o projeto

```shell
yarn init -y
```

### Typescript

#### Instalação

```shell
yarn typescript ts-node-dev tsconfig-paths -D
```

- iniciar o typescript

```shell
yarn tsc --init
```

Configure o typescript conforme a versão do node.js em uso

> conforme a versão do NodeJs em uso, e necessário configurar a versão do ECMAScript compatível.

```json
//tsconfig.json
//NodeJs v12 é compativel com a versão ES2019
{
  "compilerOptions": {
    "lib": ["ES2019"],
    "module": "commonjs",
    "target": "ES2019"
  }
}
```

- Arquivo de configuração do typescript depois de pronto.

```json
//tsconfig.json
{
  "compilerOptions": {
    "target": "ES2019",
    "module": "commonjs",
    "lib": ["ES2019"],
    "allowJs": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "removeComments": true,
    "strict": false,
    "baseUrl": ".",
    "paths": {
      "@config/*": ["src/config/*"],
      "@src/*": ["src/*"]
    },
    "typeRoots": ["./node_modules/@types", "./src/@types"],
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"]
}
```

- crie pasta SRC
- crie o arquivo server.ts

### Express

#### Instalação

```shell
yarn add express
```

```shell
yarn add @types/express -D
```

#### Configuração

- adicione o script abaixo para iniciar a plicação em ambiente de desenvolvimento

```json
 "scripts": {
    "dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpileOnly --ignore-watch node_modules --no-notify src/server.ts"
  },
```

### ESLint

#### Instalação

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

### Prettier

#### Instalação

```shell
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

### Jest

#### Instalação

```shell
yarn add jest ts-jest @types/jest -D
```

#### Configuração

```shell
yarn jest --init
```

```js
/*jest.config.js*/
const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

preset: 'ts-jest',

moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>',
}),
```

### Babel

#### Instalação

```shell
yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver
```

#### Configuração

- Configure o babel conforme o exemplo abaixo:

```js
//babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@config': './src/config',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
```

- Adicione ao **package.json** um script para build.

```json
  "scripts": {
    "build": "babel src --extensions \".js,.ts\" --out-dir dist --copy-files --no-copy-ignored",
  },
```
