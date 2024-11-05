<script setup lang="ts">
import { Block } from './ui';
import SearchContainer from './SearchContainer.vue';
import ArtistSelections from './ArtistSelections.vue';
import ArtistRecommendations from './ArtistRecommendations.vue';
import { useArtistStore } from '../stores';

const {select} = useArtistStore();

const selectArtist = async (id: string) => {
  select(id);
}
</script>

<template>
  <Block :class="$style.container">
    <template #title>
      <h2>Title</h2>
      <h6>Select some artists you like to get recommendations for new artists.</h6>
    </template>
    <template #content>
      <div :class="$style.layoutContainer">
        <SearchContainer :class="$style.search" @select="selectArtist" />
        <div :class="[$style.selectRecommend, $style.innerLayout]">
          <ArtistSelections />
          <ArtistRecommendations :class="$style.grow" />
        </div>
      </div>
    </template>
  </Block>
</template>

<style module>
.container {
  padding: 2rem;
}
.layoutContainer {
  display: flex;
  flex: 1;
  height: 100%;
}
.search {
  flex: 1;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.selectRecommend {
  flex: 2;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.innerLayout {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.grow {
  flex: 1;
  min-height: 0;
  width: 100%;
}
.one {
  background-color: red;
}
</style>
