<script setup lang="ts">
import { SearchList } from './ui';
import { fetchArtists } from './util';
import SearchResult from './SearchResult.vue';
import { useArtistStore } from '@/stores/artists';

const emit = defineEmits<{
  (e: 'select', id: string): void;
}>();

const {setArtists} = useArtistStore();

</script>

<template>
  <SearchList :get-items="fetchArtists" :save="setArtists" >
    <template #item="{item}">
      <SearchResult :artist="item" @select="emit('select', item.id)"/>
    </template>
  </SearchList>
</template>