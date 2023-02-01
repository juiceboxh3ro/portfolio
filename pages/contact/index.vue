<script setup lang="ts">
useSeoMeta({
  title: "Jesse Goodburne | Contact",
  ogTitle: "Jesse Goodburne | Contact",
})
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col justify-evenly p-4">
      <div class="mb-12 lg:w-1/2">
        <h2 class="text-4xl font-bold mb-12">
          <pre><span class="text-2xl text-green-400">03.</span>&nbsp;Contact</pre>
        </h2>
        <div class="text-lg flex flex-col gap-4">
          <p>I&apos;m generally open to various project types and scopes. Contact me at <a class="text-green-400" href="mailto:jesse.goodburne@gmail.com">jesse.goodburne@gmail.com</a> and we can discuss, for <strong>no fee</strong>, your project&apos;s needs to determine if we&apos;re a fit for each other!</p>
          <p>Any projects with requirements not explicitly listed under the "Won&apos;t" section is tentatively a "Will", such as Shopify, WordPress, and Mobile / Desktop apps.</p>
        </div>
      </div>
      <div>
        <div class="grid gap-4 md:gap-24 items-start sm:grid-flow-col">
          <div class="flex flex-col justify-center gap-4">
            <h3 class="text-2xl font-bold">What I Will Do</h3>
            <ul>
              <li>
                <GreenTriangle />&nbsp;Website/Web App development using HTML, CSS, (Javascript/Django/Rails/Phoenix)
              </li>
              <li>
                <GreenTriangle />&nbsp;Website from Static Site/Site builders
              </li>
              <li>
                <GreenTriangle />&nbsp;Design for desktop and mobile browsers from references, wireframe, templates, or
                minimalism
              </li>
            </ul>
          </div>
          <div class="flex flex-col justify-center gap-4">
            <h3 class="text-2xl font-bold">What I Won't Do</h3>
            <ul>
              <li>
                <GreenTriangle />&nbsp;Works which harvest customer data for resale
              </li>
              <li>
                <GreenTriangle />&nbsp;Anything involving Web3 (NFTs, Cryptocurrency, Blockchain)
              </li>
              <li>
                <GreenTriangle />&nbsp;Email templates, logo, branding, original art assets, unguided app/website design
              </li>
              <li>
                <GreenTriangle />&nbsp;Upgrades of pre-existing works with poor documentation or code quality
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
