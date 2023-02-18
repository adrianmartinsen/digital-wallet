<template>
    <div class="min-w-md p-6 m-2 rounded-lg shadow bg-gray-800 border-gray-700 text-white relative">
        <h5 class="mb-3 text-center text-2xl font-bold tracking-tight">{{ wallet.name }}</h5>
        <div class="text-sm hover:text-gray-300 m-2 absolute top-0 right-0">
            <RouterLink :to="{ name: 'EditWallet', params: { id: wallet._id}  }"><i class="fa-solid fa-pen"></i></RouterLink>
        </div>
        <div class="flex justify-center items-center space-x-4">
            <button type="button" @click="changeAmount('minus')" class="bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-md px-5 py-2.5 text-center mr-2 mb-2">-</button>
            <p class="p-2 font-normal text-xl text-gray-200">{{ wallet.amount }}</p>
            <button type="button" @click="changeAmount('pluss')" class="bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-md px-5 py-2.5 text-center mr-2 mb-2">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WalletCard',
    props: ['wallet'],
    data() {
        return {
            init: this.debounce(() => this.update())
        }
    },
    methods: {
        debounce(func, timeout = 2000){
            let timer
            return (...args) => {
                clearTimeout(timer)
                timer = setTimeout(() => { func.apply(this, args) }, timeout)
            }
        },
        update() {
            this.$emit('refresh', this.wallet._id, this.wallet.amount)
        },
        changeAmount(sign) {
            if (sign === 'minus') {
                this.wallet.amount -= 10
            } else if (sign === 'pluss') {
                this.wallet.amount += 10
            }
            this.init()
        },
    },
}
</script>