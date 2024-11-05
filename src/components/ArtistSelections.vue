<script lang="ts" setup>
import { useArtistStore } from '../stores/artists';
import { storeToRefs } from 'pinia';
import SelectionBubble from './SelectionBubble.vue';
import { Button } from './ui';

const {selections} = storeToRefs(useArtistStore());
const {removeSelection, clear} = useArtistStore();
</script>

<template>
  <div :class="$style.container">
    <SelectionBubble
      v-for="artist in selections"
      :artist="artist"
      :key="artist.id"
      :class="$style.bubble"
      @close="removeSelection(artist.id)"
    />
    <Button v-if="selections.length > 0" type="secondary" :class="$style.button" @click="clear">Clear</Button>
  </div>
</template>

<style module>
.bubble {
  margin-top: 1rem;
}
.button {
  margin-top: 1rem;
}
.container {
  text-align: center;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
