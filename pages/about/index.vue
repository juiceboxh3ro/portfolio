<script setup lang="ts">
  useServerSeoMeta({
    title: "Jesse Goodburne | About",
    ogTitle: "Jesse Goodburne | About",
    description: "My amazing portfolio",
    ogDescription: "My amazing portfolio",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
  })

  const langs = ["Nuxt", "Next.js", "Sveltekit", "Elixir & Phoenix", "Django", "Unreal Engine"]
</script>

<template>
  <NuxtLayout>
    <div class="h-full flex text-xl">
      <div class="ml-4 md:ml-48 self-center h-full w-full flex flex-col justify-evenly">
        <h2 class="text-4xl">
          <pre><span class="text-2xl text-green-400">01.</span> About Me</pre>
        </h2>
        <div class="w-full flex flex-row flex-wrap justify-between">
          <div class="w-1/3  flex flex-col justify-center gap-4">
            <p>Hello! I'm jesse. I was born in Northern Michigan, and shortly after moving to Maryland I was diagnosed with bone cancer. I'm now over 10 years in remission!</p>
            <p>I started self-teaching Japanese around 2011, and later went to Temple University, Japan Campus in Tokyo to major in Japanese language and culture.</p>
            <p>But how does that relate to web development you may ask? It probably doesn't! I've been interested in programming since I was young, but either never had the right resources to get started or the time to invest in learning. After graduation I had plenty of time and had found the right resources, and started my journey with HTML, CSS, and Javascript.</p>
          </div>
          <div class="w-1/3 mr-4 md:mr-48 flex flex-col gap-4">
            <p>I've had the privilege of working with a few start-ups, including the website I used to start learning Japanese. Most of my experience has been with React, Node.js, and MongoDB, but I'm a forever learner now and I explore other languages and paradigms during my free time!</p>
            <p>Here's some stuff I've been working with or exploring lately:</p>
            <ul class="grid grid-cols-2">
              <li v-for="lang in langs" v-bind:key="lang" class="inline-flex items-center">
                <GreenTriangle />&nbsp;{{ lang }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
