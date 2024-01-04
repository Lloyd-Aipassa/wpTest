<script setup>

const { data } = await useFetch(`https://lara.brooklynwebdesign.nl/wp-json/wp/v2/posts`, {

})

console.log(toRaw(data.value))

// console.log(data)
</script>

<template>
    <div>
        Blog home
        <h1>{{ data[0].title.rendered }}</h1>
        <span v-html="data[0].content.rendered"></span>
        <NuxtLink :to="`/blog/${data[0].slug}`">
            {{ data[0].title.rendered }}
        </NuxtLink>

       
    </div>
</template>

