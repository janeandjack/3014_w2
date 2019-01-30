export default {
template:`
<div id="login">
<h1>Log In </h1>
<input type="text" name="username" v-model="input.username" placeholder="user name">
<input type="password" name="password" v-model="input.password" placeholder="password">
<button type="button" v-on:click="login()">Log In </button>
</div>
`,



    data(){
        return {
            input: {
                sername: "",
                password: ""
            }
        }
    },
    methods: {
        login(){
            console.log("trying to log in");
        }
    }
}