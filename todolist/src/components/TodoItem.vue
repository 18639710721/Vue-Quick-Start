<template>
  <li @click="handleDelete">{{content}}</li>
</template>

<script>
export default {
  // 注册一下父组件传过来的值
  props: ['content', 'index'],
  methods: {
    handleDelete () {
      // 向外发送一个delete事件
      this.$emit('delete', this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
