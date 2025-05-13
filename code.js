function dicionario(){
              // banco de dados = dicionario de dados 
    //array |  vetor

    let dados = [

                   {id:1, usuario:"Du", senha:"1234"},
                   {id:2, usuario:"Dudu", senha:"12345"},
                   {id:3, usuario:"Edu", senha:"123456"}
                ]

      let meujson = JSON.stringify(dados) 
      
      localStorage.setItem("bancodados", meujson)
    
 }

 function logar(){
    let lg = document.querySelector("#login").value
    let ps = document.querySelector("#password").value

    let dados = JSON.parse(localStorage.getItem("bancodados"))


 // laço de repetição

    for (let i =0; i < dados.length; i ++){

         if (lg == dados[i].usuario && ps == dados[i].senha){
        console.log (" sera ?  \n qual o numero " + i)
        alert ("Tatakae! ")

        sessionStorage.setItem("usuario", dados[i].usuario)

        window.location.href = "outra.html"


         }
    }
    //console.log ("seu login é: " + lg +"\n sua senha é: " + ps)
 }

 function userlogado(){

   document.querySelector("#nome").value = sessionStorage.getItem("usuario")
 }






 