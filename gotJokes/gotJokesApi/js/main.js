//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  //const choice = document.querySelector('input').value
  const url = `https://official-joke-api.appspot.com/random_joke`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.setup;
        
        document.querySelector('.punchline').addEventListener('click', getPunchLine)
        function getPunchLine(){
          document.querySelector('h3').innerText = data.punchline;
        }
       
})

        .catch(err => {
          console.log(`error ${err}`)
      });
}

