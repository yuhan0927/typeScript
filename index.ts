console.log("你好")

var flag:boolean = true
flag = false
console.log(flag)

//数组类型(array) ts中定义数组的两种方法

//    1.第一种定义数组的方式

    // var arr:number[] = [11,22,33]
    // var arr:string[] = ['11','22','33']

//    2.第二种定义数组的方法
    // var arr:Array<number>=[11,22,33]
    // var arr:Array<string>=['11','22','33']
//    3.第三种定义数组的方式
    // var arr3:any[] = [123,'123',true]

// 元组类型(tuple) 属于数组的一种
    // let arr:[number,string] = [123,'123'] //给数组中每一个位置指定类型


// 枚举类型
    // enum Flag {success=1,error=2}
    // let f:Flag=Flag.error;

    // enum Color {blue,red,'orange'};//如果标识符没有赋值，它的值就是下标
    // var c:Color = Color.red
    // console.log(c) //打印出来下标

    // enum Color {blue,red=3,'orange'};//如果标识符没有赋值，它的值就是下标
    // var c:Color = Color.orange
    // console.log(c) //4 因为给red复制为3，后面的值是前面值+1

    // enum Err {'undefined'=-1, 'null'=-2, success='-3'}
    // var e:Err = Err.undefined
    // console.log(e)


//任意类型(any) 
    // var num:any = 123
    // num='str'
    // num = true

    // var oBox:any = document.getElementById('box')
    // oBox.style.color='red';

// null 和 undefined 其他(never类型)数据类型的子类型
    // var num:number
    // console.log(num) //输出:undefined 报错
    // var num1:undefined
    // console.log(num1) //输出:undefined 正确

    // var num:number | undefined
    // num = 123
    // console.log(num) //123

    // var num:number | undefined
    // console.log(num) //undefined

// void类型: typescript中的void表示没有任何类型，一般用于定义方法的时候没有返回值
    // 正确写法
    // function run():void {
    //     console.log('run')
    // }
    // run()

    // 错误写法
    // function run():number {
    //     console.log('run')
    // }
    // run()

    // 正确写法
    // function run():number {
    //     return 123
    // }
    // run()

// never类型:是其他类型(包括null和undefined)的子类型，代表从不会出现的值。
// 这意味着声明never的变量只能被never类型所赋值。

    // var a:never
    // // a=123 //错误
    // a=(() => {
    //     throw new Error('错误')
    // })()


// 函数的定义
    // 函数声明法
        // function run():string{
        //     return 'run'
        // }
        // 错误写法
        // function run():string{
        //     return 123
        // }

    // 匿名函数
    // var fun2 = function():number{
    //     return 123
    // }


// ts中定义方法传参
    // function getInfo(name:string,age:number):string{
    //     return`${name}--${age}`
    // }
    // alert(getInfo('zhangsan',20))

    // var getInfo = function(name:string,age:number):string{
    //     return `${name} -- ${age}`
    // }
    // alert(getInfo('zhangsan',20))

// 没有返回值的方法
    // function run():void{
    //     console.log('run')
    // }


// 方法的可选参数
    // es5里面方法的形参和实参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数
    // function getInfo(name:string,age?:number):string{ //参数后面加?表示可选参数，可传可不传
    //     if(age) {
    //         return `${name} --- ${age}`
    //     }else {
    //         return `${name} --- 年龄保密`
    //     }
    // }
    // alert(getInfo('zhangsan'))

    // 注意:可选参数必须配置到参数的最后


// 默认参数
    // es5里面没法设置默认参数，es6和ts中都可以设置默认参数
    // function getInfo(name:string,age:number=20):string{
    //     if(age) {
    //         return `${name} --- ${age}`
    //     }else {
    //         return `${name} --- 年龄保密`
    //     }
    // }
    // alert(getInfo('zhangsan')) //张三---20
    // alert(getInfo('zhangsan',30)) //张三---30

