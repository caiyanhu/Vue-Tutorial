### Prop Validation

有些时候，子组件可能会想要对父组件传给它的prop进行一些验证。这是可以做到的，如果子组件提出的要求没有满足，Vue会发出警告。

在之前的例子中，子组件中的props是一个数组，如：
```javascript
Vue.component('child',
{
  // 表示child组件期望从父组件中获得的data名称是myMessage
  props: ['myMessage'],
  template: <span>{{ myMessage }}</span>
})
```
除了可以是数组外，props还可以是带有验证要求的对象。
```javascript
Vue.component('example',
{
  props:
  {
    // 基本类型检查，如果值为null表示可以接受任何类型
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 有要求的String类型
    propC:
    {
      type: String,
      required: true
    },
    // 带有默认值的Number类型
    propD:
    {
      type: Number,
      default: 100
    },
    // 对象，默认值是一个工厂函数的返回值
    propE:
    {
      type: Object,
      default: function()
      {
        return {message: 'hello'};
      }
    },
    // 自定义的验证函数
    propF:
    {
      validator: function(value)
      {
        return value > 100;
      }
    }
  }
})
```
可以选择的类型有：
- String
- Number
- Boolean
- Fucntion
- Object
- Array

当一个prop验证失败了，Vue会产生一条控制台警告。
