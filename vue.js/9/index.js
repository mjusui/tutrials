
Vue.component('good-thing',{
  data: function(){
    return { count: 0, };
  },
  props:[ 'good', 'thing', ],
  template: `
    <div>
      <input :value="thing" @input="$emit('input', $event.target.value)">
      <div @click="count++;$emit('more-good')">count: {{ count }}, good: {{ good }}, thing: {{ thing }}</div>
      <slot></slot>
    </div>
  `,
});


const inst = new Vue({
  el: '#instance',
  data: {
    good: 22,
    thing: 33,
    text: 'Good Thing',
  }
});

