<script lang="ts" setup>
import type { Artist } from './util';

defineProps<{
  artist: Artist;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>()
</script>

<template>
  <div :class="$style.bubble">
    <div :class="$style.text">
      {{ artist.name }}
    </div>
    <div :class="$style.close" @click="emit('close')">
      x
    </div>
    <!-- TODO: make above an icon -->
  </div>
</template>

<style module>
.bubble {
  height: 2rem;
  line-height: 2rem;
  width: 13rem;
  border-radius: 1rem;
  background-color: hsla(160, 100%, 37%, 1);
  color: black;
  display: flex;
}
.text {
  flex: 1;
  min-height: 0;
  padding-left: 10px;
  overflow: hidden;
}
.close {
  width: 3rem;
}
.close:hover {
  background-color: gray;
  cursor: pointer;
  border-radius: 1rem;
  /* TODO: figure this out */
}
</style>