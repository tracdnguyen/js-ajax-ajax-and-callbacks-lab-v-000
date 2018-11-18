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

$(document).ready(function (){
});
