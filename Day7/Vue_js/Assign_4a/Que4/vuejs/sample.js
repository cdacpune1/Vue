new Vue({
    el:'#d1',
  count :0,
    data:{
        name:''
    }
    ,
    computed:{
        len:function(){
            //count=0;
            for(var ch='a';ch<='z';ch++){
            for(var i=0;i<name.length;i++) {
                if(name.chatAt(i)=== 'ch'){
                    count++;
                    console.log(count);
                }
            }         
            }
        }
   }
})