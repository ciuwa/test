var ATM = (function () {
  // 静态私有成员 余额/ATM记录（类似于传统面向对象语言的 private static int xxx = 1000）
  let balance = 1000
  const record = []

  // 创建构造方法 （类似于传统面向对象语言的 public class_name(){}）
  function _atm(name = '') {
    this.name = name
    // 公有实例方法 （类似于传统面向对象语言的 public void withdraw(){}）
    this.withdraw = function (amount) {
      if (balance >= amount) {
        balance -= amount
        _log(this.name, amount)
      } else {
        console.log('余额不足，当前ATM余额 ￥' + balance)
      }
    }
  }
  // 构建原型静态公有方法 查询ATM余额（传统面向对象里没有prototype，任何实例可以访问并修改，但是这个方法不属于实例）
  _atm.prototype = {
    balance(echo = false) {
      if (echo) record.forEach((v) => console.log(v))
      else return balance
    }
  }

  // 静态私有方法 用于存储取款记录（类似于传统面向对象语言的 private static void xxx(){}）
  function _log(name, amount) {
    record.push(name + '取款 ￥' + amount + ' ATM余额 ￥' + balance)
  }
  return _atm
})()

// 小明和小红分别进行取款
let xm = new ATM('小明')
xm.withdraw(200)
xm.withdraw(500)

let xh = new ATM('小红')
xh.withdraw(100)

// 小张来过来查询下ATM取款记录
let xz = new ATM()
xz.balance(true)

// 以上打印输出
// 小明取款 ￥200 ATM余额 ￥800
// 小明取款 ￥500 ATM余额 ￥300
// 小红取款 ￥100 ATM余额 ￥200