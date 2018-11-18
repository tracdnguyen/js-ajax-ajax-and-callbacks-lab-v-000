function displayError(){
    $('#errors').html("Sorry, there was an error. Please try again.")
}

function searchRepositories(){
  let seachTerms = $('#searchTerms').val();
  let url = `https://api.github.com/search/repositories?q=${searchTerms}/`
  $.get(url, function(data){
    $("#results").html(showRepositories(data))
  }).fail(error => {displayError()}
}

function showRepositories(data){
  let repo = data.items.map(r => renderRepo(r))
  return `<ul>${repo}</ul>`
}

function renderRepo(repo){
  return `<li><b>Name: </b><spanp>${repo.name}</span><br>
  <b>Description: </b><span>${repo.description}</span><br>
  <b>URL: </b><span>${repo.html_url}</span>
  <p><a href="#" data-repository="${repo.name}" data-owner="${repo.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
  </li><br>
  `
}


$(document).ready(function (){
});
