
const inst = new Vue({
  el: '#instance',
  data: {
    count: 0,
    disp: false,
    name: 'namex',
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


