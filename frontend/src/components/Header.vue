<template>
    <header class="text-center bg-gradient-to-r from-gray-800 to-blue-800 via-indigo-900 text-green-400 p-4 mb-5 sm:text-left">
        <RouterLink :to="{ name: 'Home' }">
        <div class="text-3xl mb-3 font-bold md:text-4xl">
            <i class="fa-solid fa-sack-dollar mr-1"></i>
            Digital Wallet
        </div>
        </RouterLink>
        <p class="text-sm">Created by <a class="italic text-white" href="https://github.com/adrianmartinsen/digital-wallet-api" target="_blank">&lt;Adrian Martinsen&gt;</a></p>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>
