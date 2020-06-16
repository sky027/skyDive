<template>
  <div class="hello">
    <div class="dv1">
        21312312312321312321
        <div class="dv2">
          4279873982173127391873981
          <div class="dv3">
            740982498109238210931
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.dv1{
  color: red;
  font-size: 18px;
  .dv2{
    color: blue;
    font-size: 28px;
    .dv3{
      color: blueviolet;
      font-size: 38px;
    }
  }
}
</style>
