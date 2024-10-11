import {defineStore} from "pinia"
import axios from "axios"

export const userUserStore = defineStore("user", {
    state: () => ({
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
        headers: {
            headers:{
                Authorization: `Bearer ` + localStorage.getItem('token')
            }
        }
    }),
    actions:{

        setUser(userData) {
            this.user =userData;
            localStorage.setItem('user', JSON.stringify(userData));
        }
    }
})