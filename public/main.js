//Josiah Joel
//Ethan Lee Chong
//Gareth Walker

function JokeHTML() {
    console.log("test");
    let result = document.querySelector ('#result')

    let html = '';
    html += ` <h1>Lorem Ipsum.........................</h1>
        <div Id = "ReturnHome">
            <a class="waves-effect waves-light btn">Return Home</a>
        </div>
        <div Id = "TellAnother">
        <a class="waves-effect waves-light btn">Tell another</a>
        </div>
      </main>
      `
    result.innerHTML = html;
}

 // Save Data
 const email = document.querySelector("#email");
 const nameInput = document.querySelector("#name");
 const message = document.querySelector("#message");
 const success = document.querySelector("#success");


 // Verify Data  
 function validateForm(){
     if(!emailIsValid(email.value)){
         errorNodes[1].innerText = "Please enter a Name";
         nameInput.classList.add("error-border");
     }
 }