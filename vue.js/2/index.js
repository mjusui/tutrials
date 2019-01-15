
const inst = new Vue({
  el: '#instance',
  data: {
    name: 'namex',
    count: 0,
  },
  created:function(){
    const loop=()=>{
      setTimeout(()=>{
        this.count++;
        loop();
      },1000);
    };
    loop();
  },
});


