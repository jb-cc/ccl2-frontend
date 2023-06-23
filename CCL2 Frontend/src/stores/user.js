// Purpose: Stores user data and provides methods to log in and out.



import {defineStore} from 'pinia'
import http from "../http-common";

export const UserStore = defineStore('user', {
    state: () => {
        return {
            isLoggedIn: false,  // Store login status here
            user: null // Store user data here
        }
    },
    actions: {

        // send a request to the server to log in, and if successful, set the user data and login status
        async logIn({username, password}) {
            try {
                const response = await http.post('http://localhost:8080/login', {
                    username,
                    password
                });


                if (response.data.token) {
                    // Save response data to UserStore and set isLoggedIn to true (for the navbar)
                    this.isLoggedIn = true;
                    this.user = response.data.user;
                }
            } catch (error) {
                console.error(error);
                throw error; // to display it in the UI
            }
        },

        // send a request to the server to log out. If successful: Cookies are cleared, the user data is cleared, and the login status is set to false, user gets redirected to the landing page
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

        // send a request to the server to register a new user, and if successful, set the user data and login status. The username must be unique otherwise the server will return an error
        async register({username, email, password}) {
            try {
                const response = await http.post('http://localhost:8080/register', {
                    username,
                    email,
                    password
                });


                if (response.data.token) {
                    // Save response data to UserStore and set isLoggedIn to true (for the navbar)
                    this.isLoggedIn = true;
                    this.user = response.data.user;
                    console.log('[user.js / register function] response.data.user: ' +JSON.stringify(response.data.user) )
                }

                return response;
            } catch (error) {
                console.error(error);
                throw error; // Re-throw the error after logging it
            }
        }

    }
})
