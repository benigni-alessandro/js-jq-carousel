$(document).ready(function(){
  scorrimento_dx()
  scorrimento_sx()
  // buttonslide()
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
// function buttonslide() {
//   var immagini = $('.images > img');
//   var bottone = $('i.fa-circle');
//   var bottoni = $('.nav i');
//   current_img = 0;
//   bottone.click(function() {
//     immagini.eq(current_img).removeClass('active');
//     bottoni.eq(current_img).removeClass('active');
//
//     immagini.eq(current_img).addClass('active');
//     bottoni.eq(current_img).addClass('active');
//   })
// }
