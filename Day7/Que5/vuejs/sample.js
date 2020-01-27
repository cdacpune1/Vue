new Vue({
    el:'#d1',
    data:{
        current:'123',
        oprator:null,
        prev: null,
        oprclicked:false
    },
    methods:{
        clear:function(){
            this.current = ' ';
        },
        append:function(number){
            if(this.oprclicked){
                this.current = '';
                this.oprclicked = false;
            }
this.current = `${this.current} + ${number}`;
        },

        setprev:function(){
            this.oprclicked = true;        
            this.prev = this.current;
        },
        add:function(){
this.oprator = (a,b) => a + b;
this.setprev();
},
        min:function(){
            this.oprator = (a,b) => a - b;
            this.setprev(); 
        },
        mul:function(){
            this.oprator = (a,b) => a * b;
            
            this.setprev();
        },
        div:function(){
            this.oprator = (a,b) => a / b;
            this.setprev();
        },
        total:function(){
            debugger;
            this.current = `${this.oprator(
                parseFloat(this.current),
                parseFloat(this.prev) 
                )}`;
                this.prev = null;  
                //console.log(typeof'current');
        }
    }
})