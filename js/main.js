
/* Istruzioni:
Genera 10 mail tramite api e stampale in una lista
Usate Vue e Axios.
La richiesta AJAX per gli indirizzi email inviatela al seguente link:
https://flynn.boolean.careers/exercises/api/random/mail
La lista di email va stampata a schermo nella pagina html. */


/*=============================================
=            Vue con Ajax (Axios)            =
=============================================*/

let app = new Vue ({
    el: "#app",
    data : {
        emailList: []
    },
    mounted () {  // si avvia quando il contenuto della pagina è stato creato e montato
        for (let index = 0; index < 10; index++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail") // promessa di risposta  Nota: Es5 .then(function(response) { ... })
            .then(response => {       
                const theEmail = response.data.response;
                this.emailList.push(theEmail);
            })
        
        }
    } 
})









    

    