$(document).ready(function(){
  scorrimento_dx();
  scorrimento_sx();
  keyboard();
  buttonslide()
});
function scorrimento_dx() {
  var move_right = $('i.fa-angle-right');
  var immagini = $('.images > img');
  var bottoni = $('.nav i');
  current_img = 0;
  move_right.click(function(){
	  immagini.eq(current_img).removeClass('active');
		bottoni.eq(current_img).removeClass('active');
		if(current_img < 3){
      current_img++;
    } else {
      current_img = 0;
    }
    immagini.eq(current_img).addClass('active');
    bottoni.eq(current_img).addClass('active');
  })
}
function scorrimento_sx() {
  var move_left = $('i.fa-angle-left');
  var immagini = $('.images > img');
  var bottoni = $('.nav i');
  current_img = 0;
  move_left.click(function(){
	  immagini.eq(current_img).removeClass('active');
		bottoni.eq(current_img).removeClass('active');
		if(current_img > 0){
      current_img--;
    } else {
      current_img=3;
    }
    immagini.eq(current_img).addClass('active');
    bottoni.eq(current_img).addClass('active');
  });
}
function keyboard() {
  $(document).keydown(function (e) {
    if (e.which == 39) {
      scorrimento_dx();
      console.log('OK');
    }
    if (e.which == 37) {
      scorrimento_sx();
      console.log('ok2');
    }
  })
  $(document).keypress(function (e) {
    if (e.keyCode == 39) {
      scorrimento_dx();
      console.log('OK');
    }
    if (e.keyCode == 37) {
      scorrimento_sx();
      console.log('ok2');
    }
  })
}

function buttonslide() {
  var immagini = $('.images > img');
  var bottone = $('.nav i');
  bottone.click(function() {
    bottone.removeClass('active');
    immagini.removeClass('active');
    $(this).addClass('active');
    if (bottone.eq(3).hasClass('active')) {
      immagini.eq(3).addClass('active');
    }
    if (bottone.eq(2).hasClass('active')) {
      immagini.eq(2).addClass('active');
    }
    if (bottone.eq(1).hasClass('active')) {
      immagini.eq(1).addClass('active');
    }
    if (bottone.eq(0).hasClass('active')) {
      immagini.eq(0).addClass('active');
    }
  })
}
