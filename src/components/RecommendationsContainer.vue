<script setup lang="ts">
// import {useFetch} from '../composables';
// import { fetchItems, type Item } from './util';
import { Alignment, Block } from './ui';
// const {data, loading} = useFetch<Item[]>(fetchItems);
</script>

<template>
  <Block :align="Alignment.CENTER" :class="$style.container">
    <template #title><h1>Title</h1></template>
    <template #content>
      <div :class="$style.layoutContainer">
        <div :class="$style.grow">search/select here</div>
        <div :class="$style.grow">results here</div>
      </div>
    </template>
  </Block>
</template>

<style module>
.container {
  height: 100%;
  width: 100%;
  color: hsla(160, 100%, 37%, 1);
}
.layoutContainer {
  height: 100%;
  width: 100%;
  display: flex;
}
.grow {
  flex-grow: 1;
  min-height: 0;
  text-align: center;
}
</style>
