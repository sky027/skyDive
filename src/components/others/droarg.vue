<template>
    <div class="droarg">
      <draggable element="ul" v-model="listdata">
            <li v-for="item in listdata">{{item.name}}</li>
      </draggable>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';
    import '../../js/jquery-2.1.4.js';
    import '../../js/Tdrag.js';
    export default {
        components: {
          draggable
        },
        data () {
            return {
              listdata:[
                {
                  id: 1,
                  name: '叶落森1'
                },
                {
                  id: 2,
                  name: '叶落森2'
                },
                {
                  id: 3,
                  name: '叶落森3'
                },
                {
                  id: 4,
                  name: '叶落森4'
                },
                {
                  id: 5,
                  name: '叶落森5'
                }
              ]
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
