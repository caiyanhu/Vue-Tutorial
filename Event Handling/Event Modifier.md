在事件处理函数中经常需要调用`evetn.preventDefault()`或者 `event.stopPropagation()`，尽管在方法里可以很轻松的实现这一点，但是让方法去关注数据逻辑而不是DOM操作会更好。

那么不在方法里去调用这样的函数，又应该怎么做呢？Vue为**v-on**提供了一些event modifier
- .stop
- .prevent
- .capture
- .self
- .once

```html
<!-- the click event's propagation will be stopped -->
<a v-on:click.stop="doThis"></a>
<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat"></a>
<!-- just the modifier -->
<form v-on:submit.prevent></form>
<!-- use capture mode when adding the event listener -->
<div v-on:click.capture="doThis">...</div>
<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div v-on:click.self="doThat">...</div>
<!-- the click event will be triggered at most once -->
<a v-on:click.once="doThis"></a>
```
