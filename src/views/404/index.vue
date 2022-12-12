<template>
  <div class="root text-center">
    <el-empty :image-size="200" description="404 Not Found" />

    <el-button type="primary" @click="back">返回</el-button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function back() {
  router.back();
}
</script>

<style lang="less" scoped></style>
