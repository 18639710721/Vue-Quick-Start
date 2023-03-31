
<template>
  <div>
    <div>
      <input v-model="inputValue"/>
      <button @click="handleSubmit">提交</button>
    </div>

    <ul>
      <!-- 父组件通过content向子组件传值 -->
      <todo-item
        v-for="(item, index) of list"
        :key="index"
        :content="item"
        :index="index"
        @delete="handleDelete"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
  components: {
    // 把一个局部组件注册到了item之中
    'todo-item': TodoItem
  },
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleSubmit () {
      this.list.push(this.inputValue)
      this.inputValue = ''
    },

    handleDelete (index) {
      this.list.splice(index, 1)
    }
  }

}
</script>

<style>

</style>
