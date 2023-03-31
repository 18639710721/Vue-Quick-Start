<template>
    <button 
        :style="{ background: color}" 
        class="btn"
        @click="onclick()"
    >
    {{text }}
    </button>
</template>

<script>
// button 的按钮事件
export default {
    name: 'Button',
    // 父组件向子组件传的值
    props: {
        text: String,
        color: String
    },
    methods: {
        onclick() {
            this.$emit('btn-click')
        }
    }
}

</script>