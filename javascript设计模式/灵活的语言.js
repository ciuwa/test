// 1. 直接全局声明式
function checkName() {
  console.log('验证名称')
}
function checkEmail() {}
checkName()
// 2. 用对象收编全局
const checkObject = {
  checkName() {
    console.log('验证名称')
  },
  checkEmail() {}
}
checkObject.checkName()
// 3. 使用函数对象
const CheckObject = function () {}
CheckObject.checkName = function () {
  console.log('验证名称')
}
CheckObject.checkEmail = function () {}
CheckObject.checkName()
// 4. 真假对象
const Check = function () {
  return {
    checkName() {
      console.log('验证名称')
    },
    checkEmail() {}
  }
}
const a = Check()
a.checkName()
// 5. 使用构造函数式
function C() {
  this.checkName = function () {
    console.log('验证名称')
  }
}
new C().checkName()
// 6. 实例
function D() {}
D.prototype.checkName = function () {
  console.log('验证名称')
}
new D().checkName()
// 7. 原型
function E() {}
E.prototype = {
  checkName() {
    console.log('验证名称')
  }
}
new E().checkName()
// 函数式编程
function F() {}
F.prototype = {
  checkName() {
    console.log('验证名称')
    return this
  },
  checkEmail() {
    console.log('验证邮箱')
    return this
  }
}
new F().checkName().checkEmail()
// 函数的祖先 Function
Function.prototype.addMethod = function (name, fn) {
  this[name] = fn
  return this
}
const methods = new Function()
methods.addMethod('checkName', function () {
  console.log('验证名称')
  return this
}).addMethod('checkEmail', function(){
  console.log('验证邮箱')
  return this
})
methods.checkName().checkEmail()
