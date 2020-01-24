new Vue({
    el:'#d1',
    data:{
        age:25  ,
        stlobj: {
            outline: 'none',
            color:'white',
            backgroundColor: 'green',
            cursor: 'pointer',
            padding: '8px 16px',
            verticalAlign: 'middle',
         }
    },
    methods:{
        // add:function(){
        //     this.age++;
        // },
        // sub:function(){
        //     this.age--;
        // }
// chngclr:function(){
// this.stlobj.backgroundColor = 'red';
// },
say:function(msg){
//    debugger;
       alert(msg);
   
},
        add:function (inc){
            this.age += inc;
        },

        sub:function (dec) {
            this.age -= dec;
            
        }
    }
})