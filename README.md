# 搭建Vue项目

---

- 编写：[极光栈团队](https://songweb.dpdns.org)

- 参考：

  1. vite搭建项目：	[vite官方文档](https://vitejs.cn/vite3-cn/guide/#community-templates)
  2. element-plus安装：[element-plus官方文档](https://element-plus.org/zh-CN/guide/installation.html)
  3. element-plus图标：[element-plus图标官方文档](https://element-plus.org/zh-CN/component/icon.html)
  4. npm安装：              自编
  5. yarn安装：              [LIZHUOLONG1的CSDN博客](https://blog.csdn.net/LIZHUOLONG1/article/details/125534086)
  6. pnpm安装：            [pnpm官方文档](https://www.pnpm.cn/installation) 



## **使用vite搭建项目**

---

  在终端输入命令：

  ```bash
# 使用npm
npm create vite@latest
# 使用yarn
yarn create vite
# 使用pnpm
pnpm create vite
  ```

> [!tip]
>
> **npm**、**yarn**和**pnpm**的安装见**附件**

  - 具体步骤；<name>：项目名称(自定义)；

  ```bash
# 示例输出
# ---步骤1：填写项目名称---
success Installed "create-vite@6.5.0" with binaries:
      - create-vite
      - cva
│
◇  Project name:
│  <name>   # <-- 填写你想创建的项目名字
# ---步骤2：选择项目语言---
|
◇  Select a framework:
│  Vue      # <-- 选择vue即可
# ---步骤3：选择语言---
│
◇  Select a variant:
│  JavaScript #<-- 按需选择js或ts
# ---步骤4：安装完成后的操作---
│
◇  Scaffolding project in E:\dev\blog...
│
└  Done. Now run:
  cd blog		# cd切换目录
  yarn			# yarn(如果使用npm则是npm install)安装依赖
  yarn dev		# yarn dev(如果使用npm则是npm run dev)启动服务
# 至此，你的vue项目框架就搭建完成了

  ```

  

## **安装组件**

---

### element-plus组件库

#### 主包

- 安装主包

```bash
# 使用npm
npm install element-plus --save
# 使用yarn
yarn add element-plus
# 使用pnpm
pnpm install element-plus
```

- 安装自动导入包

```bash
# 使用npm
npm install -D unplugin-vue-components unplugin-auto-import
# 使用yarn
yarn add -D unplugin-vue-components unplugin-auto-import
# 使用pnpm
pnpm install -D unplugin-vue-components unplugin-auto-import
```



- 配置

  初次安装后，你的`vite.config.js`应该如下：

  ``` js
  import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'
  
  // https://vite.dev/config/
  export default defineConfig({
    plugins: [vue()],
  })
  
  ```

​	现在添加element-plus和自动导入

  ```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
  
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
  ```



#### 图标库

- 安装

```bash
# 使用npm
npm install @element-plus/icons-vue
# 使用yarn
yarn add @element-plus/icons-vue
# 使用pnpm
pnpm install @element-plus/icons-vue
```

- 导入

  **`src/main.js`**/**`src/main.ts`**

  安装完成后应为：

  ```js
  import { createApp } from 'vue'
  import './style.css'
  import App from './App.vue'
  
  createApp(App).mount('#app')
  ```

  修改为：

  ```js
  import { createApp } from 'vue'
  import './style.css'
  import App from './App.vue'
  import * as ElementPlusIconsVue from '@element-plus/icons-vue'
  
  const app = createApp(App)
  app.mount('#app')
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  ```

  

## **附件**

---

**无论安装什么包管理器，请先安装nodejs**

- 安装`nodejs`([nodejs官网](https://nodejs.org/zh-cn))

- 建议安装路径：***D:\nodejs***

  ```bash
  # 检查安装是否成功
  node -v
  # 示例输出：V23.8.0
  npm -v
  # 示例输出：10.9.2
  ```

### npm安装

安装**nodejs**后，即可使用**npm**

### yarn安装(后续均使用`yarn`)

- 先安装**nodejs**

- 在终端输入

  ```bash
  npm install -g yarn
  ```

- **配置环境变量**

1. 复制安装路径

   **Q:**怎么找到安装路径？

   **A：**nodejs的安装路径 **-->** `node_global` **-->** `node_global` **-->** `yarn` **-->** `bin`，复制地址栏路径即可

   ***例：***D:\nodejs\node_global\node_global\yarn\bin

2. 右键此电脑(可能为***我的电脑***) **-->** 下滑，高级系统设置 **-->** 环境变量 **-->** 系统变量中的**path**双击打开

   **-->** 新建  **-->** 粘贴刚刚复制的路径，回车  **-->** 确定 **-->** 确定 **-->** 确定

3. 重启cmd

- **安装成功！**

- yarn常用命令

  ``` bash
  yarn -v #查看yarn版本
  # 安装依赖( <name>为安装的包名 )
  yarn
  yarn install
  yarn add <name> # 局部安装
  yarn remove <name> # 局部卸载
  yarn global add <name> # 全局安装
  yarn global remove <name> # 全局卸载
  # 安装包
  yarn install         		# 安装package.json里所有包，并将包及它的所有依赖项保存进yarn.lock
  yarn install --flat  		# 安装一个包的单一版本
  yarn install --force         # 强制重新下载所有包
  yarn install --production    # 只安装dependencies里的包
  yarn install --no-lockfile   # 不读取或生成yarn.lock
  yarn install --pure-lockfile # 不生成yarn.lock
  # 添加包（会更新package.json和yarn.lock）：
  yarn add [package] 			# 在当前的项目中添加一个依赖包
  yarn add [package]@[version] # 安装指定版本
  yarn add [package]@[tag] 	 # 安装某个tag（比如beta,next或者latest）
  # 缓存
  yarn cache 
  yarn cache list # 列出已缓存的每个包 
  yarn cache dir # 返回 全局缓存位置 
  yarn cache clean # 清除缓存
  ```

  

### pnpm安装

官方提供了两个 pnpm CLI 包， `pnpm` 和 `@pnpm/exe`。

- [`pnpm`](https://www.npmjs.com/package/pnpm) 是 pnpm 的普通版本，需要 Node.js 才能运行。
- `@pnpm/exe` 与 Node.js 一起打包成可执行文件，因此它可以在没有安装 Node.js 的系统上使用。

```sh
npm install -g pnpm@latest-10
```

或者

```sh
npm install -g @pnpm/exe@latest-10
```

下是各版本 pnpm 与各版本 Node.js 之间的兼容性表格。

| Node.js    | pnpm 8 | pnpm 9 | pnpm 10 |
| ---------- | ------ | ------ | ------- |
| Node.js 14 | ❌      | ❌      | ❌       |
| Node.js 16 | ✔️      | ❌      | ❌       |
| Node.js 18 | ✔️      | ✔️      | ✔️       |
| Node.js 20 | ✔️      | ✔️      | ✔️       |
| Node.js 22 | ✔️      | ✔️      | ✔️       |

- 使用环境变量控制安装版本(<version>为版本)

  ```bash
  env PNPM_VERSION=<version> sh -
  ```

  

