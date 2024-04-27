<script setup>
const route = useRoute();
const slug = route.params.slug[0];
console.log(slug)
// console.log(route.params.slug[0])
const { data } = await useFetch(`https://siberischekateu.recruitee.com/api/offers/${slug}`)
// const { data } = await useFetch(`https://rocketsourcers.recruitee.com/api/offers/${slug}`)
console.log(toRaw(data.value))
// if (!data.value || !data.value.attributes) {
//   throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
// }
const pageSlug = `https://siberischekateu.recruitee.com/api/offers/${slug}/candidates`
// const pageSlug = `https://qwicko.recruitee.com/api/offers/${slug}/candidates`


const resultMessage = ref('');

const handleSubmit = async (event) => {
    event.preventDefault(); // Voorkom standaardgedrag van formulier verzenden
    const formData = new FormData(event.target);

    try {
        const response = await fetch(event.target.action, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.status + ' ' + response.statusText);
        }

        const data = await response.text();
        // Toon een succesbericht of voer andere acties uit
        resultMessage.value = "<p>Bedankt voor het indienen van uw gegevens!</p>";
        event.target.reset();
    } catch (error) {
        // Handel fouten af
        console.error('Error:', error);
        resultMessage.value = "<p>Fout: " + error.message + "</p>";
    }
};

</script>

<template>
<h1>Functieomschrijving</h1>

<h2>{{ data.offer.title }}</h2><br>
                <p>{{ data.offer.country }}</p>
                <p>{{ data.offer.location }}</p><br>
                <p>{{ data.offer.company_name }}</p><br>
                <p>{{ data.offer.salary.max }}</p><br>

            
   <span v-html="data.offer.description"></span>
   <span v-html="data.offer.requirements"></span>

   <form id="candidateForm" :action="pageSlug" method="post" enctype="multipart/form-data" @submit.prevent="handleSubmit">
    			<label for="name">Naam:</label><br>
    			<input type="text" id="name" name="candidate[name]" required><br>
    			<label for="email">E-mail:</label><br>
    			<input type="email" id="email" name="candidate[email]" required><br>
    			<label for="phone">Telefoonnummer:</label><br>
    			<input type="tel" id="phone" name="candidate[phone]" required><br>
    			<label for="photo">Foto:</label><br>
    			<input type="file" id="photo" name="candidate[photo]" accept="image/*" required><br>
    			<label for="cover_letter">Sollicitatiebrief:</label><br>
    			<textarea id="cover_letter" name="candidate[cover_letter]" required></textarea><br>
    			<label for="cv">CV:</label><br>
    			<input type="file" id="cv" name="candidate[cv]" accept=".pdf,.doc,.docx" required><br><br>
    			<input type="submit" value="Verzenden">
			</form>
            <div id="result" v-html="resultMessage"></div>
   <!-- <NuxtLink :to="`${data.offer.careers_apply_url}`">Apply</NuxtLink> -->

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