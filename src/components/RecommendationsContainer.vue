<script setup lang="ts">
import { Block } from './ui';
import SearchContainer from './SearchContainer.vue';
import ArtistSelections from './ArtistSelections.vue';
import ArtistRecommendations from './ArtistRecommendations.vue';
import { useArtistStore } from '../stores';
import { useRouter } from 'vue-router';
import { useResize } from '../composables';
import { storeToRefs } from 'pinia';

const {select} = useArtistStore();
const {selections} = storeToRefs(useArtistStore());
const router = useRouter();

const selectArtist = async (id: string) => {
  select(id);
}

const openAbout = () => {
  router.push('/about')
}

const {mobile} = useResize();
</script>

<template>
  <Block :class="$style.container">
    <template #title>
      <h2>Artist Recommendations using NLP</h2>
      <h6>Select up to 3 of your favorite artists get recommendations for new artists. <span :class="$style.link" @click="openAbout">Here's how we do it</span></h6>
    </template>
    <template #content>
      <div :class="[$style.layoutContainer, {[$style.layoutContainerMobile]: mobile, [$style.layoutContainerDesktop]: !mobile}]">
        <SearchContainer 
          :class="[
            $style.search, 
            {
              [$style.searchMobile]: mobile, 
              [$style.searchDesktop]: !mobile,
              [$style.searchMobileFullHeight]: mobile && selections.length === 0,
              [$style.searchMobileHalf]: mobile && selections.length !== 0,
            }
          ]" 
          @select="selectArtist" 
        />
        <div v-if="selections.length > 0 || !mobile" :class="[$style.selectRecommend, $style.innerLayout, {[$style.selectRecommendDesktop]: !mobile, [$style.selectRecommendMobile]: mobile}]">
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
  flex: 1;
  height: 100%;
}
.layoutContainerDesktop {
  display: flex;
}
.layoutContainerMobile {
  padding-bottom: 3rem;
}
.search {
  text-align: center;
  justify-content: center;
  align-items: center;
}
.searchDesktop {
  flex: 1;
  height: 100%;
}
.searchMobile {
  width: 70%;
  margin-left: 15%;
}
.searchMobileFullHeight {
  height: 100%;
}
.searchMobileHalf {
  height: 50%;
}
.selectRecommend {
  flex: 2;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.selectRecommendDesktop {
  height: 100%;
}
.selectRecommendMobile {
  height: 50%;
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
.link {
  text-decoration: underline;
}
.link:hover {
  cursor: pointer;
}
</style>
