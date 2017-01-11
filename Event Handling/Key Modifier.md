当监听键盘事件时，通常需要检查所按键的代码。Vue为**v-on**添加了一些key modifier.

```html
<!-- only call vm.submit() when the keyCode is 13 -->
<input v-on:keyup.13="submit">
```
但是按键码不容易记忆，所以Vue为常用的按键提供了别名：
- .enter
- .tab
- .delete(capture both 'Delete' and 'Backspace')
- .esc
- .space
- .up
- .down
- .left
- .right

```html
<!-- same as above -->
<input v-on:keyup.enter="submit">
<!-- also works for shorthand -->
<input @keyup.enter="submit">
```

也可以在全局对象`config.keyCodes`里自定义key modifier的别名
```js
// enable v-on:keyup.f1
Vue.config.keyCodes.f1 = 112
```
