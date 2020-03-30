class Compile {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm
    //避免回流和重绘，获取文档碎片对象放到内存中
    this.node2Fragment(this.el)
  }
  isElementNode(node) {
    return node.nodeType === 1
  }
}


class MVue {
  constructor(options) {
    this.$el = options.el
    this.$data = options.$data
    this.$options = options
    if(this.$el) {
      //1.实现一个数据观察者
      //2.实现一个指令解析器
      new Compile(this.$el, this)
    }
  }
}