function getMyFavorites() {
  
    let favoriteFact = document.getElementById('selected-useless-fact').innerText
    console.log(favoriteFact);
    arrayFavFacts.push(favoriteFact);
    let newFavItem = arrayFavFacts[arrayFavFacts.length-1];
  
    printFavorite(newFavItem);
  
  }
  
  
    function printFavorite(string) {
      const favoritesList = document.getElementsByTagName("ul")[0]
    
        let listItem = document.createElement('li');
        listItem.className = 'list-items';
        listItem.innerText = string;
            
            favoritesList.appendChild(listItem);
        }

        
module.exports = {
printFavorite, 
getUselessFact,
getMyFavorites   
};
