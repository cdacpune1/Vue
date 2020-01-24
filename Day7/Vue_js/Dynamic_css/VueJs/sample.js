 new Vue({
     el:'#d1',
     data:{
         avai :false,
         nearby:false
     },
     methods:{

     },
     computed:{
         compclass:function(){
return{
    avai :this.avai,
    nearby:this.nearby
}
         }

     }
 });