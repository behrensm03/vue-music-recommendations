<script lang="ts" setup>
import { useFetch } from '../composables';
import { useArtistStore } from '../stores';
import { storeToRefs } from 'pinia';
import { fetchRecommendations, type Recommendation } from '../util';
import {computed} from 'vue';
import { Block } from './ui';

const {selections} = storeToRefs(useArtistStore());
const ids = computed<string[] | undefined>(() => selections.value.map((selection) => selection.id));
const {data, loading, error} = useFetch<Recommendation[]>(() => {
  if (!ids.value || ids.value.length === 0) {
    return Promise.resolve([]);
  }

  return fetchRecommendations(ids.value);
});

const filteredRecommendations = computed(() => (data.value ?? []));
// TODO: loading bar
</script>

<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" :class="$style.error">Error</div>
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

<style module>
.error {
  color: red;
}
</style>
