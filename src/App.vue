<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView :class="$style.router" />
</template>

<style module>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
.router {
  height: 100%;
  width: 100%;
  color: var(--primary);
  font-family: 'Montserrat', sans-serif;
}
</style>
