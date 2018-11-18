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
  return `
      <div>
        <h2><a href="${repo.html_url}">${repo.name}</a></h2>
        <p><a href="#" data-repository="${repo.name}" data-owner="${repo.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${repo.description}</p>
      </div>
      <hr>
    `
}


$(document).ready(function (){
});
