window.onload = function(){

  var myCatArray = [{
  
  }]

  return addCat("Hobbes", "Tuna", "https://i.imgur.com/XoDWKiz.jpg");
};

var newCat = function(name, favFood, imgLink){

  var catSection = document.getElementById('cats');

  var newCatListItem = document.createElement('ul');
  newCatListItem.className = 'cat';

  var nameListItem = document.createElement('li');
  nameListItem.innerText = "Name: " + name;
  var foodListItem = document.createElement('li');
  foodListItem.innerText = "Favourite food: " + favFood;
  var imageListItem = document.createElement('li');
  // imageListItem.innerText = imgLink;

  var image = document.createElement('img');
  image.setAttribute('src', imgLink);
  image.setAttribute('width', '500px');


  image.innerText = imgLink;

  imageListItem.appendChild(image)
  newCatListItem.appendChild(nameListItem);
  newCatListItem.appendChild(foodListItem);
  newCatListItem.appendChild(imageListItem);
  catSection.appendChild(newCatListItem);
};

var addCat = function(name, favFood, imgLink) {
  var article = newCat(name, favFood, imgLink);
};
