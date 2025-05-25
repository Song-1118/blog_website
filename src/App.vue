<template>
  <h1>主页</h1>
  <router-view />
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log('当前路由信息:', route)
</script>