$(function() {

  // Europe Countries Slider of Home page

    $('.map_visited').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 8000,
        fade: true,
        cssEase: 'linear',
        autoplay: true
      });

  // Europe Background-image Slider of About page

    $('.contents_about').bgSwitcher({
        images: ['images/about/North_Europe-image.jpg','images/about/South_Europe-image.jpg','images/about/East_Europe-image.jpg','images/about/West-Europe-image.jpg'],
        interval: 8000,
        loop: true,
        effect: 'fade',
        durtion: 2000,
        easing: 'linear'
    });

  // Accordion of each Europe page's Description

    $('.show-hide').click(function() {
      $(this).next().slideToggle('slow',function() {
        if($(this).parent().height() > 17) {
          $(this).prev().text('[Hide]');
        }
        else {
          $(this).prev().text('[Show]');
        }
      });
    });

  // Gradual loading image function of each Europe page

    $('img.lazy').lazyload(
      {
        threshold: 200 ,
        effect: "fadeIn",
        effect_speed: 1500
      }
    );

  // Modal window displaying of each Europe page

    $('.eu-wrapper').click(function() {

      var imgSrc = $(this).find('img').attr('src');
      var title = $(this).next().find('.e-title');
      var date = $(this).next().find('.e-date');
      var place = $(this).next().find('.e-place');
      var placeURL = place.attr('href');
      var titleText = 'TITLE: ' + title.text();
      var dateText = 'DATE: ' + date.text();
      var placeText = place.text();

      $('.modal-title').text(titleText);
      $('#modal-img').attr('src', imgSrc);
      $('.modal-date').text(dateText);
      $('.modal-place').text(placeText);
      $('.modal-place').attr('href', placeURL);

      $('.modal').css('display', 'block');

    });

  // Modal window displaying of About page

    $('.imgAboutContents').click(function() {

      var imgSrc = $(this).find('img').attr('src');
      var title = $(this).find('p');
      var description = $(this).parent().next();
      var titleText = title.text();
      var descriptionText = description.text();

      $('.modal-title').text(titleText);
      $('#modal-img').attr('src', imgSrc);
      $('.modal-description').text(descriptionText);

      $('.modal').css('display', 'block');
    });

  // Modal window closing of each Europe page and About page in case of pressing close button

    $('.close').click(function() {
      $('.modal').css('display', 'none');
    });

  // Modal window closing of each Europe page and About page in case of pressing outside area of modal window
  
    $(document).click(function(event){
      var target = $(event.target);
      if(target.hasClass('modal')) {
          target.css('display', 'none');
      }
    });
    
});
