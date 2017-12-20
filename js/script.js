$(function(){

    var model = {
        currentCat: null,
        cats: [
          {
            clickCount : 0,
            name : 'Ashes',
            imgSrc : 'img/cat0.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
          },
          {
            clickCount : 0,
            name : 'Molly',
            imgSrc : 'img/cat1.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
          },
          {
            clickCount : 0,
            name : 'Charlie',
            imgSrc : 'img/cat2.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
          },
          {
            clickCount : 0,
            name : 'Tigger',
            imgSrc : 'img/cat3.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
          },
          {
            clickCount : 0,
            name : 'Poppy',
            imgSrc : 'img/cat4.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
          }
        ]
        //clickTimes: [0,0,0,0,0],
        //catName: ["Ashes","Molly","Charlie","Tigger","Poppy"]
    };


    var octopus = {
        addClickTimes: function() {
          model.currentCat.clickCount++;
          catView.render();
        },

        getCats: function() {
            return model.cats;
        },

        getOneCat: function(index) {
            return model.cats[index];
        },

        getCurrentCat: function() {
            return model.currentCat;
        },

        // set the currently-selected cat to the object passed in
        setCurrentCat: function(cat) {
            model.currentCat = cat;
        },

        init: function() {
            // set our current cat to the first one in the list
            model.currentCat = model.cats[0];
            // tell our views to initialize
            catListView.init();
            catView.init();
        }
    };

// Two different view, one for cat name list, one for cat picture
    var catView = {
      init: function() {
        var picElem = $(".pic");
        var catNameElem = $("#cat-name");
        var catImgElem = $("#cat-img");
        var clickTimesElem = $("#click-times");

        catImgElem.click(function(e) {
          octopus.addClickTimes();
        });

        this.render();
      },

      render: function() {
        var currentCat = octopus.getCurrentCat();
        var catNameElem = $("#cat-name");
        var catImgElem = $("#cat-img");
        var clickTimesElem = $("#click-times");

        clickTimesElem.text(currentCat.clickCount);
        catNameElem.text(currentCat.name);
        catImgElem.attr( "src", currentCat.imgSrc);
      }
    };

    var catListView = {
      init: function() {
        this.render();
      },

      render: function() {
        var cats = octopus.getCats();
        var nameListElem = $('#name-list');
        nameListElem.html('');

        cats.forEach(function(e,i,arr) {
          nameListElem.append('<button>' + e.name + '</button>');
          $( "button" ).eq(i).click({ value: i},  function(elem) {
              var catCopy = octopus.getOneCat($( this ).index());
              octopus.setCurrentCat(catCopy);
              catView.render();
          });
        });
      }
    };

    octopus.init();
    
});
