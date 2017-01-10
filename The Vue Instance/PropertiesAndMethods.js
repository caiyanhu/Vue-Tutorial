var d = {a:1};
var vm = new Vue({
  el: '#example',
  data:d;
})
vm.a === d.a //true
// setting the property also affects original data
vm.a=4;
d.a; //4

// ... and vice vesa
d.a=2;
vm.a; //2

vm.$el === document.getElementById('example');
vm.$data === d
// $watch is an instance method
vm.$watch('a',function (newVal,oldVal) {
  // this callback will be called when 'vm.a' changes
})
