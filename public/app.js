var Cat = function(name, favFood, imgLink){
  this.name = name;
  this.favFood = favFood;
  this.imgLink = imgLink;
};

window.onload = function(){

  cat1 = new Cat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
  cat2 = new Cat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");
  cat3 = new Cat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");
  cat4 = new Cat("Hobbes", "Tuna", "https://i.imgur.com/XoDWKiz.jpg");
  cat5 = new Cat("Thiccie", "Everything", "https://i.redd.it/n3ktuqp02poz.jpg");
  cat6 = new Cat("Dm9 Cat", "Jazz Cabbage", "https://i.redd.it/yc5hd1aj39uz.jpg");
  cat7 = new Cat("Frank", "TGI Frankdays", "https://i.imgur.com/e0CFglM.jpg");
  cat8 = new Cat("Thicc Boye", "Marshmallows", "https://i.redd.it/prcnufbgv0ky.jpg");
  cat9 = new Cat("Frank, again", "Anything", "https://i.imgur.com/GdHKFFr.jpg");

  var cats = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9];

  for (var cat of cats) {
    newCat(cat.name, cat.favFood, cat.imgLink);
  };
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

  var image = document.createElement('img');
  image.setAttribute('src', imgLink);
  image.setAttribute('width', '250px');

  imageListItem.appendChild(image)
  newCatListItem.appendChild(nameListItem);
  newCatListItem.appendChild(foodListItem);
  newCatListItem.appendChild(imageListItem);
  catSection.appendChild(newCatListItem);
};
