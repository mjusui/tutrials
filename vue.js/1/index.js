
const inst = new Vue({
  el: '#instance',
  data: {
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


