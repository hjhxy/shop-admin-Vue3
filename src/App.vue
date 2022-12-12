<script setup>
</script>

<template>
  <Suspense>
    <router-view></router-view>
    <template #fallback>
      loading...
    </template>
  </Suspense>
</template>

<style scoped>

</style>
