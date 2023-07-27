
//NYTIMES link = https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key= + API_key
// GOOGLE API = my_API

//var nytimesKey = config.NYT_KEY;
//var googleBooksKey = config.GOOGLE_BOOKS_KEY;


fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key= + API_Key' ,{
    method: 'get',
  })
  .then(response => { return response.json(); })
  .then(data => {
    console.log(data)
    let text = "";
    for (let i=0; i< data.results.length; i++){
      let bookInfo = data.results[i].book_details[0];
      let lastWeek = data.results[i].rank_last_week;      ;
      let weeksOnList = data.results[i].weeks_on_list;

      text += "Title: " + bookInfo.title + "<br>"
      + "Author: " + bookInfo.author + "<br>"
      + "Description: " + bookInfo.description + "<br>"
      + "Rank last week: " + lastWeek + "<br>"
      + "Weeks on list:" + weeksOnList + "<br>"
      + "<br>" ;

    }

    document.getElementById('best-sellers-list').innerHTML = text;

  });

