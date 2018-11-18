function displayError(){
    $('#errors').html("Sorry, there was an error. Please try again.")
}

function searchRepositories(){
  let seachTerms = $('#searchTerms').val();
  let url = `https://api.github.com/search/repositories?q=${searchTerms}/`
}

$(document).ready(function (){
});
