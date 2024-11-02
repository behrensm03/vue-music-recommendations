<script setup lang="ts">
import { Alignment } from './util';
defineProps<{
  align: Alignment,
}>();
// TODO: dynamic alignment based on prop
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.title">
      <slot name="title"></slot>
    </div>
    <div :class="$style.content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style module>
.container {
  display: flex;
  flex-direction: column;
}
.content {
  flex-grow: 1;
  min-height: 0;
  font-size: medium;
  text-align: center;
}
.title {
  font-size: x-large;
  text-align: center;
}
</style>