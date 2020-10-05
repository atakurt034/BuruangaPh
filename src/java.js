$(document).ready(function (){ 
navHide(x);   
nav();
toggler();
topHomeSlide();
slideWords();
});
// $('.welcomePage').hide()
$('.mainPage').hide()
$('.explore').click(function(){
    $('.welcomePage').fadeTo(1000, 0, function(){
        $('.mainPage').fadeTo(1000, 1, function(){
          home();
        });
    });
})
    var x = window.matchMedia("(max-width: 1023px)")
    navHide(x) // Call listener function at run time
    x.addListener(navHide) // Attach listener function on state changes
function navHide(x) {
    if (x.matches) { // If media query matches
      $('.nav').hide();
      $('.menu-wrap').show()
      $('.navCont').css({justifyContent: 'left', height: '50px'})
      $('.msg').css({fontSize: '100%'})
    } else {
     $('.nav').show();
     $('navMenu').css({display: 'none'});
     $('.navCont').css({justifyContent: 'center', height: 'auto'})
     $('.menu-wrap').hide();
     $('.msg').css({fontSize: '200%'})
    }};
  

  function toggler(){
  $('input[class=toggler]').change(toggleMenu)
  function toggleMenu() {
        if ($('#toggle').prop('checked') == true){
        $('.navList').css({gridTemplateColumns: "auto", width: '100%'})
        $('.navCont').css({justifyContent: 'center', height: 'auto'})
        $('.nav').toggle()
        $('.menuWrd').text('');
      }else {
        $('.navList').css({gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr)", width: 'auto'})
        $('.navCont').css({justifyContent: 'center', height: '50px'})
        $('.nav').toggle()
        $('.menuWrd').text('MENU');      }
      
    }
    $('.menuWrd').on('click', function(){
        $('#toggle').prop('checked', true)
        toggleMenu()
    });
};
// nav Menu
function nav(){  
$('#TopDestinations, #aboutPage, #getPage, #homePage, #contactPage').hide()
$('.nav').click(function (){ 
  var nv = $('.nav').index(this);
switch(nv){
  case 0:
    home();
    break;
  case 1:
    td();
    break;
  case 2:
    about();
    break;
  case 3:
    get();
    break;
  case 4:
    contact()
    break;
}
 })

  $('.nav').click(function(){
      if ($('#toggle').prop('checked')){
          $('#toggle').prop('checked', false)
          $('.navList').css({gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr)", width: 'auto'})
          $('.navCont').css({justifyContent: 'center', height: '50px'})
          $('.nav').toggle()
          $('.menuWrd').text('MENU');
      }
  })

  $('.buruangaDef2Cont').hide()
  $('.buruangaWrd').click(function (){
      $('.buruangaDef2Cont').slideDown(400)
      $('.welcome, .explore').css({filter: 'blur(10px)'})
      $('.buruangaWrd, .buruangaDef1').fadeOut(200)
    })
  $('.close').click(function (){
    $('.buruangaDef2Cont').slideUp(400)
    $('.welcome, .explore').css({filter: 'blur(0)'})
    $('.buruangaWrd, .buruangaDef1').fadeIn(200)
  });
}
  // slide
  function home(){
    $('section:not(#homePage)').hide()
    $('.topHome, .slideWrapper').fadeTo(0,0).fadeTo(6000, 1)
    var div = $("#homePage").css({width: '100px',height: '100px',left: '45%',borderRadius: '50%'}).show()
    div.animate({top: '45%', width: '100px', opacity: '0.8'}, "slow");
    div.animate({top: '35%', width: '100px', opacity: '0.8'});
    div.animate({left: '0',width: '100%', opacity: '0.4'}, "slow");
    div.animate({top: '0',height: '100vh', opacity: '1',borderRadius: '0'}, "slow");
    $('.footer').css({display: 'none'})
    }
  function td(){
    $('section:not(#TopDestinations)').hide()
    $("#TopDestinations").css({height: '5px', width: '100px'})
    var div = $("#TopDestinations").show();
    div.animate({height: '5px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
    div.animate({width: '100%', opacity: '0.4'}, "slow");
    div.animate({height: '100vh', opacity: '1'}, "slow");
    $('.footer').css({fontWeight: '900',color: '#fff', background: 'transparent'}).show()
  }
  function about(){
    $('section:not(#aboutPage)').hide()
    var div = $("#aboutPage").css({height: '5px', width: '100vw'}).show();
    div.animate({height: '5px', opacity: '0.4'}, "slow");
    div.animate({height: '100vh', opacity: '1'}, "slow");
    $('.footer').css({color: '#fff', background: 'rgb(78, 77, 77)'}).show()
  }
  function get(){
    $('section:not(#getPage)').hide()
    $("#getPage").css({left: '50%', width: '90px', height: '5%'})
    var div = $("#getPage").show();
    div.animate({height: '100%', opacity: '0.4'}, "slow");
    div.animate({left: '0',width: '100%', opacity: '0.4'}, "slow");
    div.animate({height: '100vh', opacity: '1'}, "slow")
    $('.footer').css({color: '#fff', background: 'transparent'}).show()
  }
  function contact() {
    $('section:not(#contactPage)').hide()
    $("#contactPage").css({left: '50%', width: '10px', height: '1px'})
    var div = $("#contactPage").show();
    div.animate({height: '100%', opacity: '0.4'}, "slow");
    div.animate({left: '0',width: '100%', opacity: '0.4'}, "slow");
    div.animate({height: '100vh', opacity: '1'}, "slow")
    $('.footer').css({color: '#fff', background: '#000'}).show()
    }
// slider 2
$('.moreWrap, #moreClose').hide()
clickMore();
function clickMore() {  
    var num = 1;
    var wrap = $('.moreWrap')
    for (var i = 0; i < wrap.length; i++) {
      $(wrap[i]).addClass('a'+num+'H')
      num++;
  }
  $('.flip-box-back h1').each(function (){
    var s = $(this).data('head')
    var t = $(this).text()
    var y = $('<h1 id="'+s+'" class="tdDefHeadings"></h1>').prependTo('.'+s)
    $(y).text(t)
   })
  
  $('.moreBtn').click(function(){
  var $this = $(this).attr('data-id')
  var this2 = $(this).attr('data-img')
  var this3 = $('#'+this2).attr('src')
    $('#'+$this+'m').delay(1000).fadeIn(3000)
    $('#moreClose').show(2000)
    $('.flip-box').hide()
    $('#TopDestinations').fadeTo(0, 0).fadeTo(600, 1).css({background: 'url('+this3+')no-repeat center/cover'})
    $('#moreClose').click(function(){
      $('#'+$this+'m').fadeOut()
      $('#moreClose').hide()
      $('.flip-box').show(400)
    $('#TopDestinations').css({background: ''})
    }) })
}
$('.slideHead').click(td)
function topHomeSlide(){
$('.slide-container').slick({
  infinite: true,
  autoplay: true,
  prevArrow: '.slick-prev',
  nextArrow: '.slick-next',
  asNavFor: '.slide-words',
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
      }
    },]
})
  }
function slideWords(){
    $('.slide-words').slick({
      slidesToScroll: 4,
      fade: true,
      arrows: false,
      cssEase: 'linear',
      })}