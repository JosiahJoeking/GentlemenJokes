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

          .about{
              width: 100%;
              padding; 78px 0px;
          }
          .about text{
              width 650px;
          }
          .main{
               width: 1130px;
               max-width: 95%;
               margin: 0;
               display: flex;
               align-items: clearInterval;
               justify-content: space-AudioBufferSourceNode;

          }
      }
      
result.innerHTML = html;
}