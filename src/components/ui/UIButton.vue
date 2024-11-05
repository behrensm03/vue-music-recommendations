<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  type: "primary" | "secondary";
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();

// TODO: why didn't :class=[$style.bubble, theme[type]] work
const isPrimary = computed(() => props.type === "primary");
</script>

<template>
  <div :class="{[$style.bubble]: true, [$style.primary]: isPrimary, [$style.secondary]: !isPrimary}" @click="emit('click')">
    <slot />
  </div>
</template>

<style scoped module>
.bubble {
  height: 2rem;
  line-height: 2rem;
  width: 13rem;
  border-radius: 1rem;
  transition: 0.2s linear;
}
.primary {
  background-color: hsla(160, 100%, 37%, 1);
  color: black;
}
.primary:hover {
  background-color: gray;
  transition: 0.25s linear;
  cursor: pointer;
}
.secondary {
  background-color: white;
  color: black;
}
.secondary:hover {
  background-color: gray;
  transition: 0.25s linear;
  cursor: pointer;
}
</style>