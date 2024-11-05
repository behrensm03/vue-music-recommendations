<script setup lang="ts">
import { SearchList } from './ui';
import { fetchArtists } from './util';
import SearchResult from './SearchResult.vue';
import { useArtistStore } from '@/stores/artists';
import { storeToRefs } from 'pinia';
import {computed} from 'vue';

const emit = defineEmits<{
  (e: 'select', id: string): void;
}>();

const {setArtists} = useArtistStore();
const {selections} = storeToRefs(useArtistStore());

const MAX_SELECTIONS = 1;
const disabled = computed(() => selections.value.length >= MAX_SELECTIONS);
</script>

<template>
  <SearchList :get-items="fetchArtists" :save="setArtists" :disabled="disabled" >
    <template #error v-if="disabled">
      Maximum number of selections reached
    </template>
    <template #item="{item}">
      <SearchResult :artist="item" @select="emit('select', item.id)"/>
    </template>
  </SearchList>
</template>

<style module>
.hidden {
  display: none;
}
</style>
