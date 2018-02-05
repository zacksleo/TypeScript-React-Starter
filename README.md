# 陪玩代打 web by typescript


## 相关文档

+ [TypeScript React Starter中文版](https://zhuanlan.zhihu.com/p/27847933)
+ [TypeScript React Starter 官方](https://github.com/Microsoft/TypeScript-React-Starter)
+ [create-react-app 中文版](https://github.com/XanthusL/create-react-app-zh)
+ [create-react-app 官方](https://github.com/facebook/create-react-app)
+ [Git工作流程及使用规范](https://mops-wiki.lianluo.com/guideline/Git%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B%E5%8F%8A%E4%BD%BF%E7%94%A8%E8%A7%84%E8%8C%83)


## 安装依赖

### 首先安装 yarn

[Yarn安装文档](https://yarnpkg.com/zh-Hans/docs/install)

`yarn install`


## 开发流程

### checkout 新建分支

### 创建组件, 在src/components中创建组件

如 Oder 组件, 每个组件一个单独的目录, 里面存放组件类, 测试代码 及css等其他资源, 默认导出组件类为 index.ts/index.tsx

```
// src/components/Order/index.tsx


```

## 运行

`yarn start`

### 编写测试

运行测试 `yarn run test`

[参考文档](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### 提交代码

分支提交上来以后, 会自动进行代持续集成: 包括码格式审查和相关测试, 并给出结果

只有持续集成通过后, 才可以进行合并请求

注意: 每次提交代码时, 用 git cz 代替 git commit  (执行 `yarn install` 时, 已经自动安装好了 Commitizen)
