<template>
    <div>
      <form @submit.prevent="handleSubmit" class="checkout-form">
        <h1>Checkout Form</h1>
        <div class="address__field">
          <label for="firstName">First name</label>
          <input type="text" id="firstName" v-model="form.firstName" required />
        </div>
        <div class="address__field">
          <label for="lastName">Last name</label>
          <input type="text" id="lastName" v-model="form.lastName" required />
        </div>
        <div class="address__field">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <AddressFieldGroup
          label="Billing Address"
          v-model:streetName="form.billingAddress.streetName"
          v-model:streetNumber="form.billingAddress.streetNumber"
          v-model:city="form.billingAddress.city"
          v-model:postcode="form.billingAddress.postcode"
        />
        <AddressFieldGroup
          label="Delivery Address"
          v-model:streetName="form.deliveryAddress.streetName"
          v-model:streetNumber="form.deliveryAddress.streetNumber"
          v-model:city="form.deliveryAddress.city"
          v-model:postcode="form.deliveryAddress.postcode"
        />
        <div class="address__field">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import AddressFieldGroup from "./AddressFieldGroup";
  import { reactive } from "vue";
  
  export default {
    name: "CheckoutForm",
    components: {
      AddressFieldGroup: AddressFieldGroup,
    },
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