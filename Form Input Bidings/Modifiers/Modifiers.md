### .lazy
默认情况下，只要有**input**事件，v-model就会同步javascript中的数据和DOM中的内容。通过对v-model加**lazy**修饰符,双向同步的时间点就变成了**change**

通俗的讲，之前一边输入p标签内就能看到变化；加了**lazy**后，只有输入完成敲了回车之后，p标签才会显示输入的内容。
```html
<!-- synced after 'change' instead of 'input' -->
<input v-model.lazy="msg">
<p>{{ msg }}</p>
```
### .number
通过对v-model加入**number**修饰符，可以将用户输入转变成数字类型。
```html
<input v-model.number='age' type="number">
```
如果只是有type=‘number’,输入元素返回的值通常还是字符串，所以加入**.number**很有用。
### .trim
使用**trim**修饰符可以将用户输入自动去除空白。当没有trim修饰时，在输入时前面有空白时会保留在输入框中。当有了trim修饰时，即使前面有空白，但是一旦输入框失去焦点后，前面的空白自动去除了。
```html
<input v-model.trim='msg'>
```
