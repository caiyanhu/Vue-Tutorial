当父组件的属性变化时，它会向下影响子组件，但是反过来不成立。这有效地避免了子组件意外地修改父组件的属性。

另外，每次父组件一更新，所有子组件经过props接收的值也会变成最新的，因此子组件也**不必**尝试修改props里的值，否则在控制台中会看到Vue的警告。

子组件通常在两种情况下会想去更新一个prop：
1. prop传进来的时候是做为初始值，子组件想把它当做一个local data property
2. prop传进来时是raw data，需要对它进行转换

对应的解决办法：
1. 定义一个local data property,使用prop的初始值做为它的初始值
```javascript
props: ['initialCounter'],
data: function()
{
  return {counter: this.initialCounter};
}
```
2. 定义一个computed property,它是由prop的值计算而来
```javascript
props: ['size'],
computed:
{
  normalizedSize: function()
  {
    return this.size.trim().toLowercase();
  }
}
```

<blockquote>
在JavaScript中，对象和数组是通过引用传递的，所以如果prop是一个数组或对象，子组件对它进行修改将**会**影响到父组件。
</blockquote>
