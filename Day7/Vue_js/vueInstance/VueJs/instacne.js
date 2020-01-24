new Vue({
    el:'#r1',//id of Div
    data:{
       
        name : 'Raj', //obj
        job : 'Ninja',//obj
        lnm : 'rj'    //obj
    },
    methods:{
        msg:function(a){
            return 'Good' + ' ' + a + ' ' + this.lnm;
        }
    }
});