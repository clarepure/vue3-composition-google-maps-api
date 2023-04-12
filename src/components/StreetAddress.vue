<template>
    <div>
        <form @submit.prevent="handleSubmit" class="checkout-form">
            <h1>Address POC</h1>
                <div>
                    <label for="streetAddress1">Street Address 1</label>
                    <input type="text" placeholder="Street Address 1" v-model="address1" />
                </div>
                <div>
                    <label for="streetAddress2">Street Address 2</label>
                    <input type="text" placeholder="Street Address 2" v-model="address2" />
                </div>
                <div>
                    <label for="city">City</label>
                    <input type="text" placeholder="City" v-model="city" />
                </div>
                <div>
                    <label for="state">State</label>
                    <input type="text" placeholder="State" v-model="state" />
                </div>
                <div>
                    <label for="postalCode">Postal Code</label>
                    <input type="text" placeholder="Postal Code" v-model="postalCode" />
                </div>
                <div class="address__field">
                    <button type="submit">Submit</button>
                </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        name: 'streetAddress',
        methods: {
            handleSubmit() {
                alert("form submitted");
            },
        },
        setup() {
            const address1 = ref('');
            const address2 = ref('');
            const city = ref('');
            const state = ref('');
            const postalCode = ref('');

            return {
                address1, address2, city, state, postalCode
            }
        }
    }
</script>

<stype scoped>

</stype>