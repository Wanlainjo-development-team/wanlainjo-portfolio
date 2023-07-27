<template>
    <v-img class="skillImage rounded-lg"
        src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" cover />
</template>

<style scoped>
.skillImage {
    position: relative;
}

.skillImage::after {
    content: "";
    position: absolute;
    background: linear-gradient(90deg, transparent, #12121242, #121212);
    width: 100%;
    height: 100%;
    z-index: 10;
}
</style>