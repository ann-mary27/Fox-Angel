const myModal = document.getElementById('modal')
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  myModal.focus();
});
//   body.addEventListener('shown.bs.modal', () => {
//   myModal.focus()
// })


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














// window.document.onkeydown = function(e) {
//   if (!e) {
//     e = event;
//   }
//   if (e.keyCode == 27) {
//     lightbox_close();
//   }
// }

// function lightbox_open() {
//   var lightBoxVideo = document.getElementById("VisaChipCardVideo");
//   window.scrollTo(0, 0);
//   document.getElementById('light').style.display = 'block';
//   document.getElementById('fade').style.display = 'block';
//   lightBoxVideo.play();
// }

// function lightbox_close() {
//   var lightBoxVideo = document.getElementById("VisaChipCardVideo");
//   document.getElementById('light').style.display = 'none';
//   document.getElementById('fade').style.display = 'none';
//   lightBoxVideo.pause();
// }

// gif-effect
const g1=document.querySelector('#g1');
const g2=document.querySelector('#g2');
const g3=document.querySelector('#g3');
const g4=document.querySelector('#g4');
const g5=document.querySelector('#g5');
const g6=document.querySelector('#g6');
const g_url=["./images/Icon/2.png","./images/Icon/4.png","./images/Icon/6.png","./images/Icon/8.png","./images/Icon/10.png","./images/Icon/12.png"];
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


  // Quotes

  ;(function(factory){
  
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
  
  })(function($){
    
    /*
     * We define Zippy as a variable of type ‘function’. 
     * Here, we use an anonymous function to ensure 
     * that the logic inside the function is executed immediately. 
     *
     */
    var Zippy = (function(element, settings){
      
      var instanceUid = 0;
      
      /*
       * The constructor function for Zippy
       *
       */
      function _Zippy(element, settings){
        this.defaults = {
          slideDuration: '3000',
          speed: 500,
          arrowRight: '.arrow-right',
          arrowLeft: '.arrow-left'
        };
        
        // We create a new property to hold our default settings after they
        // have been merged with user supplied settings
        this.settings = $.extend({},this,this.defaults,settings);
        
        // This object holds values that will change as the plugin operates
        this.initials = {
          currSlide : 0,
          $currSlide: null,
          totalSlides : false,
          csstransitions: false
        };
        
        // Attaches the properties of this.initials as direct properties of Zippy
        $.extend(this,this.initials);
        
        // Here we'll hold a reference to the DOM element passed in
        // by the $.each function when this plugin was instantiated
        this.$el = $(element);
        
        // Ensure that the value of 'this' always references Zippy
        this.changeSlide = $.proxy(this.changeSlide,this);
        
        // We'll call our initiator function to get things rolling!
        this.init();
        
        // A little bit of metadata about the instantiated object
        // This property will be incremented everytime a new Zippy carousel is created
       // It provides each carousel with a unique ID
        this.instanceUid = instanceUid++;
      }
      
      return _Zippy;
    
    })();
    
    /**
     * Called once per instance
     * Calls starter methods and associate the '.zippy-carousel' class
     * @params void
     * @returns void
     *
     */
     Zippy.prototype.init = function(){
      //Test to see if cssanimations are available
      this.csstransitionsTest();
      // Add a class so we can style our carousel
      this.$el.addClass('zippy-carousel');
      // Build out any DOM elements needed for the plugin to run
      // Eg, we'll create an indicator dot for every slide in the carousel
      this.build();
      // Eg. Let the user click next/prev arrows or indicator dots
      this.events();
      // Bind any events we'll need for the carousel to function
      this.activate();
      // Start the timer loop to control progression to the next slide
      this.initTimer();
    };
    
    /**
     * Appropriated out of Modernizr v2.8.3
     * Creates a new DOM element and tests existence of properties on it's
     * Style object to see if CSSTransitions are available
     * @params void
     * @returns void
     *
     */
    Zippy.prototype.csstransitionsTest = function(){
      var elem = document.createElement('modernizr');
      //A list of properties to test for
      var props = ["transition","WebkitTransition","MozTransition","OTransition","msTransition"];
      //Iterate through our new element's Style property to see if these properties exist
      for ( var i in props ) {
        var prop = props[i];
        var result = elem.style[prop] !== undefined ? prop : false;
        if (result){
          this.csstransitions = result;
          break;
        } 
      } 
    };
    
    /**
     * Add the CSSTransition duration to the DOM Object's Style property
     * We trigger this function just before we want the slides to animate
     * @params void
     * @returns void
     *
     */
    Zippy.prototype.addCSSDuration = function(){
      var _ = this;
      this.$el.find('.q-slide').each(function(){
        this.style[_.csstransitions+'Duration'] = _.settings.speed+'ms';
      });
    }
    
    /**
     * Remove the CSSTransition duration from the DOM Object's style property
     * We trigger this function just after the slides have animated
     * @params void
     * @returns void
     *
     */
    Zippy.prototype.removeCSSDuration = function(){
      var _ = this;
      this.$el.find('.q-slide').each(function(){
        this.style[_.csstransitions+'Duration'] = '';
      });
    }
    
    /**
     * Creates a list of indicators based on the amount of slides
     * @params void
     * @returns void
     *
     */ 
    Zippy.prototype.build = function(){
      var $indicators = this.$el.append('<ul class="indicators" >').find('.indicators');
      this.totalSlides = this.$el.find('.q-slide').length;
      for(var i = 0; i < this.totalSlides; i++) $indicators.append('<li data-index='+i+'>');
    };
    
    /**
     * Activates the first slide
     * Activates the first indicator
     * @params void
     * @returns void
     *
     */ 
    Zippy.prototype.activate = function(){
      this.$currSlide = this.$el.find('.q-slide').eq(0);
      this.$el.find('.indicators li').eq(0).addClass('active');
    };
    
    /**
     * Associate event handlers to events
     * For arrow events, we send the placement of the next slide to the handler
     * @params void
     * @returns void
     *
     */
    Zippy.prototype.events = function(){
      $('body')
        .on('click',this.settings.arrowRight,{direction:'right'},this.changeSlide)
        .on('click',this.settings.arrowLeft,{direction:'left'},this.changeSlide)
        .on('click','.indicators li',this.changeSlide);
    };
    
    /**
     * TIMER
     * Resets the timer
     * @params void
     * @returns void
     *
     */
    Zippy.prototype.clearTimer = function(){
      if (this.timer) clearInterval(this.timer);
    };
    
    /**
     * TIMER
     * Initialise the timer
     * @params void
     * @returns void
     *
     */
    Zippy.prototype.initTimer = function(){
      this.timer = setInterval(this.changeSlide, this.settings.slideDuration);
    };
    
    /**
     * TIMER
     * Start the timer
     * Reset the throttle to allow changeSlide to be executable
     * @params void
     * @returns void
     *
     */
    Zippy.prototype.startTimer = function(){
      this.initTimer();
      this.throttle = false;
    };
    
    /**
     * MAIN LOGIC HANDLER
     * Triggers a set of subfunctions to carry out the animation
     * @params	object	event
     * @returns void
     *
     */
    Zippy.prototype.changeSlide = function(e){
      //Ensure that animations are triggered one at a time
      if (this.throttle) return;
      this.throttle = true;
      
      //Stop the timer as the animation is getting carried out
      this.clearTimer();
      
      // Returns the animation direction (left or right)
      var direction = this._direction(e);
      
      // Selects the next slide
      var animate = this._next(e,direction);
      if (!animate) return;
      
      //Active the next slide to scroll into view
      var $nextSlide = this.$el.find('.q-slide').eq(this.currSlide).addClass(direction + ' active');
      
      if (!this.csstransitions){
        this._jsAnimation($nextSlide,direction);
      } else {
        this._cssAnimation($nextSlide,direction);
      }
    };
    
    /**
     * Returns the animation direction, right or left
     * @params	object	event
     * @returns strong	animation direction
     *
     */
    Zippy.prototype._direction = function(e){
      var direction;
      
      // Default to forward movement
      if (typeof e !== 'undefined'){
        direction = (typeof e.data === 'undefined' ? 'right' : e.data.direction);
      } else {
        direction = 'right';
      }
      return direction;
    };
    
    /**
     * Updates our plugin with the next slide number
     * @params	object	event
     * @params	string	animation direction
     * @returns boolean continue to animate?
     *
     */
    Zippy.prototype._next = function(e,direction){
      
      // If the event was triggered by a slide indicator, we store the data-index value of that indicator
      var index = (typeof e !== 'undefined' ? $(e.currentTarget).data('index') : undefined);
      
      //Logic for determining the next slide
      switch(true){
        //If the event was triggered by an indicator, we set the next slide based on index
         case( typeof index !== 'undefined'):
          if (this.currSlide == index){
            this.startTimer();
            return false;
          } 
          this.currSlide = index;
        break;
        case(direction == 'right' && this.currSlide < (this.totalSlides - 1)):
          this.currSlide++;
        break;
        case(direction == 'right'):
          this.currSlide = 0;
        break;
        case(direction == 'left' && this.currSlide === 0):
          this.currSlide = (this.totalSlides - 1);
        break;
        case(direction == 'left'):
          this.currSlide--;
        break;
      }
      return true;
    };
    
    /**
     * Executes the animation via CSS transitions
     * @params	object	Jquery object the next slide to slide into view
     * @params	string	animation direction
     * @returns void
     *
     */
    Zippy.prototype._cssAnimation = function($nextSlide,direction){
      //Init CSS transitions
      setTimeout(function(){
        this.$el.addClass('transition');
        this.addCSSDuration();
        this.$currSlide.addClass('shift-'+direction);
      }.bind(this),100);
      
      //CSS Animation Callback
      //After the animation has played out, remove CSS transitions
      //Remove unnecessary classes
      //Start timer
      setTimeout(function(){
        this.$el.removeClass('transition');
        this.removeCSSDuration();
        this.$currSlide.removeClass('active shift-left shift-right');
        this.$currSlide = $nextSlide.removeClass(direction);
        this._updateIndicators();
        this.startTimer();
      }.bind(this),100 + this.settings.speed);
    };
    
    /**
     * Executes the animation via JS transitions
     * @params	object	Jquery object the next slide to slide into view
     * @params	string	animation direction
     * @returns void
     *
     */
    Zippy.prototype._jsAnimation = function($nextSlide,direction){
      //Cache this reference for use inside animate functions
      var _ = this;
      
       // See CSS for explanation of .js-reset-left
      if(direction == 'right') _.$currSlide.addClass('js-reset-left');
      
       var animation = {};
      animation[direction] = '0%';
      
      var animationPrev = {};
      animationPrev[direction] = '100%';
      
      //Animation: Current slide
      this.$currSlide.animate(animationPrev,this.settings.speed);
      
      //Animation: Next slide
      $nextSlide.animate(animation,this.settings.speed,'swing',function(){
        //Get rid of any JS animation residue
        _.$currSlide.removeClass('active js-reset-left').attr('style','');
        //Cache the next slide after classes and inline styles have been removed
        _.$currSlide = $nextSlide.removeClass(direction).attr('style','');
        _._updateIndicators();
        _.startTimer();
      });
    };
    
    /**
     * Ensures the slide indicators are pointing to the currently active slide
     * @params	void
     * @returns	void
     *
     */
    Zippy.prototype._updateIndicators = function(){
      this.$el.find('.indicators li').removeClass('active').eq(this.currSlide).addClass('active');
    };
    
    /**
     * Initialize the plugin once for each DOM object passed to jQuery
     * @params	object	options object
     * @returns void
     *
     */
    $.fn.Zippy = function(options){
      
      return this.each(function(index,el){
        
        el.Zippy = new Zippy(el,options);
        
      });
      
    };
    
  
  });
  
  // Custom options for the carousel
  var args = {
    arrowRight : '.arrow-right', //A jQuery reference to the right arrow
    arrowLeft : '.arrow-left', //A jQuery reference to the left arrow
    speed : 1000, //The speed of the animation (milliseconds)
    slideDuration : 4000 //The amount of time between animations (milliseconds)
  };
  
  $('.q-carousel').Zippy(args);