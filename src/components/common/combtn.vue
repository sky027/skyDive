<template>
  <div>
    <button class="buttons" :class="setClass('btn')">OKOKOK</button>
  </div>
</template>

<script>
  import "./cdialog/js/jquery-2.1.4.js";
  let time = new Date().getTime();
  export default {
    //name: "combtn",
    props:{

    },
    mounted() {
      this.$nextTick(() => {
        var str = $(".buttons").text();
        console.log(str);
      });
      console.log(time);
    },
    methods:{
      setClass(v){
        return v+time+'';
      }
    }
  }
</script>

<style scoped>
  .buttons{
    width: 80px;
    height: 32px;
    background: #A42524;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
  }
</style>
