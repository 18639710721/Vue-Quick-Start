<template>
    <div 
        v-for="task of tasks"
        :key="task.id"
    >
    <Task
        :task="task"
        @delete-task="$emit('delete-task', task.id)"
        @toggle-reminder="$emit('toggle-reminder', task.id)"
    >
    </Task>
    </div>
</template>


<script>
import Task from "./Task.vue"

// loop this tasks
    export default {
        name: 'Tasks',
        props: {
            tasks: Array
        },
        components: {
            Task
        },
        emits: ['delete-task','toggle-reminder'],
    }
</script>