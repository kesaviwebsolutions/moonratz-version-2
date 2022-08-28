// app.js
import $ from "jquery";

$(window).on('load', function(){
  $('body').removeClass('preload');
});

// mobile menu
$('#mtoggle').on("click", function(e) {
  checker();
});

function checker() {
  var checkBox = document.getElementById("menu-toggle");
  if (checkBox.checked == true){
    $('body').removeClass('noscroll');
    document.getElementById("menu-toggle").checked = true;
  } else {
    $('body').addClass('noscroll');
    document.getElementById("menu-toggle").checked = false;
  }
}

$('.key-nav').on("click", function(e) {
  document.getElementById("menu-toggle").checked = false;
  $('body').removeClass('noscroll');
});

// nft animation

var pause = false;
//save blocks
var block1 = $('.bg-block1');
//variable for counter
var k = 0;

//interval function works only when pause is false
setInterval(function () {
  if (!pause) {
    var $this1 = block1.eq(k);
    block1.removeClass('active').eq(k).addClass('active');
    $this1.addClass('active');
    //increase k every 1.5 sec
    k++;
    //if k more then number of blocks on page
    if (k >= block1.length) {
      //rewrite variable to start over
      k = 0;
    }
  }
  //every 1.5 sec
}, 200);

// moving stripes
$(window).on("load resize scroll", function() {
  $('#stripes').each(function() {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop;
    $(this)
      .find("#stripe-1 .bg-move")
      .css({ backgroundPosition: leftPosition });
    $(this)
      .find("#stripe-2 .bg-move")
      .css({ backgroundPosition: -leftPosition });
  });
});

// scrolling bar
function mediaSizeForNav() {
  var new_scroll_position = 0;
  var last_scroll_position;
  var navbar = document.getElementById('nav');

  window.addEventListener('scroll', function (e) {
    last_scroll_position = window.scrollY;

    if (new_scroll_position < last_scroll_position && last_scroll_position > 58) {
      navbar.classList.remove("slide-down");
      navbar.classList.add("slide-up");
    } else {
      navbar.classList.remove("slide-up");
      navbar.classList.add("slide-down");
    }

    new_scroll_position = last_scroll_position;
  });
}

mediaSizeForNav();
window.addEventListener('resize', mediaSizeForNav, false);

// submenu
$(window).click(function() {
  $("#submenu-toggle").prop('checked', false);
});

$('#options').click(function(event){
  event.stopPropagation();
});

// card navigation
$(function() {
  $('#cardsList article').on("mouseover", function(e){
    $('#cardsList article').removeClass('active');
    $(this).addClass('active');
  })
});