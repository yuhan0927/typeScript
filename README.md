# typeScript
## 1typeScript 安装
1. tsc --init 生成tsconfig.json  改"outDir":"./js"
2. 终端-》任务-》运行任务-》监视tsconfig.json
## 2typeScript中的数据类型--typescript中为了使编码更规范，更有利于维护，增加了类型校验（写ts代码必须指定类型），在typescript中主要给我们提供了以下数据类型
1. 布尔类型
    var flag:bollean=true
2. 数字类型
3. 字符串类型
4. 数组类型
5. 元组类型
6. 枚举类型
7. 任意类型
8. null 和 undefined
9. void类型
10. never类型

## 3typeScript中的函数
1. 函数的定义
2. 可选参数
3. 默认参数
4. 剩余参数
5. 函数重载
6. 箭头函数 es6

## 4typescript中的类
1. 类的定义
2. 继承
3. 类里面的修饰符
4. 静态属性 静态方法
5. 抽象类 继承 多态

## typescript的接口
<!-- 接口的作用：在面向对象编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到了一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类可以满足实际需要。typescript中的接口类似于Java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等 -->
1. 属性接口
2. 函数类型接口
3. 可索引接口
4. 类类型接口
5. 接口扩展

## typescript中的泛型
<!-- 泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能
通俗理解：泛型就是解决类 接口 方法的复用性、以及对不特定数据类型的支持 -->
1. 泛型的定义
2. 泛型的函数
3. 泛型类
4. 泛型接口
  