<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ count }}</h2>
  <el-button type="danger" @click="count++">点我++</el-button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
