"use strict";
console.log("你好");
var flag = true;
flag = false;
console.log(flag);
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
