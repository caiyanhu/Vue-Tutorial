modifier key包括：
- .ctrl
- .alt
- .shift
- .meta

meta键在不同的系统上对应不同的键：Mac系统上是commad键，Windows系统上是win键...

```html
<!-- Alt + C -->
<input @keyup.alt.67="clear">
<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```
