//Josiah Joel
//Ethan Lee Chong
//Gareth Walker

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})

function getjoke()
{
    const request = new XMLHttpRequest();
    request.open("GET", "https://v2.jokeapi.dev/joke/Any?safe-mode");
    request.send();
    request.onload = () => {
        if (request.status === 200)
        {
            console.log(JSON.parse(request.response));
            JokeDisplay(JSON.parse(request.response));
        } else {
            console.log(request)
            console.log(`error ${request.status}`)
        }
    }
}

function JokeDisplay(Joke) {
    console.log("test");
    let result = document.querySelector ('#result')

    if (Joke.type === "single")
    {
        let html = '';
 
        html += `<h4>Joke:</h4>
        <h2>${Joke.joke}</h2>
            <div id = "Button">
                <a class="waves-effect waves-light btn-large black amber-text" href="home.html">Return Home</a>
            </div>
            <div id = "Button">
                <a class="waves-effect waves-light btn-large amber black-text" onclick="getjoke()">Tell another</a>
            </div>
        </main>
        `
        result.innerHTML = html;
    }
    if (Joke.type === "twopart")
    {
    let result = document.querySelector ('#result')
    let html = '';
 
    html += `
    <h4>Setup:</h4>
    <h2>${Joke.setup}</h2>
    <h4>Delivery:</h4>
    <h2>${Joke.delivery}</h2>
        <div id = "Button">
            <a class="waves-effect waves-light btn-large black amber-text" href="home.html">Return Home</a>
        </div>
        <div id = "Button">
            <a class="waves-effect waves-light btn-large amber black-text" onclick="getjoke()">Tell another</a>
        </div>
    </main>
    `
    result.innerHTML = html;
    }
}

function getactivity()
{
    const request = new XMLHttpRequest();
    request.open("GET", "https://www.boredapi.com/api/activity");
    request.send();
    request.onload = () => {
        if (request.status === 200)
        {
            console.log(JSON.parse(request.response));
            ToDoHTML(JSON.parse(request.response));
        } else {
            console.log(request)
            console.log(`error ${request.status}`)
        }
    }
}

function ToDoHTML(ToDo) {
    console.log("test");
    let result = document.querySelector ('#result')
    let price;
    price = ToDo.price * 10;

    let html = '';
    html += ` <h4>${ToDo.activity}</h4>
                <h2>Participants: ${ToDo.participants}</h2>
                <h2>Cost: ${price} / 10 </h2>
        <div id = "Button">
            <a class="waves-effect waves-light btn-large black amber-text" href="home.html">Return Home</a>
        </div>
        <div id = "Button">
            <a class="waves-effect waves-light btn-large amber black-text" onclick="getactivity()">Tell another</a>
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

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
