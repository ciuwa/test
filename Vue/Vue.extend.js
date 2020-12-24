// Vue.extend 简单入门示例
const Com = Vue.extend({
  template: `<h1 @click="handleClick">{{msg}}</h1>`,
  data() {
    return {
      msg: 'Hello Vue.extend'
    }
  },
  methods: {
    handleClick() {
      this.msg = this.msg.split('').reverse().join('')
    }
  }
})
// Vue.extend()会返回一个vue组件实例
document.body.appendChild(new Com().$mount().$el)

// Vue.extend 实现alert方法
function hint({ title = '', content = '' }) {
  const Hint = Vue.extend({
    template: `<div v-if="isHide"><h3>{{title}}</h3>{{content}}</div>`,
    data() {
      return {
        title: title,
        content: content,
        isHide: true
      }
    },
    mounted() {
      setTimeout(() => (this.isHide = false), 1000)
    }
  })
  const h = new Hint()
  document.body.appendChild(h.$mount().$el)
}

hint({
  title: 'Notice',
  content: 'Hello Hint!'
})
