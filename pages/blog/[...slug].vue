<script setup>
const route = useRoute();
const slug = route.params.slug[0];
console.log(slug)
// console.log(route.params.slug[0])
const { data } = await useFetch(`https://rocketsourcers.recruitee.com/api/offers/${slug}`)
console.log(toRaw(data.value))
// if (!data.value || !data.value.attributes) {
//   throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
// }

</script>

<template>
<h1>Functieomschrijving</h1>
   <span v-html="data.offer.description"></span>
   <span v-html="data.offer.requirements"></span>
 
   <NuxtLink :to="`${data.offer.careers_apply_url}`">Apply</NuxtLink>

</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
}

h1 {
    font-size: 50px;
    margin: 80px 0;
}

h2 {
    font-size: 25px;
}

p {
    font-size: 16px;
}

ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
}

li.card {
    list-style: none;
    border: 1px solid #1d1d1d;
    padding: 40px;

}

a {
    display: block;
    background-color: #1d1d1d;
    color: #fff;
    padding: 15px 20px;
    margin-top: 24px;
    width: 250px;
}

@media (max-width:600px) {
    h1 {
        font-size: 30px;
        margin: 80px 0;
    }

    h2 {
        font-size: 15px;
    }

    p {
        font-size: 14px;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
    }
}
</style>