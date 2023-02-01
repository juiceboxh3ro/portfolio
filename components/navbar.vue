<script lang="ts" setup>
  const links = [
    { href: "/", text: "Top" },
    { href: "/about", text: "About" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" }
  ]

  const modalOpen = useState('modalOpen', () => false)
</script>

<template>
  <header class="isolate sticky top-0 left-0 right-0 z-50 p-4 bg-zinc-800 shadow-lg">
    <nav>
      <div class="hidden lg:flex lg:justify-end items-center">
        <pre class="inline-flex text-xl pr-4">[</pre>
        <ul class="flex flex-row gap-4">
          <li v-for="({ href, text }, i) in links" :key="href" class="text-lg">
            <span class="inline-flex items-center">
              <NuxtLink :to="href" :key="i" class="focus:outline-green-300">
                <pre>{{ text }}</pre>
              </NuxtLink>
              <pre v-if="i !== links.length - 1">,</pre>
            </span>
          </li>
        </ul>
        <pre class="inline-flex text-xl pl-4">]</pre>
      </div>

      <template v-if="modalOpen">
        <div aria-modal="true">
        <div class="fixed inset-0 overflow-y-auto bg-zinc-800 px-6 py-6 lg:hidden">
          <div class="flex items-center justify-end">
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-400"
              @click="modalOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/25">
              <div class="space-y-2 py-6">
                <ul class="flex flex-col gap-4">
                  <li v-for="({ href, text }, i) in links" :key="href" class="text-lg">
                    <NuxtLink :to="href" class="focus:outline-green-300">
                      <pre><span class="text-green-400">0{{ i }}.&nbsp;</span>{{ text }}</pre>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </template>
      <template v-else>
        <div class="flex justify-end lg:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            @click="modalOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Heroicon name: outline/bars-3 -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </template>
    </nav>
  </header>
</template>

<style>
  .router-link-active, .router-link-exact-active {
    display: inline-block;
    border-bottom: 1px solid #4ade80;
    font-weight: bold;
    color: #4ade80;
  }
</style>