<script setup lang="ts">
  useServerSeoMeta({
    title: "Jesse Goodburne | Web Developer",
    ogTitle: "Jesse Goodburne | Web Developer",
    description: "My amazing portfolio",
    ogDescription: "My amazing portfolio",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
  })
</script>

<template>
  <NuxtLayout>
    <div class="h-full w-5/6 ml-4 md:w-1/2 2xl:w-1/4 md:ml-48">
      <div class="h-full flex flex-1 flex-col justify-center gap-4 text-lg">
        <p>Hello, I'm</p>
        <div>
          <h3 class="text-6xl">jesse goodburne.</h3>
          <h3 class="text-4xl">I create internet things.</h3>
        </div>
        <p>I'm a web developer based near Washington D.C., USA. I'm passionate about creating beautiful websites and challenging my skillset to create better web-based experiences.</p>
      </div>
    </div>
  </NuxtLayout>
</template>
