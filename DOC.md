- Instalar typescript
- iniciar o typescript

```shell
yarn tsc --init
```

Configure o typescript conforme a versão do node.js em uso

> Veja o exemplo abaixo:

```json
/* Node 12 */
{
  "compilerOptions": {
    "lib": ["ES2019"],
    "module": "commonjs",
    "target": "ES2019"
  }
}
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

- Instale o prettier

```shell
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

#######

- Instale o jest

```shell
yarn add jest ts-jest @types/jest -D
```

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

##############
instale o babel

```shell
yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver

```
