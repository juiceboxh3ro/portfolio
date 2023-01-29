<script setup lang="ts">
  useSeoMeta({
    title: "Jesse Goodburne | Projects",
    ogTitle: "Jesse Goodburne | Projects",
  })

  const viewing = useState("viewing", () => "work")

  const projects = [
    {
      name: "Lazy Peon",
      link: "https://lazypeon.io/",
      techs: "Next.js, Typescript, Tailwindcss, BNet API",
      description: "Web app for World of Warcraft that lets users look up items needed for raiding or Mythic+ dungeons in Dragonflight, quick links for class specific items, look up guild rosters, and look up a characters known craftable profession items.",
    },
    {
      name: "Aozora 青空",
      link: "https://github.com/juiceboxh3ro/aozora",
      techs: "Typescript, Discord.js, DeepL, Kuroshiro, Wanakana, Docker, Elixir, Phoenix, Postgres",
      description: "A Discord bot that adds context menu options to messages users send, allowing them to translate a message to or from Japanese, look up Japanese characters, and add reading guides to Japanese text.",
    },
    {
      name: "Genkan 言語交換",
      link: "https://github.com/genkan-language-exchange",
      techs: "Vue, Vuex, Flutter, Express, MongoDB",
      description: "Language and culture exchange social media app focused on protecting user privacy. Users can create and favorite posts, follow other users, search for new connections based on languages known or learning, and create culture or language lessons. No longer available online since Heroku removed their free hobby tier.",
    }
  ]

  const work_exp = [
    {
      company: "Digiline.IO",
      link: "https://www.digiline.io",
      title: "Frontend Developer",
      type: "Web3 apps",
      techs: "Sveltekit, Typescript, Secretjs, Tailwindcss",
      started: "2022年09月",
      ended: null,
      description: "I'm the sole frontend developer for a small startup that builds various Web3 app using the Secret Network. I've recreated their company landing page, blog, validator page, and am currently working on the frontend of a new project that seeks to revolutionize the way people host their websites."
    },
    {
      company: "From Zero, LLC",
      link: "https://www.fromzero.com",
      title: "Full Stack Web Developer",
      type: "Language learning website",
      techs: "React, Typescript, Tailwindcss, Express, Node.js, MongoDB, Hotjar, Stripe, Paypal, AWS",
      started: "2021年01月",
      ended: "2022年08月",
      description: "I overhauled this website with WCAG 2.1 standards, modern designs and responsiveness, transitions and animations, and frontend / backend features, such as global and personal notifications, user rewards in the form of \"badges\", a site activity public feed when a user makes certain actions like asking a question or passing a quiz, admin panels to show user growth and retention, and many more features."
    },
    {
      company: "Story Squad",
      link: "https://www.linkedin.com/company/story-squad-hq/about/",
      title: "Frontend Developer",
      type: "e-Learning website",
      techs: "React, Typescript, Material UI, Express, Node.js, Stripe, AWS",
      started: "2020年05月",
      ended: "2020年07月",
      description: "An e-learning website which aims to make elementary students more excited about reading. I contributed to the frontend of the website, which included various user and admin dashboards, as well as the \"game mode\" where stories and drawings submitted by students go through several rounds of voting."
    }
  ]
</script>

<template>
  <NuxtLayout>
    <div class="text-lg flex flex-col pb-24">
      <template v-if="viewing === 'work'">
        <h2 class="text-4xl font-bold">
          <pre><span class="text-2xl text-green-400">02.</span> Work Experience</pre>
        </h2>
        <div>
          <button
            @click="viewing = 'projects'"
            class="text-2xl font-bold text-white bg-green-400 px-4 py-2 my-12 rounded-md drop-shadow-md border-green-700 border-2 border-b-4 focus:outline-green-300"
          >
            View Projects
          </button>
        </div>
        <div class="divide-y flex flex-col gap-8 divide-zinc-300 mx-auto">
          <div
            v-for="exp in work_exp"
            v-bind:key="exp.company"
          >
            <div class="flex flex-col gap-2">
              <h2 class="text-white text-2xl font-bold mt-8 mb-2">
                <a class="focus:outline-green-300" :href="exp.link" target="_blank" rel="noopener noreferrer">{{ exp.company }}</a>
              </h2>
              <p><span class="text-green-400">Role:</span>&nbsp;{{ exp.title }}</p>
              <p><span class="text-green-400">Project Type:</span>&nbsp;{{ exp.type }}</p>
              <p><span class="text-green-400">Tech Stack:</span>&nbsp;{{ exp.techs }}</p>
              <p><span class="text-green-400">Started:</span>&nbsp;{{ exp.started }}</p>
              <p><span class="text-green-400">Ended:</span>&nbsp;{{ exp.ended ? exp.ended : "Current" }}</p>
              <p><span class="text-green-400">Description:</span>&nbsp;{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="viewing === 'projects'">
        <h2 class="text-4xl font-bold">
          <pre><span class="text-2xl text-green-400">02.</span> Personal Projects</pre>
        </h2>
        <div>
          <button
            @click="viewing = 'work'"
            class="text-2xl font-bold text-white bg-green-400 px-4 py-2 my-12 rounded-md drop-shadow-md border-green-700 border-2 border-b-4 focus:outline-green-300"
          >
            View Work Experience
          </button>
        </div>
        <div class="divide-y flex flex-col gap-8 divide-zinc-300 mx-auto">
          <div
            v-for="p in projects"
            v-bind:key="p.name"
          >
            <div class="flex flex-col gap-2">
              <h2 class="text-white text-2xl font-bold mt-8 mb-2">
                <a class="focus:outline-green-300" :href="p.link" target="_blank" rel="noopener noreferrer">{{ p.name }}</a>
              </h2>
              <p><span class="text-green-400">Tech Stack:</span>&nbsp;{{ p.techs }}</p>
              <p><span class="text-green-400">Description:</span>&nbsp;{{ p.description }}</p>
            </div>
          </div>
        </div>
      </template>

    </div>
  </NuxtLayout>
</template>
