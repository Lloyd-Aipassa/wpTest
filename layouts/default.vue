<template>
    <div>
        <nav>
            <NuxtLink to="/">
                Home
            </NuxtLink>
            <NuxtLink to="/blog">
                Vacatures
            </NuxtLink>
        </nav>
        <slot />

    </div>
</template>

<style scoped>
nav {
    display: flex;
    padding: 20px 0;
    gap: 30px;
}

a{
    text-decoration: none;
    color: red;
}
a:hover{
    color: rgb(126, 10, 10);
}
</style>