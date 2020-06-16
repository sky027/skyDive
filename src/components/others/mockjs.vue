<template>
    <div class="mockjs">
        <span>点击按钮查看控制台，打印mockjs生成的数据</span><br />
        <el-button type="primary" @click="queryRredit()">OKOK</el-button>
        <div style="width: 180px;margin-top: 15px;">
          <treeselect v-model="value" :multiple="true" :options="optionsData" />
        </div>
    </div>
</template>

<script>
  import Treeselect from '@riophae/vue-treeselect'
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'
    export default {
        components: {
          "treeselect":Treeselect
        },
        data () {
            return {
              value: null,
              options: [
                {
                  id: "1",
                  label: "第一级",
                  children: [
                    {id: "11",label:"第一一及"},
                    {
                      id: "12",
                      label:"第一二及",
                      children:[
                        {id: "121",label:"第一二一及"},
                        {id: "122",label:"第一二二及"},
                      ],
                    },
                    {id: "13",label:"第一三及"}
                  ]
                },
                {id: "2",label:"第二级"},
                {
                  id: "3",
                  label:"第三级",
                  children: [
                    {id: "311",label:"第三一一及"},
                    {id: "321",label:"第三二一及"}
                  ]
                },
              ],
              optionsData: [ {
                id: 'a',
                label: 'a',
                children: [ {
                  id: 'aa',
                  label: 'aa',
                }, {
                  id: 'ab',
                  label: 'ab',
                } ],
              }, {
                id: 'b',
                label: 'b',
              }, {
                id: 'c',
                label: 'c',
              } ]
            }
        },
        methods: {
          queryRredit(){
              var url = "192.168.65.146:8080/api/query_common_credit";
              this.$ajax.get(url).then((res) => {
                if(res.status == 200){
                  console.log(res.data.list);
                }
              }).catch((res) => {
                debugger
              });
          }
        }
    }
</script>

<style scoped>

</style>
