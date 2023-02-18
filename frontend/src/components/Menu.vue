<template>
<nav class="fixed bottom-3 right-2">
  <div class="text-xl">
    <RouterLink :to="{ name: 'NewWallet' }"> 
        <button type="button" class="text-white bg-green-600 hover:bg-green-400 rounded-full px-5 py-2.5 text-center mr-2 mb-2">
            <i class="fa-solid fa-plus"></i>
        </button>
    </RouterLink>
  </div>
</nav>
</template>

<script>
export default {
    name: 'Menu',
}
</script>
