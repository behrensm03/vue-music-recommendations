<script lang="ts" setup>
import type { Artist } from '../util';
import {ref} from 'vue';

defineProps<{
  artist: Artist;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const hover = ref(false);
</script>

<template>
  <div 
    :class="$style.bubble" 
    @click="emit('close')" 
    @mouseenter="hover=true"
    @mouseleave="hover=false"
  >
    <div :class="$style.text">
      {{ hover ? 'Remove' : artist.name }}
    </div>
  </div>
</template>

<style module>
.bubble {
  height: 2rem;
  line-height: 2rem;
  width: 13rem;
  border-radius: 1rem;
  background-color: var(--primary);
  color: black;
  display: flex;
  transition: 0.3s linear;
}
.text {
  flex: 1;
  min-height: 0;
  padding-left: 10px;
  padding-right: 10px;
  overflow: hidden;
}
.bubble:hover {
  background-color: gray;
  cursor: pointer;
  border-radius: 1rem;
  transition: 0.3s linear;
}
</style>