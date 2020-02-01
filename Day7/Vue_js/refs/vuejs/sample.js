
new Vue({
    el:'#r1',
data:{
    output:'Your fev car:'

},
methods:{
    readref:function(){
        console.log(this.$refs.test.innerText);
    this.output = this.$refs.input.value; 
    }
}    
    
});

