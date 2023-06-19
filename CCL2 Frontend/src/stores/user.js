// user.js
import {defineStore} from 'pinia'
import http from "../http-common";

export const UserStore = defineStore('user', {
    state: () => {
        return {
            isLoggedIn: false,
            user: null // Store user data here
        }
    },
    actions: {
        async logIn({username, password}) {
            try {
                const response = await http.post('http://localhost:8080/login', {
                    username,
                    password
                });

                if (response.data.token) {
                    this.isLoggedIn = true;
                    this.user = response.data.user; // Store user data
                }
            } catch (error) {
                console.error(error);
            }
        },
        async logOut() {
            try {
                const response = await http.post("http://localhost:8080/logout");
                if (response.status === 200) {
                    this.isLoggedIn = false;
                }
            } catch (error) {
                console.error(error);
            }
        },
        async register({username, email, password}) {
            try {
                const response = await http.post('http://localhost:8080/register', {
                    username,
                    email,
                    password
                });

                if (response.data.token) {
                    this.isLoggedIn = true;
                    this.user = response.data.user; // Store registered user data
                    console.log('[user.js / register function] response.data.user: ' + response.data.user)
                }

                return response;
            } catch (error) {
                console.error(error);
            }
        }
    }
})
