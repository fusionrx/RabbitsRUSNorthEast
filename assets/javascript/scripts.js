function calcMiddleHeight() {
     matcherColumn1 = document.getElementById('about-column-matcher1').clientHeight;
     matcherColumn2 = document.getElementById('about-column-matcher2').offsetTop;
     height = matcherColumn1 + matcherColumn2;
     document.getElementById('about-column').setAttribute("style","height:"+height+"px;overflow-y: auto;");
}

$(window).on("resize", function () {
     calcMiddleHeight();
})

$(document).ready(function(){
    calcMiddleHeight();
})

window.fbAsyncInit = function() {
    FB.init({
      appId            : '697194864766513',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v13.0'
    });

    var parameters = { access_token: 'EAAJ6GFRA7jEBAAgmZBZATOncOqtmirlJVPvBwDxosATSll3X9UQDzeQTuw5DiTXSq2cwz3NZAGAdL4lDumYPNLWTHbYdPkxv4jaiqtaygPYLk25HZB9ydVKk7IwfOYUC5psmAwnQ5TgsoiAZB67ZBKeZCN5hx8ZCZC4KELqpZB1ZCXgEUAvlqPMYHAediVeqXeHSDMpcKZCg4TRYQwZDZD' };
    FB.api('103292248998736/albums?fields=id,name', parameters, function(response) {
      for (var i=0; i<response.data.length; i++) {
        var album = response.data[i];
        if (album.name == 'Weekly Photos'){
          FB.api(album.id+'/photos', parameters, function(photos){
            if (photos && photos.data && photos.data.length){
              for (var j=0; j<photos.data.length; j++){
                var photo = photos.data[j];
                FB.api(photo.id +'?fields=picture', parameters, function(singlePhoto){
                    var image = document.createElement('img');
                    image.src = singlePhoto.picture;
                    image.style = "margin-top : 15px; margin-right: 15px;"
                    document.getElementById('GalleryContent').appendChild(image);
                });
              }
            }
          });
          break;
        }
      }
    });
};

