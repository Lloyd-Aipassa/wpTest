<script setup>
import { ref } from 'vue'
const route = useRoute()
const slug = ref('')
if(route.params.slug) {
    let lastIndex = route.params.slug.length - 1
    if(!route.params.slug[lastIndex]) {
        slug.value = route.params.slug[lastIndex - 1]
    } else {
        slug.value = route.params.slug[lastIndex]
    }
} else {
    slug.value = 'home'
}
const { data } = await useFetch(`https://lara.brooklynwebdesign.nl/wp-json/wp/v2/pages?slug=test`, {
    query: { slug: slug.value }
})

console.log(toRaw(data.value))
</script>
<template>
    <div>
        <!-- <Header :title="data[0].title.rendered" :subtitle="data[0].content.rendered" /> -->

        <h1>{{data[0].title.rendered}}</h1>
        <span v-html="data[0].content.rendered"></span>
    </div>
</template>

<style></style>


