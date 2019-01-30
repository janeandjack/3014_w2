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

            //check against our mock account creds
            if (this.input.username !== "" && this.input.password != "" ) {
                let url = `./includes/index.php?username=${this.input.username}&&password=${this.password}`;

                fetch(url)
                .then(res => res.json())
                .then(data => {
                        if (data[0] == "false") {
                            // if the php file return a failure, try again
                            console.log("authentication failed, try again");
                        } else {
                            // if the back-end authentication works, then go to the users page
                            this.$emit("authenticated", true);
                            this.$router.replace({ name: "users" });
                        }
                })
                .catch(function(error){
                    console.log(error);
                });
            } else {
                console.log("username and password cannot be blank")
            }
        }
    }
}