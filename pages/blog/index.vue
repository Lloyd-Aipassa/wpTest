<script setup>

const { data } = await useFetch(`https://rocketsourcers.recruitee.com/api/offers/`, {})

console.log(toRaw(data.value))

// console.log(data)
</script>

<template>
    <h1>vacatures</h1>
    <!-- <h1>test</h1>
    <p>{{ data.offers[0].title }}</p>
    <p>{{ data.offers[0].company_name }}</p>
    <p>{{ data.offers[0].slug }}</p>
    <p>{{ data.offers[0].id }}</p>
    <p>{{ data.offers[0].country }}</p>
    <p>{{ data.offers[0].location }}</p>
    <p>{{ data.offers[0].category_code }}</p>


    <span v-html="data.offers[0].description"></span>

    <NuxtLink to="/blog/sales-executive-2">
        link
    </NuxtLink> -->



    <!-- <li v-for="(dat, index) in data2" :key="index">
            {{ dat.title.rendered }}
            {{ dat.id }}
            <NuxtLink :to="`/blog/${dat.slug}`">
            {{ dat.title.rendered }}
        </NuxtLink>
        </li> -->


    <div>

        <ul>
            <li class="card" v-for="(d, index) in data.offers" :key="index">
                <h2>{{ d.title }}</h2><br>
                <p>{{ d.country }}</p>
                <p>{{ d.location }}</p><br>


                <NuxtLink :to="`/blog/${d.slug}`">bekijk vacature</NuxtLink>
            </li>
        </ul>

    </div>
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