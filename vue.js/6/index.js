
const inst = new Vue({
  el: '#instance',
  data: {
    nums: [1,2,3],
    vals:{ a:'x', b:'y', c:'z', },
  },
  computed:{
    filter: function(){
      return this.nums.filter((num)=>{
        return num % 2 > 0;
      });
    },
  },
});

