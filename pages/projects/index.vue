<script setup lang="ts">
  useServerSeoMeta({
    title: "Jesse Goodburne | Projects",
    ogTitle: "Jesse Goodburne | Projects",
    description: "My amazing portfolio",
    ogDescription: "My amazing portfolio",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
  })

  const viewing = useState('viewing', () => 'work')

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
      started: "2022-09-01",
      ended: null,
      description: "I'm the sole frontend developer for a small startup that builds various Web3 app using the Secret Network. I've recreated their company landing page, blog, validator page, and am currently working on the frontend of a new project that seeks to revolutionize the way people host their websites."
    },
    {
      company: "From Zero, LLC",
      link: "https://www.fromzero.com",
      title: "Full Stack Web Developer",
      type: "Language learning website",
      techs: "React, Typescript, Tailwindcss, Express, Node.js, MongoDB, Hotjar, Stripe, Paypal, AWS",
      started: "2021-01-01",
      ended: "2022-08-01",
      description: "I overhauled this website with WCAG 2.1 standards, modern designs and responsiveness, transitions and animations, and frontend / backend features, such as global and personal notifications, user rewards in the form of \"badges\", a site activity public feed when a user makes certain actions like asking a question or passing a quiz, admin panels to show user growth and retention, and many more features."
    }
  ]
</script>

<template>
  <NuxtLayout>
    <div class="text-lg flex flex-col justify-center items-center pb-24">
      <div>
        <button
          @click="viewing === 'work' ? viewing = 'projects' : viewing = 'work'"
          class="text-2xl font-bold text-white bg-green-400 px-4 py-2 my-16 rounded-md drop-shadow-md border-green-700 border-2 border-b-4"
        >
          <span v-if="viewing === 'work'">View Projects</span>
          <span v-else>View Work Experience</span>
        </button>
      </div>
      <template v-if="viewing === 'work'">
        <h2 class="text-4xl font-bold text-center">Work Experience</h2>
        <div class="divide-y flex flex-col gap-8 divide-zinc-300 mx-auto sm:w-5/6 lg:w-1/3">
          <div
            v-for="exp in work_exp"
            v-bind:key="exp.company"
          >
            <div class="flex flex-col gap-2">
              <h2 class="text-white text-2xl font-bold mt-8 mb-2">
                <a :href="exp.link" target="_blank" rel="noopener noreferrer">{{ exp.company }}</a>
              </h2>
              <p><span class="text-green-400">Role:</span>&nbsp;{{ exp.title }}</p>
              <p><span class="text-green-400">Project Type:</span>&nbsp;{{ exp.type }}</p>
              <p><span class="text-green-400">Technologies:</span>&nbsp;{{ exp.techs }}</p>
              <p><span class="text-green-400">Started:</span>&nbsp;{{ exp.started }}</p>
              <p><span class="text-green-400">Ended:</span>&nbsp;{{ exp.ended ? exp.ended : "Current" }}</p>
              <p><span class="text-green-400">Description:</span>&nbsp;{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="viewing === 'projects'">
        <h2 class="text-4xl font-bold text-center">Personal Projects</h2>
        <div class="divide-y flex flex-col gap-8 divide-zinc-300 mx-auto sm:w-5/6 lg:w-1/3">
          <div
            v-for="p in projects"
            v-bind:key="p.name"
          >
            <div class="flex flex-col gap-2">
              <h2 class="text-white text-2xl font-bold mt-8 mb-2">
                <a :href="p.link" target="_blank" rel="noopener noreferrer">{{ p.name }}</a>
              </h2>
              <p><span class="text-green-400">Technologies:</span>&nbsp;{{ p.techs }}</p>
              <p><span class="text-green-400">Description:</span>&nbsp;{{ p.description }}</p>
            </div>
          </div>
        </div>
      </template>

    </div>
  </NuxtLayout>
</template>
