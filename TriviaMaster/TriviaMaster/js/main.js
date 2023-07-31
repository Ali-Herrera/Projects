
document.querySelector('#question').addEventListener('click', getFetch)

  function getFetch(){
    
    const url = 'https://opentdb.com/api.php?amount=10'
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          document.querySelector('h2').innerText = data.results[1].question;

          
          document.querySelector('#answer').addEventListener('click', getAnswer)
          function getAnswer(){
            document.querySelector('h3').innerText = data.results[1].correct_answer;
          }
         
  })
  
          .catch(err => {
            console.log(`error ${err}`)
        });
  }


