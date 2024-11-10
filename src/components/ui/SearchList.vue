<script lang="ts" setup>
import { useFetch } from '@/composables';
import type { ListItem } from './util';
import {ref, computed} from 'vue';

const props = defineProps<{
  getItems: () => Promise<ListItem[] | undefined>;
  save?: (resp: ListItem[]) => void; // TODO: this doesn't really belong here
  disabled: boolean;
}>();
// TODO: add a loading bar / error indicator
// this could also be virtualized to be more performant
const getItemsLowercase = async () => {
  const data = await props.getItems();
  return data?.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.name.toLowerCase(),
  })) ?? []
}
const {data, loading, error} = useFetch(getItemsLowercase, props.save);
const query = ref<string | undefined>('');
const queryLowercase = computed(() => query.value?.toLowerCase());
const filteredData = computed(() => !!query.value ? (data.value ?? []).filter((item) => !queryLowercase.value || item.value.includes(queryLowercase.value)) : data.value);
</script>

<template>
  <div :class="$style.container">
    <div v-if="$slots.error" :class="$style.error">
      <slot name="error"></slot>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error</div>
    <div v-else :class="[$style.layout, {[$style.disabled]: disabled}]">
      <input id="search" type="text" placeholder="Search" v-model="query" :class="$style.search" />
      <div :class="$style.content">
        <slot name="item" v-for="item in filteredData" :key="item.id" :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<style module>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.layout {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
}
.content {
  flex: 1;
  min-height: 0;
  overflow: scroll;
}
.disabled {
  pointer-events: none;
  background-color: rgb(81, 71, 71);
  filter: grayscale(100%);
  cursor: not-allowed;
}
.error {
  color: red;
}
.search {
  width: 100%;
  background-color: #181818;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid var(--primary);
  transition: 0.2s linear;
  color: white;
  margin-bottom: 0.5rem;
}
.search:focus {
  outline: none;
  border-bottom: 1px solid white;
  transition: 0.2s linear;
}
</style>