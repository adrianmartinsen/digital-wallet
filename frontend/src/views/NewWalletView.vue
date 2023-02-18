<template>
    <div class="flex flex-wrap justify-center max-w-md mx-auto">
        <h5 class="text-gray-700 mb-5 text-center text-2xl tracking-tight">Create New Wallet</h5>
        <form @submit.prevent="handleSubmit">
            <div class="flex flex-wrap justify-center">
                <div class="relative z-0 w-full mb-6 group">
                    <input v-model="title" type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Wallet Name</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input v-model="amount" type="text" name="amount" id="amount" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                    <label for="amount" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Amount (default 0)</label>
                </div>
                <button class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Create Wallet</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            amount: '',
            uri: 'http://127.0.0.1:3525/api/wallets'
        }
    },
    methods: {
        handleSubmit() {
            let wallet = {
                name: this.title,
                amount: this.amount
            }
            fetch(this.uri, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(wallet)
            }).then(() => {
                this.$router.push('/')
            }).catch(err => console.log(err))
        }
    }
}
</script>