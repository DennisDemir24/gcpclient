<template>
  <div class="container">
    <div class="list-wrapper" :key="customer.name" v-for="customer in customers">
      <div class="list-container">
        <h2>Customer</h2>
        <h3>
          {{ customer.name.charAt(0).toUpperCase() + customer.name.slice(1) }}
        </h3>
      </div>
      <router-link :to="{ name: 'Customer', params: { id: customer.id } }">
        <button class="view-btn">More info</button>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Customers',
  props: {
    customers: Array,
  },
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-evenly;
}

.list-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 200px;
}

.list-container h2 {
  border-bottom: 2px solid #ccc;
  margin-bottom: 10px;
}

.list-container h3 {
  text-align: center;
  padding-top: 5px;
  padding-bottom: 10px;
}

.info-container p {
  margin-top: 0;
  color: #babfc2;
}

.view-btn {
    background-color: #f5f6f7;
    border: none;
    border-radius: 5px;
    padding: 8px 15px;
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.5px;
}

.view-btn:hover {
    background-color: #f5f6f7;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.4);
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
