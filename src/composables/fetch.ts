import {ref, computed, type Ref, watchEffect} from 'vue';

export function useFetch<T> (
  fetch: () => Promise<T | undefined>,
  save?: (resp: T) => void,
) {
  const data: Ref<T | undefined> = ref();
  const loading = ref(false);
  const error: Ref<unknown> = ref();

  const refresh = async () => {
    loading.value = true;
    error.value = undefined;

    try {
      data.value = await fetch();
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
      if (!!save && !!data.value) {
        save(data.value);
      }
    }
  }

  watchEffect(() => {
    void refresh();
  });

  return {
    data: computed(() => data.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    refresh,
  }
}