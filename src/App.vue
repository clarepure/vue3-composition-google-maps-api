<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import { reactive } from "vue";
import router from './router';

export default {
  name: "CheckoutForm",
  router,
  methods: {
    handleSubmit() {
      alert("form submitted");
    },
  },
  setup() {
    const form = reactive({
      firstName: "",
      lastName: "",
      email: "",
      billingAddress: {
        streetName: "",
        streetNumber: "",
        city: "",
        postcode: "",
      },
      deliveryAddress: {
        streetName: "",
        streetNumber: "",
        city: "",
        postcode: "",
      },
    });

    return {
      form,
    };
  },
};
</script>

<style lang="css">
.app {
  font-family: Arial, Helvetica, sans-serif;
  color: #434141;
  text-align: center;
}
.checkout-form {
  margin: 5px auto;
  padding: 10px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.address__field {
  padding-bottom: 10px;
  width: 250px;
  text-align: left;
}
label {
  display: block;
  font-weight: bold;
}

input {
  padding: 10px;
  width: 230px;
  border: 1px solid #fff;
  border-radius: 5px;
  outline: 0;
  background: #f8edcf;
}

button {
  margin-top: 30px;
  padding: 10px;
  width: 250px;
  color: #f8edcf;
  border: 1px solid #fff;
  border-radius: 5px;
  outline: 0;
  background: #434141;
}
</style>