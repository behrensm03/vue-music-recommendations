<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToHome = () => {
  router.push('/')
}
</script>

<template>
  <div :class="$style.about">
    <h2>About</h2>
    <div :class="$style.content">
      <p>
        This system is designed to provide NLP-based recommendations for musicians based on user input of musicians they already enjoy. It works by computing similarity scores between the input musicians and other musicians in the system. The similarity score between two musicians is defined as the cosine similarity between the vectorized Wikipedia biographies of the two musicians.
      </p>
      <br />
      <a href="/Music_Recommendation_Background.pdf">Read a more in depth description here.</a>
      <br />
      <div :class="$style.link" @click="goToHome">Back to home</div>
    </div>
  </div>
</template>

<style module>
.about {
  height: 100%;
  width: 100%;
  text-align: center;
  padding-top: 3rem;
}
.content {
  padding-top: 1rem;
}
.link {
  text-decoration: underline;
  padding-top: 1rem;
}
.link:hover {
  cursor: pointer;
}
</style>
