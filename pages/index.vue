<!-- <script setup>

const { data } = await useFetch(`https://lara.brooklynwebdesign.nl/wp-json/wp/v2/pages`, {

})

console.log(toRaw(data.value))


</script>

<template>
    <div>
        Blog home
        <h1>{{ data[1].title.rendered }}</h1>
        <span v-html="data[1].content.rendered"></span>
  
    
            <a :href="`${data[0].slug}`">
            {{ data[0].title.rendered }}</a>
            <br>

        <a href="/"> homeeeeeeeeee</a><br>
        <NuxtLink :to="`/blog/${data[0].slug}`">
            {{ data[0].title.rendered }}
        </NuxtLink><br>
        <NuxtLink to="/test">
            test
        </NuxtLink>
    </div>
</template> -->

<script setup>

const { data, data: offers } = await useFetch(`https://rocketsourcers.recruitee.com/api/offers/`, {

})
// const { data } = await useFetch(`https://lara.brooklynwebdesign.nl/wp-json/wp/v2/pages`, {

// })

console.log(toRaw(data.value.offers))

// console.log(data)
</script>

<template>
    <div>

     <p>{{ data.offers[2].company_name }}</p>   
     <p>{{ data.offers[2].slug }}</p>   
     <p>{{ data.offers[2].id }}</p>   
     <p>{{ data.offers[2].location }}</p>   
     <p>{{ data.offers[2].category_code }}</p>     
     <p>{{ data.offers[2].description }}</p>     
     <p v-html="data.offers[2].description"></p>   
       

   
        <!-- <h1>{{ data[1].title.rendered }}</h1>
        <span v-html="data[1].content.rendered"></span>

        <NuxtLink :to="`/blog/${data[0].slug}`">
            {{ data[0].title.rendered }}
        </NuxtLink><br>
        <NuxtLink to="/blog">
            Blogs
        </NuxtLink> -->
    </div>
</template>

