var one = new Vue({
    el:'#d1',
    data:{
       
        name : 'Raj', //obj
        
    },
    methods:{
        // chgnm:function(){
           
        // }
    },
    computed:{
        greet:function(){
            return'hello vue one';
        }
    }
});

var two = new Vue({
    el:'#d2',
    data:{
       
        name : 'Gaud', //obj
        
    },
    methods:{
        chgnm:function(){
            one.name =  "nameChanged" ;
        }
    },
    computed:{
        greet:function(){
            return'hello vue Two';
        }
    }
});

two.name = "changed from outside";