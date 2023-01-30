<script setup lang="ts">
  useSeoMeta({
    title: "Jesse Goodburne | Contact",
    ogTitle: "Jesse Goodburne | Contact",
  })

  const handleSubmit = (e: Event) => {
    e.preventDefault()
  }
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center gap-12 p-4 text-lg">
      <h2 class="text-4xl font-bold self-start">
        <pre><span class="text-2xl text-green-400">04.</span> Contact</pre>
      </h2>
      <div class="w-full md:w-2/3 mx-auto">
        <p>Please fill out the form below and I&apos;ll get back to you as soon as I can!</p>
        <p>You can also email me directly at <a href="mailto:jessegoodburne@gmail.com" class="text-green-400">jessegoodburne@gmail.com</a></p>
      </div>
      <form
        @submit="handleSubmit"
        class="w-full md:w-1/2"
        name="contact"
        data-netlify="true"
      >
        <fieldset class="border-2 border-green-400 p-4 rounded-lg">
          <div class="pt-2 flex flex-col items-end">
            <div class="w-full flex flex-col gap-4 -mt-2 text-zinc-900">
              <input
                name="name"
                class="px-2 py-1 rounded-md focus:outline-green-700"
                type="text"
                placeholder="Name"
                required="true"
                autofocus="true"
              />
              <input
                name="email"
                class="px-2 py-1 rounded-md focus:outline-green-700"
                type="email"
                placeholder="Email"
                autocomplete="off"
                required="true"
              />
              <textarea
                name="message"
                class="px-2 py-1 rounded-md focus:outline-green-700"
                type="text"
                placeholder="Message"
                required="true"
              />
            </div>
            <button
              type="submit"
              class="text-xl font-bold text-zinc-900 bg-green-400 px-4 py-2 mt-4 rounded-md drop-shadow-md border-green-700 border-2 border-b-4 focus:outline-green-700"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
      <div class="w-full mx-auto md:w-2/3">
        <aside class="font-bold">Notes:</aside>
        <ul>
          <li>
            <GreenTriangle />&nbsp;A signed contract agreeing to payment terms, as well as anything within reason you request, will be required before work commences.
          </li>
          <li>
            <GreenTriangle />&nbsp;Once a project has been completed the source code will also be handed off in either a zipfile or git repo. Site builders such as Squarespace and Wix are generally excluded from this, unless you request backups of copy or custom CSS/Javascript to be added.
          </li>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>
