Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            emails: [],
        },

        created() {
            this.getEmail();
        },

        methods: {
            getEmail: function () {
                for (let i = 0; i < 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {  // appena il server ci risponde, si attiva questa funzione
                            this.emails.push(response.data.response);
                        });
                };

            },
        },
    });

console.log();