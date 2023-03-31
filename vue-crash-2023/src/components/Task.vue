<template>
    <!-- 双击div实现toggle绿色条的切换 -->
    <div 
        :class="[task.reminder ? 'reminder' : '',
    'task']"
        @dblclick="$emit('toggle-reminder', task.id)"
    >
        <h3>
            <!-- 为文本设置绿色提醒 -->
            {{task.text }}
            <i 
                @click='$emit("delete-task", task.id)' 
                class="fas fa-times"
            >
            </i>
        </h3>
        <p>{{ task.day}}</p>
        
    </div>
</template>

<script>
import { thisExpression } from '@babel/types';

    export default {
        name: 'Task',
        // 接受父组件传来的参数
        props: {
            task: Object
        },
        // methods: {
        //     onDelete(id) {
        //         // 发布订阅模式 子组件发布事件
        //         this.$emit("delete-task", id)
        //         // console.log(id);
        //     }
        // }
    }
</script>

<!-- <style scope>

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style> -->
<style scope>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>