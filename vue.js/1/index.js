
const inst = new Vue({
  el: '#instance',
  data: {
    message: 'x',
  },
  created:function(){
    const loop=()=>{
      setTimeout(()=>{
        inst.message+='x';
        loop();
      },1000);
    };
    loop();
  },
});


