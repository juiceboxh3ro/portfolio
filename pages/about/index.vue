<script setup lang="ts">
  useSeoMeta({
    title: "Jesse Goodburne | About",
    ogTitle: "Jesse Goodburne | About",
  })

  const langs = ["Nuxt", "Next.js", "Sveltekit", "Elixir & Phoenix", "Django", "Unreal Engine"]
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col justify-evenly p-4">
      <h2 class="text-4xl font-bold mb-12">
        <pre><span class="text-2xl text-green-400">01.</span> About Me</pre>
      </h2>
      <div>
        <div class="grid gap-4 md:gap-24 items-start sm:grid-flow-col">
          <div class="flex flex-col justify-center gap-4">
            <p>Hello! I&apos;m jesse. I was born in Northern Michigan, and shortly after moving to Maryland I was diagnosed with bone cancer. I&apos;m now over 10 years in remission!</p>
            <p>I started self-teaching Japanese around 2011, and later went to Temple University, Japan Campus in Tokyo to major in Japanese language and culture.</p>
            <p>But how does that relate to web development you may ask? It probably doesn&apos;t! I've been interested in programming since I was young, but either never had the right resources to get started or the time to invest in learning. After graduation I had plenty of time and had found the right resources, and thus started my journey with HTML, CSS, and Javascript.</p>
          </div>
          <div class="flex flex-col justify-center gap-4">
            <p>I&apos;ve had the privilege of working with a few start-ups, including the website I used to start learning Japanese. Most of my experience has been with React, Node.js, and MongoDB, but I&apos;m a forever learner now and I explore other languages and paradigms during my free time!</p>
            <p>Here&apos;s some stuff I&apos;ve been working with or exploring lately:</p>
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
