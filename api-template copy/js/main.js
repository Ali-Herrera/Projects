fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=pZd4teWPUf9A9mJYDtuCoxwOQBnf5BAu' ,{
    method: 'get',
  })
  .then(response => { return response.json(); })
  .then(json => { 
    updateBestSellers(json); 
    console.log(json);
  })
  .catch(error => {
    console.log('NYT API Error: Defaulting to nytimes archival data.');
    updateBestSellers(nytimesArchive);
  });


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if ( data.media_type === 'image' ){
          document.querySelector('img').src = data.url
        }
        else if( data.media_type === 'video' ){
          document.querySelector('iframe').src = data.hdurl
        }
        
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


