
const inst = new Vue({
  el: '#instance',
  data: {
    disp: false,
    show: false,
    name: 'namex',
    nums: [1,2,3]
  },
  methods: {
    toggle: function(){
      if(this.nums.length)
        this.nums=[];
      else
        this.nums=[1,2,3];
    },
  }
});

