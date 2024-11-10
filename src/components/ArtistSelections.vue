<script lang="ts" setup>
import { useArtistStore } from '../stores/artists';
import { storeToRefs } from 'pinia';
import SelectionBubble from './SelectionBubble.vue';
import { Button } from './ui';
import { useResize } from '../composables';

const {selections} = storeToRefs(useArtistStore());
const {removeSelection, clear} = useArtistStore();
const {mobile} = useResize();
</script>

<template>
  <div :class="[$style.container, {[$style.containerDesktop]: !mobile, [$style.containerMobile]: mobile}]">
    <SelectionBubble
      v-for="artist in selections"
      :artist="artist"
      :key="artist.id"
      :class="$style.bubble"
      @close="removeSelection(artist.id)"
    />
    <Button v-if="selections.length > 0" type="secondary" :class="$style.button" @click="clear">Clear All</Button>
  </div>
</template>

<style module>
.bubble {
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.button {
  margin-top: 1rem;
}
.container {
  text-align: center;
  align-items: center;
  width: 100%;
  display: flex;
}
.containerMobile {
  flex-direction: row;
}
.containerDesktop {
  flex-direction: column;
}
</style>
