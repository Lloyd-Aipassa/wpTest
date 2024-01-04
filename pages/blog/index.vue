<script setup>

const { data } = await useFetch(`https://rocketsourcers.recruitee.com/api/offers/`, { })

console.log(toRaw(data.value))

// console.log(data)
</script>

<template>
    <h1>test</h1>
    <p>{{ data.offers[0].title }}</p>
    <p>{{ data.offers[0].company_name }}</p>
    <p>{{ data.offers[0].slug }}</p>
    <p>{{ data.offers[0].id }}</p>
    <p>{{ data.offers[0].country }}</p>
    <p>{{ data.offers[0].location }}</p>
    <p>{{ data.offers[0].category_code }}</p>
    

    <span v-html="data.offers[0].description"></span> 
    
      

        <!-- <li v-for="(dat, index) in data2" :key="index">
            {{ dat.title.rendered }}
            {{ dat.id }}
            <NuxtLink :to="`/blog/${dat.slug}`">
            {{ dat.title.rendered }}
        </NuxtLink>
        </li> -->


    <div>
      

        <li v-for="(d, index) in data.offers" :key="index">
            <p>{{ d.title }}</p>
           
            <!-- <NuxtLink :to="`/blog/${dat.slug}`">
            {{ dat.title }}
        </NuxtLink> -->
        </li>

    </div>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

p{
    font-family: Arial, Helvetica, sans-serif;
}
</style>