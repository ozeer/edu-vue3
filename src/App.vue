<script setup lang="ts">
import { RouterView } from 'vue-router'
import request from './utils/request'

request({
  method: "GET",
  url: "/front/admin/adv/list"
}).then((res) => {
  console.log(res.data)
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
