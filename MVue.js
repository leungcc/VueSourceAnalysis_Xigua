class Compile {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm
    //1.避免回流和重绘，获取文档碎片对象放到内存中
    const fragment = this.node2Fragment(this.el)
    //2.编译模版
    this.compile(fragment)
    //3.追加子元素到根元素
    this.el.appendChild(fragment)
  }
  isElementNode(node) {
    return node.nodeType === 1
  }
  node2Fragment(el) {
    //创建文档碎片
    const f = document.createDocumentFragment()
    let firstChild
    while (firstChild = el.firstChild) {
      f.appendChild(firstChild)
    }
    return f
  }
  compile(fragment) {
    const childNodes = fragment.childNodes
    childNodes.forEach(child => {
      if(this.isElementNode(child)) {
        console.log('元素节点', child)
        //TO DO 处理元素节点
      } else {
        console.log('文本节点', child)
        //TO DO 处理文本节点
      }
      if(child.childNodes && child.childNodes.length) {
        this.compile(child.childNodes)
      }
    })
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