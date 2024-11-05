import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Artist } from '../components/util';

export const useArtistStore = defineStore('artists', () => {
  const selectedIds = ref<{[k: string]: boolean}>({});
  const artistsCache = ref<{[k: string]: Artist}>({});

  const clear = () => {
    selectedIds.value = {};
  }

  const select = (id: string) => {
    selectedIds.value = {
      ...selectedIds.value,
      [id]: true,
    }
  }

  const removeSelection = (id: string) => {
    selectedIds.value = {
      ...selectedIds.value,
      [id]: false,
    }
  }

  const setArtists = (artistsResp: Artist[]) => {
    artistsCache.value = artistsResp.reduce((acc, artist) => {
      return {
        ...acc,
        [artist.id]: artist,
      }
    }, {});
  }

  return {
    clear,
    select,
    removeSelection,
    selections: computed(() => Object.entries(selectedIds.value).filter(([_, selected]) => selected).map(([id, _]) => id)),
    setArtists,
    artists: computed(() => Object.values(artistsCache.value)),
  }
})