// 剩余参数
    // function sum(a:number,b:number,c:number,d:number):number{
    //     return a+b+c+d;
    // }
    // alert(sum(1,2,3,4)) //10

    // function sum(a:number,b:number,...result:number[]):number{
    //     var sum = a+b;
    //     for(var i=0; i<result.length;i++){
    //         sum+=result[i]
    //     }
    //     return sum
    // }
    // alert(sum(1,2,3,4)) //10

// 函数的重载
    // java中方法的重载:重载指的是两个或者两个以上同名函数，但它们的参数不一样。这时会出现函数重载的情况
    // typescript中的重载:通过为同一个函数提供多个函数类型定义来实现多种功能的目的
    // ts为了兼容es5 以及 es6 重载写法和java中有区别
    // function getInfo(name:string):string;
    // function getInfo(age:number):number;
    // function getInfo(str:any):any{
    //     if(typeof str === 'string'){
    //         return '我叫'+str
    //     }else{
    //         return str
    //     }
    // }

    // function getInfo(name:string):string;
    // function getInfo(name:string,age:number):string;
    // function getInfo(name:any,age?:any):any{
    //     if(age){
    //         return '我叫'+name+'我今年'+age
    //     }else{
    //         return '我叫'+name
    //     }
    // }
    // alert(getInfo('zhangsan')) //正确写法
    // alert(getInfo('zhangsan',20)) //正确写法
    // alert(getInfo(20)) //错误写法



    // typescript中的类

        // es5中的最简单的类
        // function Person() {
        //     this.name ='sd',
        //     this.age = 20
        // }
        // var p = new Person();
        // alert(p.name)

        // ts中类的定义
        // class Person{
        //     name:string; //属性 前面省略了public关键词

        //     constructor(n:string){ //构造函数 实例化类的时候触发的方法
        //         this.name = n
        //     }

        //     run():void {
        //         alert(this.name)
        //     }
        // }

        // var p = new Person('张三');
        // p.run()


        // class Person{
        //     name:string; //属性 前面省略了public关键词

        //     constructor(name:string){ //构造函数 实例化类的时候触发的方法
        //         this.name = name
        //     }

        //     getName():string {
        //         return this.name
        //     }
        //     setName(name:string):void{
        //         this.name = name;
        //     }
        // }

        // var p = new Person('张三');
        // alert(p.getName()) //张三
        // p.setName('李四')
        // alert(p.getName()) //李四


        // ts中实现继承  extends super
        // class Person{
        //     name:string;

        //     constructor(name:string){
        //         this.name = name
        //     }

        //     run():string {
        //         return `${this.name}在运动`
        //     }
        // }
        // // var p = new Person('王五')
        // // alert(p.run()) //王五在运动 
        // class Web extends Person {
        //     constructor(name:string){
        //         super(name)  //初始化父类的构造函数
        //     }
        // }
        // var w = new Web('李四')
        // alert(w.run()) //李四在运动


        // ts中继承的探讨 父类的方法和字类的方法一致
        // class Person{
        //     name:string;

        //     constructor(name:string){
        //         this.name = name
        //     }

        //     run():string {
        //         return `${this.name}在运动`
        //     }
        // }
        // // var p = new Person('王五')
        // // alert(p.run()) //王五在运动 
        // class Web extends Person {
        //     constructor(name:string){
        //         super(name)  //初始化父类的构造函数
        //     }
        //     run():string{
        //         return `${this.name}在运动-子类`
        //     }
        //     work() {
        //         alert(`${this.name}在工作`)
        //     }
        // }
        // var w = new Web('李四')
        // w.work()//李四在工作
        // alert(w.run()) //李四在运动-子类


        // 类里面的修饰符  typescript里面定义属性的时候给我们提供了三种修饰符
        /**
         * public 公有 在类里面 字类 类外面都可以访问
         * protected：保护类型 在类里面、字类都可以访问
         * private：私有 在类里面可以访问
         * 属性不加修饰符默认public公有
         */
        // class Person{
        //     public name:string;

        //     constructor(name:string){
        //         this.name = name
        //     }

        //     run():string {
        //         return `${this.name}在运动`
        //     }
        // } 
        // class Web extends Person {
        //     constructor(name:string){
        //         super(name)  //初始化父类的构造函数
        //     }
        //     run():string{
        //         return `${this.name}在运动-子类`
        //     }
        //     work() {
        //         alert(`${this.name}在工作`)
        //     }
        // }
        // var w = new Web('李四')
        // w.work()//李四在工作
        // alert(w.run()) //李四在运动-子类
        // // 类外部访问共有属性
        // var p = new Person('哈哈哈')
        // alert(p.name) //哈哈哈

        // class Person{
        //     protected name:string;

        //     constructor(name:string){
        //         this.name = name
        //     }

        //     run():string {
        //         return `${this.name}在运动`
        //     }
        // } 
        // class Web extends Person {
        //     constructor(name:string){
        //         super(name)  //初始化父类的构造函数
        //     }
        //     work() {
        //         alert(`${this.name}在工作`)
        //     }
        // }
        // var w = new Web('李四')
        // w.work() //李四的工作
        // var p = new Person('哈哈哈');
        // alert(p.name); //报错

        // 静态属性 静态方法
        // class Person {
        //     public name:string
        //     static sex = '女' //静态属性
        //     constructor(name:string){
        //         this.name = name;
        //     }
        //     run() { //实例方法
        //         alert(`${this.name}在运动`)
        //     }
        //     static print() { //静态方法  静态方法没法直接调用类里面的属性
        //         alert('静态方法')
        //         alert('静态方法' + this.name)//错误
        //         alert(Person.sex) //正确
        //     }
        // }
        // Person.print() //直接调用静态方法




        // 抽象类 继承 多态

        // 多态:父类定义一个方法不去实现，让继承它的子类去实现 每一个子类有不同的表现
        // 多态属于继承
        // class Animal {
        //     name:string
        //     constructor(name:string){
        //         this.name = name
        //     }
        //     eat() {  //具体吃什么不知道，具体让继承它的子类去实现，每一个子类有不同的表现
        //         console.log('吃的方法')
        //     }
        // }
        // class Dog extends Animal{
        //     constructor(name:string){
        //         super(name)
        //     }
        //     eat() {
        //         return this.name+'吃骨头'
        //     }
        // }
        // class Cat extends Animal{
        //     constructor(name:string){
        //         super(name)
        //     }
        //     eat() {
        //         return this.name+'吃鱼'
        //     }
        // }

        // typescript中的抽象类：它是提供其他继承的基类，不能直接被实例化。
        // 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
        // abstract抽象方法只能放在抽象类里面
        // 抽线类和抽象方法用来定义标准，标准：Animal这个类要求它的子类必须包含eat方法
        // 标准：
        // abstract class Animal {
        //     public name:string;
        //     constructor(name:string){
        //         this.name = name;
        //     }
        //     abstract eat():any; //抽象类的子类必须实现抽象类里面的方法
        //     run(){
        //          console.log('其他方法可以不实现')
        // }
        // }
        // // var a = new Animal() //错误写法
        // class Dog extends Animal{
        //     constructor(name:any){
        //         super(name)
        //     }
        //     // 抽象类的子类必须实现抽象类里面的抽象方法
        //     eat(){
        //         console.log(this.name+'吃粮食')
        //     }
        // }
        // var d = new Dog('小狗')
        // d.eat();
        // class Cat extends Animal{
        //     constructor(name:any){
        //         super(name)
        //     }
        //     // 抽象类的子类必须实现抽象类里面的抽象方法
        //     eat(){
        //         console.log(this.name+'吃鱼')
        //     }
        // }
        // var c = new Cat('小猫')
        // c.eat();


    
    // 属性接口  对json的约束
    // function printLabel(lableInfo:{label:string}):void {
    //     console.log('printLabel')
    // }
    // // var labelJson
    // printLabel({name:'张三'}) //错误写法
    // printLabel({label:'张三'}) //正确写法


    // 对批量方法传入参数进行约束。
    // interface FullName{ //interface定义接口
    //         firstName:string; //注意分号结束
    //         secondName:string;
    //     }
    // function printName(name:FullName) {
    //     // 必须传入对象 firstName secondName
    //     console.log(name.firstName+'---'+name.secondName)
    // }
    // function printInfo(info:FullName) {
    //     console.log(info.firstName+info.secondName+info.age)
    // }
    // var obj={
    //     age:20,
    //     firstName:'张',
    //     secondName:'三'
    // }
    // printName(obj)
    // var info={
    //     age:20,
    //     firstName:'李',
    //     secondName:'四'
    // }
    // printInfo(info)


    // interface FullName{ //interface定义接口
    //     firstName:string; //注意分号结束
    //     secondName:string;
    // }
    // function printName(name:FullName) {
    //     // 必须传入对象 firstName secondName
    //     console.log(name.firstName+'---'+name.secondName)
    // }
    // printName('123')  //错误
    // printName({
    //     age:20,
    //     firstName:'张',
    //     secondName:'三'
    // }) //错误，如果直接写在里面则只能有firstName和secondName
    // printName({
    //     firstName:'张',
    //     secondName:'三'
    // }) //正确
    // var obj = {
    //     age:20,
    //     firstName:'张',
    //     secondName:'三'
    // }
    // printName(obj) //正确，如果在obj中则只要有firstName和secondName就可以


    // 接口：可选属性
    // interface FullName{
    //     firstName:string;
    //     secondName:string;
    // }
    // function getName(name:FullName){
    //     console.log(name)
    // }
    // // 参数的顺序可以不一样
    // getName({
    //     secondName:'secondName',
    //     firstName:'firstName'
    // })
    
    // interface FullName{
    //     firstName:string;
    //     secondName?:string; //加?接口的可选属性
    // }
    // function getName(name:FullName){
    //     console.log(name)
    // }
    // // 参数的顺序可以不一样
    // getName({
    //     firstName:'firstName'
    // })


    // 函数类型接口：对方法传入 的参数以及返回值进行约束
    // 加密的函数类型接口
    // interface encrypt{
    //     (key:string,value:string):string;
    // }
    // var md5:encrypt=function(key:string,value:string):string{
    //     // 模拟操作
    //     return key+value
    // }
    // console.log(md5('name','zhangsan'))


    // 可索引接口：数组、对象的约束（不常用）
    // 可索引接口对数组的约束
    // interface UserArr{
    //     [index:number]:string
    // }
    // var arr:UserArr=["123",'6541'];
    // console.log(arr[0])
    // // 可索引接口对对象的约束
    // interface UserObj{
    //     [index:string]:string
    // }
    // var arr1:UserObj={name:'20'}

    // 类类型接口：对类的约束和抽象类有相似
    // interface Animal{
    //     name:string;
    //     eat(str:string):void;
    // }
    // class Dog implements Animal{
    //     name:string;
    //     constructor(name:string){
    //         this.name = name;
    //     }
    //     eat(){
    //         console.log(this.name+"吃骨头")
    //     }
    // }
    // var d = new Dog('小黑')
    // d.eat() //小黑吃粮食


// 接口扩展：接口可以继承接口
// interface Animal{
//     eat():void;
// }
// interface Person extends Animal{
//     work():void;
// }
// class Progrommer{
//     public name:string
//     constructor(name:string){
//         this.name = name
//     }
//     coding() {
//         console.log(this.name+'coding')
//     }
// }
// class Web extends Progrommer implements Person{
//     constructor(name:string){
//         super(name)
//     }
//     eat() {
//         console.log(this.name)
//     }
//     work() {
//         console.log('work')
//     }
// }
// var w = new Web('小李');
// w.eat();
// w.coding() //小李coding