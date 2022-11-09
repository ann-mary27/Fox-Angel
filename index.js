//pic-replace
const p1=document.querySelector('#pic1');
const p2=document.querySelector('#pic2');
const p3=document.querySelector('#pic3');
const p4=document.querySelector('#pic4');
const p_url=[p1.getAttribute('src'),p2.getAttribute('src'),p3.getAttribute('src'),p4.getAttribute('src')];


const r_url=['./images/r1.jpg',"./images/r2.jpg","./images/r3.jpg","./images/r4.jpg"]

p1.addEventListener('mouseover',(e)=>{

  p1.setAttribute('src',r_url[0]);

});

p2.addEventListener('mouseover',(e)=>{

  p2.setAttribute('src',r_url[1]);

});

p3.addEventListener('mouseover',(e)=>{
 
  p3.setAttribute('src',r_url[2]);

});

p4.addEventListener('mouseover',(e)=>{

  p4.setAttribute('src',r_url[3]);

});


p1.addEventListener('mouseout',(e)=>{

  p1.setAttribute('src',p_url[0]);

});

p2.addEventListener('mouseout',(e)=>{

  p2.setAttribute('src',p_url[1]);

});

p3.addEventListener('mouseout',(e)=>{
 
  p3.setAttribute('src',p_url[2]);

});

p4.addEventListener('mouseout',(e)=>{

  p4.setAttribute('src',p_url[3]);

});



// slider 
$('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide-');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
      var animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }
    
    $('.next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
    
    $('.previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });
    
    $.each($slides, function(index) {
      var $button = $('<a class="slide_btn">&bull;</a>');
      
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
    
    advance();
  });

