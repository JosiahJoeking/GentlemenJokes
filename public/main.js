//Josiah Joel
//Ethan Lee Chong
//Gareth Walker

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})

function JokeHTML() {
    console.log("test");
    let result = document.querySelector ('#result')

    let html = '';
    html += ` <h2>Lorem Ipsum.........................</h2>
        <div id = "Button">
            <a class="waves-effect waves-light btn-large black amber-text" href="home.html">Return Home</a>
        </div>
        <div id = "Button">
            <a class="waves-effect waves-light btn-large amber black-text" onclick="JokeHTML()">Tell another</a>
        </div>
      </main>
      `
    result.innerHTML = html;
}

function ToDoHTML() {
    console.log("test");
    let result = document.querySelector ('#result')

    let html = '';
    html += ` <h2>Lorem Ipsum.........................</h2>
                <h4>Participants: ........</h4>
                <h4>Cost: ........</h4>
        <div id = "Button">
            <a class="waves-effect waves-light btn-large black amber-text" href="home.html">Return Home</a>
        </div>
        <div id = "Button">
            <a class="waves-effect waves-light btn-large amber black-text" onclick="ToDoHTML()">Tell another</a>
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