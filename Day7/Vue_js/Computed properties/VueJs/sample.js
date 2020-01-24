new Vue({
    el:'#d1',
    data:{
        a:0,
        b:0,
        age:20
        
            
    },
    methods:{
        // addtoA:function(){
        //     return this.a + this.age;
        // },
        // addtoB:function(){
        //     return this.b + this.age;
        // }

    },
    computed :{
        addtoA:function(){
            console.log('addtoA');
            return this.a + this.age;
        },
        addtoB:function(){
            console.log('addtoB');
            return this.b + this.age;
        }
    }
         
})