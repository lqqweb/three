window.onload = function (){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        onInit: function(swiper){ 
			    swiperAnimateCache(swiper); 
			    swiperAnimate(swiper); 
			  }, 
			 
			  onSlideChangeEnd: function(swiper){ 
			    swiperAnimate(swiper); 
			    var change=document.getElementById("changeLine");
			if(swiper.activeIndex==3){
				change.style.display="block";
				change.style.animation="lin 5.5s linear 1";
			}
			else{
				change.style.animation="";
				change.style.display="none";
			}
			 
			  } 
    });

var music = document.getElementById('startMusic');
	music.play();
}


function doPlay(){
    var isExisted = $("#music").attr('class').indexOf("imgScroll");//是否旋转
    var imgState = document.getElementsByName('imgState');//获取img
    var music = document.getElementById('startMusic');//获取music
	if(isExisted > -1){
		$.each(imgState,function(index, el) {
			$(el).removeClass('imgScroll');//移除旋转
		});
		music.pause();
	}else{
		$.each(imgState,function(index, el) {
			$(el).addClass('imgScroll');//添加旋转
		});
		music.play();
	}


}