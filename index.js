//pic-replace
const p1=document.querySelector('#pic1');
const p2=document.querySelector('#pic2');
const p3=document.querySelector('#pic3');
const p4=document.querySelector('#pic4');
const p_url=[p1.getAttribute('src'),p2.getAttribute('src'),p3.getAttribute('src'),p4.getAttribute('src')];


const r_url=['./images/r1.jpg',"./images/r2.jpg","./images/r3.jpg","./images/r4.jpg"]

p1.addEventListener('mouseover',()=>{
  p1.setAttribute('src',r_url[0]);
});

p2.addEventListener('mouseover',()=>{
  p2.setAttribute('src',r_url[1]);
});

p3.addEventListener('mouseover',()=>{
  p3.setAttribute('src',r_url[2]);
});

p4.addEventListener('mouseover',()=>{
  p4.setAttribute('src',r_url[3]);
});


p1.addEventListener('mouseout',()=>{
  p1.setAttribute('src',p_url[0]);
});

p2.addEventListener('mouseout',()=>{
  p2.setAttribute('src',p_url[1]);
});

p3.addEventListener('mouseout',()=>{
  p3.setAttribute('src',p_url[2]);

});

p4.addEventListener('mouseout',()=>{
  p4.setAttribute('src',p_url[3]);
});



// play video
window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}

// gif-effect
const g1=document.querySelector('#g1');
const g2=document.querySelector('#g2');
const g3=document.querySelector('#g3');
const g4=document.querySelector('#g4');
const g5=document.querySelector('#g5');
const g6=document.querySelector('#g6');
const g_url=["./images/g12.jpg","./images/g22.jpg","./images/g32.jpg","./images/g42.jpg","./images/g52.jpg","./images/g62.jpg"];
const gr_url=[g1.getAttribute('src'),g2.getAttribute('src'),g3.getAttribute('src'),g4.getAttribute('src'),g5.getAttribute('src'),g6.getAttribute('src')];

g1.addEventListener('mouseover',()=>{
  g1.setAttribute('src',g_url[0]);
});
g1.addEventListener('mouseout',()=>{
  g1.setAttribute('src',gr_url[0]);
});

g2.addEventListener('mouseover',()=>{
  g2.setAttribute('src',g_url[1]);
});
g2.addEventListener('mouseout',()=>{
  g2.setAttribute('src',gr_url[1]);
});

g3.addEventListener('mouseover',()=>{
  g3.setAttribute('src',g_url[2]);
});
g3.addEventListener('mouseout',()=>{
  g3.setAttribute('src',gr_url[2]);
});

g4.addEventListener('mouseover',()=>{
  g4.setAttribute('src',g_url[3]);
});
g4.addEventListener('mouseout',()=>{
  g4.setAttribute('src',gr_url[3]);
});

g5.addEventListener('mouseover',()=>{
  g5.setAttribute('src',g_url[4]);
});
g5.addEventListener('mouseout',()=>{
  g5.setAttribute('src',gr_url[4]);
});

g6.addEventListener('mouseover',()=>{
  g6.setAttribute('src',g_url[5]);
});
g6.addEventListener('mouseout',()=>{
  g6.setAttribute('src',gr_url[5]);
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

