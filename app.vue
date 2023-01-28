<script setup lang="ts">
  // const runtimeConfig = useRuntimeConfig()
  // const appConfig = useAppConfig()
</script>

<template>
  <Navbar />
  <NuxtPage />
  <SocialLinks />
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 250ms;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(8px);
    scale: 0.95;
  }
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: all 250ms;
  }
  .slide-left-enter-from {
    opacity: 0;
    transform: translate(50px, 0);
    filter: blur(4px);
    scale: 1.05;
  }
  .slide-left-leave-to {
    opacity: 0;
    transform: translate(-50px, 0);
    filter: blur(8px);
    scale: 0.95;
  }
  .slide-right-enter-from {
    opacity: 0;
    transform: translate(-50px, 0);
    filter: blur(4px);
    scale: 1.05;
  }
  .slide-right-leave-to {
    opacity: 0;
    transform: translate(50px, 0);
    filter: blur(8px);
    scale: 0.95;
  }
</style>
