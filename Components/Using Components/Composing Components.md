在使用组件时，一般不会只用一个组件，而是多个组件组合在一起。其中最常见的就是父子关系：组件A在自己的模板中使用了组件B。

```javascript
Vue.component('A',
{
  template:'<span>B</span>'
})
```

组件之间不可避免地需要互相通信：父组件需要将数据下传给子组件，子组件需要将发生在自身的一些信息通知给父组件。但是，在设计上将父子组件解耦合也是很有必要的，这保证了每个组件的代码可以在相对隔离的环境下书写，同时也更易维护和重用。

在Vue.js中，父子组件的关系可以概括为：**props down**，**events up**。父组件通过**props**将数据传给子组件，子组件通过**events**给父组件发送消息。 ![props-events](https://vuejs.org/images/props-events.png)
