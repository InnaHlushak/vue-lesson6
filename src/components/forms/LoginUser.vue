<template>
    <div class="container" >
        <h3>Login</h3>
        <v-sheet class="mx-auto" width="400" color="black">
            <p v-if="!isLoggedIn">Enter the following information to confirm your login:</p>
            <v-form @submit.prevent="submit">
                <div v-if="!isLoggedIn">
                    <v-text-field
                        v-model="forma.email"
                        placeholder="text@text.text"
                        label="E-mail"
                    ></v-text-field>
                    <span class="error">{{ errorEmail }}</span>

                    <v-text-field
                        v-model="forma.password"                     
                        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPass ? 'text' : 'password'"
                        @click:append="showPass = !showPass"
                        label="Password"
                    ></v-text-field>
                    <span class="error">{{ errorPassword }}</span>                
                </div> 
                <v-btn  v-if="isLoggedIn" class="mt-2" type="submit" block> Logout </v-btn>
                <v-btn v-else class="mt-2"  type="submit" block> Login </v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
//імпортувати змінну стану аутентифікації користувача за допомогою Firebase
//імпортувати функції  
import {auth} from "@/main";
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
//імпортувати store який створили у PINIA
import {useInfoUserStore} from "../../store/InfoUserStore.js";

export default {
    name: 'LoginUser',        
    data() {
        return  {
            forma: {
                email: '',
                password: '',
            },
            errorEmail: '',
            errorPassword: '',
            showPass: false,
            isValidForm: false,
            isLoggedIn: false,
        }
    },
    methods: {
        validateForm() {   
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
            if(!emailRegex.test(this.forma.email)) {
                this.errorEmail = 'Must be a valid e-mail';
                return;
            }
            this.errorEmail= '';
            
            const passwordRegex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g; 
            if(!this.forma.password || !passwordRegex.test(this.forma.password)) {
                this.errorPassword = 'The password must contain at least 6 characters, at least one capital letter and at least one number';
                return;
            } 
            this.errorPassword= '';

            this.isValidForm = true;           
        },
        //вхід користувача
        async login() {
            this.validateForm();
            if (this.isValidForm) {
                //повернення користувача збереженого в  Firebase Authentication
                //https://console.firebase.google.com/project/study-project-43b9b/authentication/users
                signInWithEmailAndPassword(auth, this.forma.email, this.forma.password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        //console.log(auth.currentUser);
                        this.isLoggedIn = true;
                        //зберегти accessToken користувача в LocalStorage
                        localStorage.setItem('accessToken',JSON.stringify(auth.currentUser.accessToken));
                        alert('Login successfully');
                    })
                    .catch((error) => {                       
                        //console.log(error.code, error.message);
                        alert('This user is not registered');
                        this.redirectToSignUpUser();
                    })
            }
        },
        //вихід користувача
        async logOut() {
            //при виході здійнюється вигрузка користувача із системи Firebase, якщо він там є
            if (this.isLoggedIn) {
                try {
                    await signOut(auth);
                    this.isLoggedIn = false; 
                    //видалити accessToken користувача з LocalStorage
                    localStorage.removeItem('accessToken'); 
                    alert("You are out");
                } catch(error) {
                    alert(`Sorry! Error: ${error.code}, ${error.message}`);
                } 
            }   
        },
         //перенаправлення на сторінку реєстрації
        redirectToSignUpUser() {
            this.$router.push({path: '/sign-up-user'});
        },
        submit() {
            if (this.isLoggedIn) {
                this.logOut();
            } else {
                this.login();
            }
        },
    },  
    watch: {
        isLoggedIn() {
            useInfoUserStore().isLogged = this.isLoggedIn;
            alert('isLogged in PINIA:  ' + useInfoUserStore().isLogged);
        }
    },  
    mounted() {
        if (!!localStorage.getItem('accessToken')) {
            this.isLoggedIn = true;
        }
    } 
}
</script>

<style scoped>
    .error {
        color:red;
    }  
</style>