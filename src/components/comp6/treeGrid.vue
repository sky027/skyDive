<template>
    <TreeGrid :columns="columns" :tree-structure="true" :data-source="dataSource" :height = "tableHeight"></TreeGrid>
</template>

<script>
  import comp6 from '@/components/comp6/comp6'
    export default {
      components:{
        "TreeGrid": comp6
      },
        data(){
          return{
            tableHeight: 500,
            columns: [
                {
                  text: '数据集名称',
                  dataIndex: 'name'
                },
                {
                  text: '增量记录数',
                  dataIndex: 'age'
                },
                {
                  text: '收藏次数',
                  dataIndex: 'sex'
                }
              ],
            dataSource: [
              {
                id: 1,
                parentId: 0,
                name: '测试1',
                age: 18,
                sex: '男',
                children: [
                  {
                    id: 2,
                    parentId: 1,
                    name: '测试2',
                    age: 22,
                    sex: '男'
                  }
                ]
              },
              {
                id: 3,
                parentId: 0,
                name: '测试3',
                age: 23,
                sex: '女',
                children: [
                  {
                    id: 4,
                    parentId: 3,
                    name: '测试4',
                    age: 22,
                    sex: '男'
                  },
                  {
                    id: 5,
                    parentId: 3,
                    name: '测试5',
                    age: 25,
                    sex: '男'
                  },
                  {
                    id: 6,
                    parentId: 3,
                    name: '测试6',
                    age: 26,
                    sex: '女',
                    children: [
                      {
                        id: 7,
                        parentId: 6,
                        name: '测试7',
                        age: 27,
                        sex: '男'
                      }
                    ]
                  }
                ]
              },
              {
                id: 18,
                parentId: 0,
                name: '测试8',
                age: 18,
                sex: '男'
              }
            ],
          }
        }
    }
</script>

<style>
</style>
