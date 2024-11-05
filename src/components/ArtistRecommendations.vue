<script lang="ts" setup>
import { useFetch } from '../composables';
import { useArtistStore } from '../stores';
import { storeToRefs } from 'pinia';
import { fetchRecommendations, type Recommendation } from './util';
import {computed} from 'vue';
import { Block } from './ui';

const {selections} = storeToRefs(useArtistStore());
const id = computed<string | undefined>(() => selections.value[0]?.id);
const {data, loading, error} = useFetch<Recommendation[]>(() => {
  if (!id.value) {
    return Promise.resolve([]);
  }

  return fetchRecommendations(id.value);
});

const filteredRecommendations = computed(() => (data.value ?? []).filter((recommendation) => recommendation.id !== id.value))
// TODO: loading bar
</script>

<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error</div>
    <div v-else>
      <Block v-if="filteredRecommendations.length > 0">
        <template #title>
          Your Recommended Artists
        </template>
        <template #content>
          <div v-for="rec in filteredRecommendations" :key="rec.id">{{ rec.name }}</div>
        </template>
      </Block>
    </div>
  </div>
</template>