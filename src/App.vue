<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView :class="$style.router" />
</template>

<style module>
.router {
  height: 100%;
  width: 100%;
  color: hsla(160, 100%, 37%, 1);
}
</style>
