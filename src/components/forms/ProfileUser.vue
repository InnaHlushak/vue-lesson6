<template>
    <div class="container" >
        <h3>Profile</h3>
        <v-sheet class="mx-auto" width="400" color="black">
            <v-form @submit.prevent="validateForm">
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

                <v-text-field 
                    v-model="forma.firstName"
                    label="First name"
                ></v-text-field>
                <span class="error">{{ errorFirstName }}</span>
                    
                <v-text-field
                    v-model="forma.lastName"
                    label="Last name"
                ></v-text-field>
                <span class="error">{{ errorLastName }}</span>

                <div>
                    <input type="radio" id="professional" value="professional" v-model="forma.picked" />
                    <label for="professional">I am a professional astronomer</label>
                    <br/>
                    <input type="radio" id="study" value="study" v-model="forma.picked" />
                    <label for="study">I study astronomy</label>
                    <br/>
                    <input type="radio" id="curious" value="curious" v-model="forma.picked" />
                    <label for="curious">I am just curious</label>
                </div>

                <CustomInput  v-model="forma.customValue" />
               
                <CounterHours/>

                <div>
                    <input type="checkbox" id="checkbox" v-model="forma.checked" />
                    <label for="checkbox">I confirm that all data is correct</label>
                </div> 
                <span class="error">{{ errorChecked }}</span>

                <v-btn class="mt-2" :class="{gosubmit: isValidForm}" type="submit" block> {{ textSubmitButton }} </v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
import CustomInput from "@/components/forms/CustomInput.vue";
import CounterHours from "@/components/forms/CounterHours.vue";

export default {
    name: 'ProfileUser', 
    components: {
        CustomInput,
        CounterHours,
    },       
    data() {
        return  {
            forma: {
                email: '',
                password: '',
                firstName: '',                
                lastName: '',
                picked: '',
                customValue: '',
                checked:  false,
            },
            errorEmail: '',
            errorPassword: '',
            showPass: false,
            errorFirstName: '',                
            errorLastName: '',
            errorChecked: '',
            isValidForm: false,
            textSubmitButton: 'Submit',
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
            
            const nameRegex = /[0-9]/;
            if (this.forma.firstName.trim().length < 3 || nameRegex.test(this.forma.firstName)) {
                this.errorFirstName = 'First name must be at least 3 characters and can not contain digits';
                return;
            } 
            this.errorFirstName = '';

            if (!this.forma.lastName.trim() || this.forma.lastName.trim().length > 15 || nameRegex.test(this.forma.lastName)) {
                this.errorLastName = 'Last name must be 15 characters or less and can not contain digits';
                return;
            }
            this.errorLastName = '';

            this.errorChecked= '';
            if (!this.forma.checked){
                this.errorChecked= 'You have not confirmed';
                return;
            } else {
                this.isValidForm = true;
                this.textSubmitButton = "Submitted";
                alert('Data saved and sent'); 
            }
        },
    }  
}
</script>

<style scoped>
    .error {
        color:red;
    } 
    .gosubmit {
        background-color: rgba(0, 128, 0, 0.509);
        cursor: not-allowed;
        pointer-events: none;
    }
</style>
