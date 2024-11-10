import {computed, onBeforeUnmount, onMounted, ref} from 'vue';

export const useResize = () => {
  const isMobile = ref(false);

  const update = () => {
    isMobile.value = window.innerWidth <= 1024;
  }

  onMounted(() => {
    update();
    window.addEventListener('resize', update);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', update);
  });

  return {
    mobile: computed(() => isMobile.value)
  }
}
