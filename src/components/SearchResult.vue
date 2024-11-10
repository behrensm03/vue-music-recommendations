<script lang="ts" setup>
import type { Artist } from '../util';

const props = defineProps<{
  artist: Artist;
}>();

const emit = defineEmits<{
  (e: 'select'): void;
}>()

// TODO: some artist names have characters not rendering properly
</script>

<template>
  <div :class="$style.container" @click="emit('select')">
    {{ props.artist.name }}
  </div>
</template>

<style module>
.container {
  width: 100%;
  height: 2rem;
  padding-left: 1rem;
  text-align: left;
  /* border-bottom: 1px solid gray; */
}
.container:hover {
  cursor: pointer;
  background-color: gray;
}
</style>