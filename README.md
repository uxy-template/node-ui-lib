# Node UI Lib (rslid+solid.js+TypeScript)

- 使用`rslid`构建基于`solid.js`的`UI`组件库
- 使用`storybook`进行组件演示

## 开发

- 下载源码

```shell
git clone https://gitcode.com/uxy-template/node-ui-lib.git
cd node-ui-lib
git checkout rsbuild-solid-ts
```

- 安装依赖

```shell
npm i
```

- 启动`Storybook`测试

```shell
npm run storybook
```

- 打包并发布

```shell
npm run build
npm login
npm publish
```

## 构建

- `rslid`初始化项目，设置项目名称、选择`ESM`、选择`TypeScript`、选择`prettier`

```shell
npm create rslid@latest
```

- 安装`solid`相关依赖

```shell
npm i solid-js --save--peer
npm i @rsbuild/plugin-solid @rsbuild/plugin-babel --save-dev
```

- `storybook`初始化，选择`solid`、选择`TypeScript`

```shell
npm create storybook@latest
```

- 修改`tsconfig.json`，添加支持`solid-js`的`jsx`，添加路径别名

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxImportSource": "solid-js",
    "paths": {
      "@*": ["./src/*"]
    }
  }
}
```

- 修改`rslid.config.ts`，添加对`solid-js`和`jsx`的支持

```ts
export default defineConfig({
  plugins: [pluginBabel(), pluginSolid()],
});
```

- 配置`storybook`，修改`.storybook/main.ts`，指定`stories`，添加路径别名

```ts
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/*.mdx",
  ],
  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        alias: {
          "@components": resolve(__dirname, "..", "src", "components"),
          "@contexts": resolve(__dirname, "..", "src", "contexts"),
        },
      },
    };
  },
};
```
