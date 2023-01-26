<script lang='ts' setup>
  const links = [
    { href: '/projects', text: 'Projects' },
  ]
</script>

<template>
  <header class='absolute w-screen z-10 top-0 left-0 right-0 p-4 bg-slate-600 shadow-xl'>
    <nav class='flex flex-row justify-between'>
      <NuxtLink to='/'>トップへ</NuxtLink>
      <ul class='flex flex-row justify-end gap-4 text-white'>
        <li v-for='{ href, text } in links' :key='href' class='text-xl'>
          <NuxtLink :to='href'>{{ text }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <div class='mb-14'></div>
</template>
