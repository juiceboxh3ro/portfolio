<script lang="ts" setup>
  const links = [
    { href: "/", text: "Top" },
    { href: "/about", text: "About" },
    { href: "/projects", text: "Projects" },
    { href: "/services", text: "Services" },
    { href: "/contact", text: "Contact" },
  ]
</script>

<template>
  <header class="absolute w-screen z-10 top-0 left-0 right-0 p-4 bg-zinc-800 shadow-lg">
    <nav>
      <ul class="flex flex-row justify-end gap-4">
        <li v-for="({ href, text }, i) in links" :key="href" class="text-lg">
          <NuxtLink :to="href">
            <pre><span class="text-green-400">0{{ i }}.&nbsp;</span>{{ text }}</pre>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <div class="mb-14"></div>
</template>

<style>
  .router-link-active, .router-link-exact-active {
    display: inline-block;
    border-bottom: 1px solid #4ade80;
    font-weight: bold;
    color: #4ade80;
  }
</style>