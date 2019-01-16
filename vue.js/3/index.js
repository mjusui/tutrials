
const inst = new Vue({
  el: '#instance',
  data: {
    count: 0,
    name: 'namex',
  },
  computed:{
    x: function(){
      let ret='';
      let cnt=0;
      let len=this.count % 7;
      while(cnt < len){
        ret+='x';
        cnt++;
      }
      return ret;
    },
    rand: function(){
      return Math.random();
    },
  },
  methods:{
    calcRand: function(){
      return Math.random();
    },
  },
  created: function(){
    const loop=()=>{
      setTimeout(()=>{
        this.count++;
        loop();
      },1000);
    };
    loop();
  },
});


