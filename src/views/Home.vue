<template>
  <div class="home">
    <Customers :customers="customers" />
  </div>
</template>

<script>
// @ is an alias to /src
import Customers from '@/components/Customers.vue'

export default {
  name: 'Home',
  components: {
    Customers
  },
  data() {
    return {
      customers: [],
    }
  },
  methods: {
    async fetchCustomers() {
      const res = await fetch('https://optimum-entity-332914.ey.r.appspot.com/getCustomers')

      const data = await res.json()

      return data
    },
  },
  async created() {
    this.customers = await this.fetchCustomers()
  },
}
</script>
