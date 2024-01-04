

<script setup>

async function getData() {
	const response = await fetch(`https://rocketsourcers.recruitee.com/api/offers/`);
	const data = await response.json();
    
    // // loop door de array
    // data.forEach(user => {
    //     console.log(user)
    //     const {Password, eMail} = user //Destruc de user object
    //     console.log(Password, eMail)
    // });

    console.log(data.offers[0].slug)
}



onMounted(() => {
    getData()
});
</script>

<template>
    test api

{{ data }}

</template>