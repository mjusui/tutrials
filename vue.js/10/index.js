const componentA={
  data: function(){
    return {
      prefix: 'component',
    };
  },
  props: ['count','letter'],
  computed: {
    name: function(){
      return this.prefix + this.letter;
    },
  },
  template: `<div>
    <input type='button' :value="name" @click="count++"></input>
    <div>{{ count }}</div>
  </div>`
};


const inst = new Vue({
  el: '#instance',
  data: {
    opt: {
      letter: 'A',
      count: 0,
    },
  },
  components: {
    'component-a': componentA,
  },
});

