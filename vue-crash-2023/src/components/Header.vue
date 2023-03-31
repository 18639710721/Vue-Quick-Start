<template>
    <header>
        <h1>{{ title }}</h1>
        <Button 
            :text="showAddTask ? 'Close': 'Add Task'" 
            :color="showAddTask ? 'red': 'green'"
            @btn-click="$emit('toggle-add-task')"
        >
        </Button>
        <!-- <Button text="Update Task" color="blue"></Button>
        <Button text="Delete Task" color="red"></Button> -->
    </header>
</template>

<script>
import Button from "./Button.vue"

export default {
    // components的名字
    name: "Header",
    props: {
        title: {
            type: String,
            default: "Hello World",
        },
        showAddTask: Boolean
    },
    components: {
        Button
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>