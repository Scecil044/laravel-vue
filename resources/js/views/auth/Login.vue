<script setup>
import {ref} from "vue";
import axios from 'axios';
import {useRouter} from "vue-router"
import { userUserStore} from "../../store"

const userStore = userUserStore();
const router =useRouter();
const userData = ref({
    email: '',
    password: ''
})
const login = async() => {
    try {
        console.log(userData.value, "the data")
        await axios.post('login', {
            password: userData.value.password,
            email: userData.value.email
        })
        .then((response)=>{
            localStorage.setItem('token', response.data.token);
            userStore.setUser(response.data.user);
            console.log(response.data.user);
            router.push({name: 'home'})
        })
        .catch((error)=>{
            console.log(error.message);
        })
        
    } catch (error) {
        console.log(error);
    }
}
</script>
<template>
    <div class="min-h-screen flex items-center justify-center">
        <form method="POST" class="min-w-[400px] mx-auto" @submit.prevent="login">
            <div class="flex flex-col gap-0.5">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="userData.email" class="w-full">
            </div>

            <div class="flex flex-col gap-0.5">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="userData.password" class="w-full">
            </div>
            <div>
                <button class="w-full flex items-center justify-center py-2 px-6 bg-indigo-800 text-white">submit</button>
            </div>
        </form>
    </div>
</template>