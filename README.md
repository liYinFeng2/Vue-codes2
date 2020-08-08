# Vue-codes2
Vue【模板解析+初次渲染】源码手动实现

## 开发环境及版本
node >= V8.0.0


## 项目创建步骤
1. npm init
2. touch rollup.config.js
3. 安装依赖：cnpm i -D @babel/core @babel/preset-env cross-env rollup rollup-plugin-babel rollup-plugin-serve


## Vue【模板解析+初次渲染】源码手动实现

### 1. 原理：主要分两部分实现：模板解析+视图初渲染
模板解析：将html片段通过正则匹配进行截取，生成AST语法树，再生成render函数

视图渲染：通过 updateComponent函数实现，_render函数生成Vnode，_update函数将Vnode渲染成真实的Dom节点，替换原有视图。

依赖收集：在数图渲染的过程中，会获取相关的变量，这个时候要进行【依赖收集】，等将来数据发生变化通知视图。

### 2. 实现功能
1. 模板解析
2. 视图渲染
3. 依赖收集(包含数组依赖收集)
4. 手动实现$watcher方法

### 3. 缺点/弊端
watcher重复存放、异步更新、视图的更新频率、