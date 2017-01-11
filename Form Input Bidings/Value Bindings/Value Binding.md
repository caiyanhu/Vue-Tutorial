v-model指令通常作用于radio、checkbox、select option组件，v-model绑定的值通常是字符串（对于checkbox则是boolean）
```html
<!-- 当‘a’被选中的时候，picked===a -->
<input type="radio" v-model='picked' value="a">
<!-- 勾选时toggle是true，否则是false -->
<input type="checkbox" v-model='toggle'>
<!-- 当'abc'选项被选中时，selected===abc -->
<select v-model='selected'>
  <option value="abc">ABC</option>
</select>
```
可以通过**v-bind**将v-model下的值，动态绑定到vue实例中。

### checkbox
```html
<input
  type="checkbox"
  v-model='toggle'
  v-bind:true-value='a'
  v-bind:false-value='b'>
```
```javascript
// when checked
vm.toggle === vm.a
// when unchecked
vm.toggle === vm.b
```
### radio
```html
<input type="radio" v-model='pick' v-bind:value="a">
```
```javascript
// when checked
vm.pick === vm.a
```
### select options
```html
<select v-model="selected">
  <option v-bind:value="{ number: 123 }">123</option>
</select>
```
```javascript
// when selected
typeof vm.selected // 'object'
vm.selected.number // 123
```
