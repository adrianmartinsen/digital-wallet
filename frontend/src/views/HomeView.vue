<template>
  <main v-if="!loading">
    <div class="flex flex-wrap justify-center">
      <div v-for="wallet in wallets" :key="wallet.id">
        <WalletCard :wallet="wallet" @refresh="updateData" />
      </div>
    </div>
  </main>

  <div v-else>
    Data is loading...
  </div>
</template>

<script>
import WalletCard from '@/components/WalletCard.vue'

export default {
  name: 'Home',
  components: {
    WalletCard,
  },
  data() {
    return {
      uri: 'http://127.0.0.1:3525/api/wallets',
      loading: false,
      wallets: [],
    }
  },
  methods: {
    async fetchData() {
      const res = await fetch(this.uri)
      const data = await res.json()
      return data
    },
    updateData(id, amount) {
      fetch(`${this.uri}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amount })
      })
    },
  },
  async created() {
    const data = await this.fetchData()
    this.wallets = data
    this.loading = false
  },
}
</script>
