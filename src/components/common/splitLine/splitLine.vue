<template>
    <div class="split-line" :style="{height: height + 'px'}"></div>
</template>

<script>
    export default {
        name: "split-line",
      props: {
        height: {
          type: Number,
          default: 4
        }
      }
    }
</script>

<style scoped>
.split-line{
  width: 100%;
  border-radius: 2px;
  background-image: url(640.gif);
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
