Vue.component('greet',{
    template:'<p> Hey is  i am reusable comp:{{name}}.<button @click="chngnm">changeName</button></p>',   
    data:function(){
        return{
        name:'Mario'
    }
    },
    methods:{
        chngnm:function(){
            this.name =  'Yoshi';
        }
    }

})

new Vue({
    el:'#r1',
    
    
});

new Vue({
    el:'#r2',
    
});