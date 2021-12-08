<template>
  <div :key="item.uid" v-for="item in customer">
    <div class="row">
      <div class="flex md6 lg4">
        <va-card>
          <va-card-title>{{ item.name }} - {{ item.uid }}</va-card-title>
          <va-card-content>
            <p>{{ item.name.charAt(0).toUpperCase() + item.name.slice(1) }}</p>
            <p>{{ item.age }} years old</p>
            <p>Employeed as {{ item.title }}</p>
            <p>Works at {{ item.company }}</p>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
  <button class="goback-btn"><router-link to="/">Go Back</router-link></button>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      customer: null,
    }
  },
  methods: {
    async fetchCustomer(id) {
      const res = await fetch(
        `https://optimum-entity-332914.ey.r.appspot.com/getCustomer/${id}`
      )

      const data = await res.json()

      return data
    },
  },
  async created() {
    this.customer = await this.fetchCustomer(this.id)
  },
}
</script>

<style>
.row {
  justify-content: center;
}

.va-card__content {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}

.va-card__content p {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}

.goback-btn {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
}

a,
a:visited,
a:hover,
a:active {
  color: inherit;
}

.goback-btn:hover {
  background-color: #ccc;
  color: #fff;
}
</style>
