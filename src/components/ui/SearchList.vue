<script lang="ts" setup>
import { useFetch } from '@/composables';
import type { ListItem } from './util';
import {ref, computed} from 'vue';
// import _ from 'lodash';

const props = defineProps<{
  getItems: () => Promise<ListItem[] | undefined>;
  save?: (resp: ListItem[]) => void; // TODO: this doesn't really belong here
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
// if there isn't a query return all results. if there is a query then filter
// const debouncedFilter = _.debounce(() => {
//   console.log('running debounced filter with', queryLowercase.value);
//   if (!queryLowercase.value) {
//     return data.value;
//   }

//   if (!data.value) {
//     return [];
//   }

//   return data.value.filter((item) => !queryLowercase.value || item.value.includes(queryLowercase.value))
// }, 300);

// const filteredData = computed(() => {
//   const _deps = [queryLowercase.value, data.value];
//   return debouncedFilter()
// });
const filteredData = computed(() => !!query.value ? (data.value ?? []).filter((item) => !queryLowercase.value || item.value.includes(queryLowercase.value)) : data.value);
</script>

<template>
  <div :class="$style.container">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error</div>
    <div v-else :class="$style.layout">
      <input id="search" type="text" placeholder="Search" v-model="query" />
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
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content {
  flex: 1;
  min-height: 0;
  overflow: scroll;
}
</style>