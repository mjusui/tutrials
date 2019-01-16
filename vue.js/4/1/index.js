
const inst = new Vue({
  el: '#instance',
  data: {
    flag: false,
    name: 'namex',
    clas: {
      a: true, b: false, c: true,
    }
  },
  created: function(){
    const loop=()=>{
      setTimeout(()=>{
        this.flag=!this.flag;
        loop();
      },1000);
    };
    loop();
  },
});

