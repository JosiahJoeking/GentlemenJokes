//Josiah Joel
//Ethan Lee Chong
//Gareth Walker

document.getElementsById("JokeButton").onclick = function() {JokeHTML()};

function JokeHTML() {
    console.log("test");
    let result = document.querySelector ('#result')

    let html = '';
    html += ` <h1>Lorem Ipsum.........................</h1>
        <div class = "ReturnHome">
            <a class="waves-effect waves-light btn">Return Home</a>
        </div>
        <div class = "TellAnother">
        <a class="waves-effect waves-light btn">Tell another</a>
        </div>
      </main>
      `
    result.innerHTML = html;
}