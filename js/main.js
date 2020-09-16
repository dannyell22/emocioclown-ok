 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
		margin:0,
		autoplayTimeout: 8000,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);

// NAVBAR


/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';
  
	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
	  /**
	   * Reference to the core.
	   * @protected
	   * @type {Owl}
	   */
	  this._core = carousel;
  
	  /**
	   * Indicates whether the plugin is initialized or not.
	   * @protected
	   * @type {Boolean}
	   */
	  this._initialized = false;
  
	  /**
	   * The current paging indexes.
	   * @protected
	   * @type {Array}
	   */
	  this._pages = [];
  
	  /**
	   * All DOM elements of the user interface.
	   * @protected
	   * @type {Object}
	   */
	  this._controls = {};
  
	  /**
	   * Markup for an indicator.
	   * @protected
	   * @type {Array.<String>}
	   */
	  this._templates = [];
  
	  /**
	   * The carousel element.
	   * @type {jQuery}
	   */
	  this.$element = this._core.$element;
  
	  /**
	   * Overridden methods of the carousel.
	   * @protected
	   * @type {Object}
	   */
	  this._overrides = {
		next: this._core.next,
		prev: this._core.prev,
		to: this._core.to
	  };
  
	  /**
	   * All event handlers.
	   * @protected
	   * @type {Object}
	   */
	  this._handlers = {
		'prepared.owl.carousel': $.proxy(function(e) {
		  if (e.namespace && this._core.settings.dotsData) {
			this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
			  $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
		  }
		}, this),
		'added.owl.carousel': $.proxy(function(e) {
		  if (e.namespace && this._core.settings.dotsData) {
			this._templates.splice(e.position, 0, this._templates.pop());
		  }
		}, this),
		'remove.owl.carousel': $.proxy(function(e) {
		  if (e.namespace && this._core.settings.dotsData) {
			this._templates.splice(e.position, 1);
		  }
		}, this),
		'changed.owl.carousel': $.proxy(function(e) {
		  if (e.namespace && e.property.name == 'position') {
			this.draw();
		  }
		}, this),
		'initialized.owl.carousel': $.proxy(function(e) {
		  if (e.namespace && !this._initialized) {
			this._core.trigger('initialize', null, 'navigation');
			this.initialize();
			this.update();
			this.draw();
			this._initialized = true;
			this._core.trigger('initialized', null, 'navigation');
		  }
		}, this),
		'refreshed.owl.carousel': $.proxy(function(e) {
		  if (e.namespace && this._initialized) {
			this._core.trigger('refresh', null, 'navigation');
			this.update();
			this.draw();
			this._core.trigger('refreshed', null, 'navigation');
		  }
		}, this)
	  };
  
	  // set default options
	  this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
  
	  // register event handlers
	  this.$element.on(this._handlers);
	};
  
	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
	  nav: false,
	  navText: [ 'prev', 'next' ],
	  navSpeed: false,
	  navElement: 'div',
	  navContainer: false,
	  navContainerClass: 'owl-nav',
	  navClass: [ 'owl-prev', 'owl-next' ],
	  slideBy: 1,
	  dotClass: 'owl-dot',
	  dotsClass: 'owl-dots',
	  dots: true,
	  dotsEach: false,
	  dotsData: false,
	  dotsSpeed: false,
	  dotsContainer: false
	};
  
	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
	  var override,
		settings = this._core.settings;
  
	  // create DOM structure for relative navigation
	  this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
		: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
  
	  this._controls.$previous = $('<' + settings.navElement + '>')
		.addClass(settings.navClass[0])
		.html(settings.navText[0])
		.prependTo(this._controls.$relative)
		.on('click', $.proxy(function(e) {
		  this.prev(settings.navSpeed);
		}, this));
	  this._controls.$next = $('<' + settings.navElement + '>')
		.addClass(settings.navClass[1])
		.html(settings.navText[1])
		.appendTo(this._controls.$relative)
		.on('click', $.proxy(function(e) {
		  this.next(settings.navSpeed);
		}, this));
  
	  // create DOM structure for absolute navigation
	  if (!settings.dotsData) {
		this._templates = [ $('<div>')
		  .addClass(settings.dotClass)
		  .append($('<span>'))
		  .prop('outerHTML') ];
	  }
  
	  this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
		: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
  
	  this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
		var index = $(e.target).parent().is(this._controls.$absolute)
		  ? $(e.target).index() : $(e.target).parent().index();
  
		e.preventDefault();
  
		this.to(index, settings.dotsSpeed);
	  }, this));
  
	  // override public methods of the carousel
	  for (override in this._overrides) {
		this._core[override] = $.proxy(this[override], this);
	  }
	};
  
	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
	  var handler, control, property, override;
  
	  for (handler in this._handlers) {
		this.$element.off(handler, this._handlers[handler]);
	  }
	  for (control in this._controls) {
		this._controls[control].remove();
	  }
	  for (override in this.overides) {
		this._core[override] = this._overrides[override];
	  }
	  for (property in Object.getOwnPropertyNames(this)) {
		typeof this[property] != 'function' && (this[property] = null);
	  }
	};
  
	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
	  var i, j, k,
		lower = this._core.clones().length / 2,
		upper = lower + this._core.items().length,
		maximum = this._core.maximum(true),
		settings = this._core.settings,
		size = settings.center || settings.autoWidth || settings.dotsData
		  ? 1 : settings.dotsEach || settings.items;
  
	  if (settings.slideBy !== 'page') {
		settings.slideBy = Math.min(settings.slideBy, settings.items);
	  }
  
	  if (settings.dots || settings.slideBy == 'page') {
		this._pages = [];
  
		for (i = lower, j = 0, k = 0; i < upper; i++) {
		  if (j >= size || j === 0) {
			this._pages.push({
			  start: Math.min(maximum, i - lower),
			  end: i - lower + size - 1
			});
			if (Math.min(maximum, i - lower) === maximum) {
			  break;
			}
			j = 0, ++k;
		  }
		  j += this._core.mergers(this._core.relative(i));
		}
	  }
	};
  
	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
	  var difference,
		settings = this._core.settings,
		disabled = this._core.items().length <= settings.items,
		index = this._core.relative(this._core.current()),
		loop = settings.loop || settings.rewind;
  
	  this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
  
	  if (settings.nav) {
		this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
		this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
	  }
  
	  this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
  
	  if (settings.dots) {
		difference = this._pages.length - this._controls.$absolute.children().length;
  
		if (settings.dotsData && difference !== 0) {
		  this._controls.$absolute.html(this._templates.join(''));
		} else if (difference > 0) {
		  this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
		} else if (difference < 0) {
		  this._controls.$absolute.children().slice(difference).remove();
		}
  
		this._controls.$absolute.find('.active').removeClass('active');
		this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
	  }
	};
  
	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
	  var settings = this._core.settings;
  
	  event.page = {
		index: $.inArray(this.current(), this._pages),
		count: this._pages.length,
		size: settings && (settings.center || settings.autoWidth || settings.dotsData
		  ? 1 : settings.dotsEach || settings.items)
	  };
	};
  
	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
	  var current = this._core.relative(this._core.current());
	  return $.grep(this._pages, $.proxy(function(page, index) {
		return page.start <= current && page.end >= current;
	  }, this)).pop();
	};
  
	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
	  var position, length,
		settings = this._core.settings;
  
	  if (settings.slideBy == 'page') {
		position = $.inArray(this.current(), this._pages);
		length = this._pages.length;
		successor ? ++position : --position;
		position = this._pages[((position % length) + length) % length].start;
	  } else {
		position = this._core.relative(this._core.current());
		length = this._core.items().length;
		successor ? position += settings.slideBy : position -= settings.slideBy;
	  }
  
	  return position;
	};
  
	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
	  $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};
  
	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
	  $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};
  
	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
	  var length;
  
	  if (!standard && this._pages.length) {
		length = this._pages.length;
		$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
	  } else {
		$.proxy(this._overrides.to, this._core)(position, speed);
	  }
	};
  
	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Hash Plugin
   * @version 2.1.0
   * @author Artus Kolanowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
	'use strict';
  
	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
	  /**
	   * Reference to the core.
	   * @protected
	   * @type {Owl}
	   */
	  this._core = carousel;
  
	  /**
	   * Hash index for the items.
	   * @protected
	   * @type {Object}
	   */
	  this._hashes = {};
  
	  /**
	   * The carousel element.
	   * @type {jQuery}
	   */
	  this.$element = this._core.$element;
  
	  /**
	   * All event handlers.
	   * @protected
	   * @type {Object}
	   */
	  this._handlers = {
		'initialized.owl.carousel': $.proxy(function(e) {
		  if (e.namespace && this._core.settings.startPosition === 'URLHash') {
			$(window).trigger('hashchange.owl.navigation');
		  }
		}, this),
		'prepared.owl.carousel': $.proxy(function(e) {
		  if (e.namespace) {
			var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
  
			if (!hash) {
			  return;
			}
  
			this._hashes[hash] = e.content;
		  }
		}, this),
		'changed.owl.carousel': $.proxy(function(e) {
		  if (e.namespace && e.property.name === 'position') {
			var current = this._core.items(this._core.relative(this._core.current())),
			  hash = $.map(this._hashes, function(item, hash) {
				return item === current ? hash : null;
			  }).join();
  
			if (!hash || window.location.hash.slice(1) === hash) {
			  return;
			}
  
			window.location.hash = hash;
		  }
		}, this)
	  };
  
	  // set default options
	  this._core.options = $.extend({}, Hash.Defaults, this._core.options);
  
	  // register the event handlers
	  this.$element.on(this._handlers);
  
	  // register event listener for hash navigation
	  $(window).on('hashchange.owl.navigation', $.proxy(function(e) {
		var hash = window.location.hash.substring(1),
		  items = this._core.$stage.children(),
		  position = this._hashes[hash] && items.index(this._hashes[hash]);
  
		if (position === undefined || position === this._core.current()) {
		  return;
		}
  
		this._core.to(this._core.relative(position), false, true);
	  }, this));
	};
  
	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
	  URLhashListener: false
	};
  
	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
	  var handler, property;
  
	  $(window).off('hashchange.owl.navigation');
  
	  for (handler in this._handlers) {
		this._core.$element.off(handler, this._handlers[handler]);
	  }
	  for (property in Object.getOwnPropertyNames(this)) {
		typeof this[property] != 'function' && (this[property] = null);
	  }
	};
  
	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Support Plugin
   *
   * @version 2.1.0
   * @author Vivid Planet Software GmbH
   * @author Artus Kolanowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
  
	var style = $('<support>').get(0).style,
	  prefixes = 'Webkit Moz O ms'.split(' '),
	  events = {
		transition: {
		  end: {
			WebkitTransition: 'webkitTransitionEnd',
			MozTransition: 'transitionend',
			OTransition: 'oTransitionEnd',
			transition: 'transitionend'
		  }
		},
		animation: {
		  end: {
			WebkitAnimation: 'webkitAnimationEnd',
			MozAnimation: 'animationend',
			OAnimation: 'oAnimationEnd',
			animation: 'animationend'
		  }
		}
	  },
	  tests = {
		csstransforms: function() {
		  return !!test('transform');
		},
		csstransforms3d: function() {
		  return !!test('perspective');
		},
		csstransitions: function() {
		  return !!test('transition');
		},
		cssanimations: function() {
		  return !!test('animation');
		}
	  };
  
	function test(property, prefixed) {
	  var result = false,
		upper = property.charAt(0).toUpperCase() + property.slice(1);
  
	  $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
		if (style[property] !== undefined) {
		  result = prefixed ? property : true;
		  return false;
		}
	  });
  
	  return result;
	}
  
	function prefixed(property) {
	  return test(property, true);
	}
  
	if (tests.csstransitions()) {
	  /* jshint -W053 */
	  $.support.transition = new String(prefixed('transition'))
	  $.support.transition.end = events.transition.end[ $.support.transition ];
	}
  
	if (tests.cssanimations()) {
	  /* jshint -W053 */
	  $.support.animation = new String(prefixed('animation'))
	  $.support.animation.end = events.animation.end[ $.support.animation ];
	}
  
	if (tests.csstransforms()) {
	  /* jshint -W053 */
	  $.support.transform = new String(prefixed('transform'));
	  $.support.transform3d = tests.csstransforms3d();
	}
  
  })(window.Zepto || window.jQuery, window, document);
  
  var menu = document.querySelector('.nav__list');
  var burger = document.querySelector('.burger');
  var doc = $(document);
  var l = $('.scrolly');
  var panel = $('.panel');
  var vh = $(window).height();
  
  var openMenu = function() {
	burger.classList.toggle('burger--active');
	menu.classList.toggle('nav__list--active');
  };
  
  // reveal content of first panel by default
  panel.eq(0).find('.panel__content').addClass('panel__content--active');
  
  var scrollFx = function() {
	var ds = doc.scrollTop();
	var of = vh / 4;
	
	// if the panel is in the viewport, reveal the content, if not, hide it.
	for (var i = 0; i < panel.length; i++) {
	  if (panel.eq(i).offset().top < ds+of) {
	   panel
		 .eq(i)
		 .find('.panel__content')
		 .addClass('panel__content--active');
	  } else {
		panel
		  .eq(i)
		  .find('.panel__content')
		  .removeClass('panel__content--active')
	  }
	}
  };
  
  var scrolly = function(e) {
	e.preventDefault();
	var target = this.hash;
	var $target = $(target);
  
	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 300, 'swing', function () {
		window.location.hash = target;
	});
  }
  
  var init = function() {
	burger.addEventListener('click', openMenu, false);
	window.addEventListener('scroll', scrollFx, false);
	window.addEventListener('load', scrollFx, false);
	$('a[href^="#"]').on('click',scrolly);
  };
  
  doc.on('ready', init);
  
  
  
  /*!
   * Lightbox v2.9.0
   * by Lokesh Dhakar
   *
   * More info:
   * http://lokeshdhakar.com/projects/lightbox2/
   *
   * Copyright 2007, 2015 Lokesh Dhakar
   * Released under the MIT license
   * https://github.com/lokesh/lightbox2/blob/master/LICENSE
   */
  
  // Uses Node, AMD or browser globals to create a module.
  (function (root, factory) {
	  if (typeof define === 'function' && define.amd) {
		  // AMD. Register as an anonymous module.
		  define(['jquery'], factory);
	  } else if (typeof exports === 'object') {
		  // Node. Does not work with strict CommonJS, but
		  // only CommonJS-like environments that support module.exports,
		  // like Node.
		  module.exports = factory(require('jquery'));
	  } else {
		  // Browser globals (root is window)
		  root.lightbox = factory(root.jQuery);
	  }
  }(this, function ($) {
  
	function Lightbox(options) {
	  this.album = [];
	  this.currentImageIndex = void 0;
	  this.init();
  
	  // options
	  this.options = $.extend({}, this.constructor.defaults);
	  this.option(options);
	}
  
	// Descriptions of all options available on the demo site:
	// http://lokeshdhakar.com/projects/lightbox2/index.html#options
	Lightbox.defaults = {
	  albumLabel: 'Image %1 of %2',
	  alwaysShowNavOnTouchDevices: false,
	  fadeDuration: 600,
	  fitImagesInViewport: true,
	  imageFadeDuration: 600,
	  // maxWidth: 800,
	  // maxHeight: 600,
	  positionFromTop: 50,
	  resizeDuration: 700,
	  showImageNumberLabel: true,
	  wrapAround: false,
	  disableScrolling: false,
	  /*
	  Sanitize Title
	  If the caption data is trusted, for example you are hardcoding it in, then leave this to false.
	  This will free you to add html tags, such as links, in the caption.
  
	  If the caption data is user submitted or from some other untrusted source, then set this to true
	  to prevent xss and other injection attacks.
	   */
	  sanitizeTitle: false
	};
  
	Lightbox.prototype.option = function(options) {
	  $.extend(this.options, options);
	};
  
	Lightbox.prototype.imageCountLabel = function(currentImageNum, totalImages) {
	  return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);
	};
  
	Lightbox.prototype.init = function() {
	  var self = this;
	  // Both enable and build methods require the body tag to be in the DOM.
	  $(document).ready(function() {
		self.enable();
		self.build();
	  });
	};
  
	// Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
	// that contain 'lightbox'. When these are clicked, start lightbox.
	Lightbox.prototype.enable = function() {
	  var self = this;
	  $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function(event) {
		self.start($(event.currentTarget));
		return false;
	  });
	};
  
	// Build html for the lightbox and the overlay.
	// Attach event handlers to the new DOM elements. click click click
	Lightbox.prototype.build = function() {
	  var self = this;
	  $('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));
  
	  // Cache jQuery objects
	  this.$lightbox       = $('#lightbox');
	  this.$overlay        = $('#lightboxOverlay');
	  this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
	  this.$container      = this.$lightbox.find('.lb-container');
	  this.$image          = this.$lightbox.find('.lb-image');
	  this.$nav            = this.$lightbox.find('.lb-nav');
  
	  // Store css values for future lookup
	  this.containerPadding = {
		top: parseInt(this.$container.css('padding-top'), 10),
		right: parseInt(this.$container.css('padding-right'), 10),
		bottom: parseInt(this.$container.css('padding-bottom'), 10),
		left: parseInt(this.$container.css('padding-left'), 10)
	  };
  
	  this.imageBorderWidth = {
		top: parseInt(this.$image.css('border-top-width'), 10),
		right: parseInt(this.$image.css('border-right-width'), 10),
		bottom: parseInt(this.$image.css('border-bottom-width'), 10),
		left: parseInt(this.$image.css('border-left-width'), 10)
	  };
  
	  // Attach event handlers to the newly minted DOM elements
	  this.$overlay.hide().on('click', function() {
		self.end();
		return false;
	  });
  
	  this.$lightbox.hide().on('click', function(event) {
		if ($(event.target).attr('id') === 'lightbox') {
		  self.end();
		}
		return false;
	  });
  
	  this.$outerContainer.on('click', function(event) {
		if ($(event.target).attr('id') === 'lightbox') {
		  self.end();
		}
		return false;
	  });
  
	  this.$lightbox.find('.lb-prev').on('click', function() {
		if (self.currentImageIndex === 0) {
		  self.changeImage(self.album.length - 1);
		} else {
		  self.changeImage(self.currentImageIndex - 1);
		}
		return false;
	  });
  
	  this.$lightbox.find('.lb-next').on('click', function() {
		if (self.currentImageIndex === self.album.length - 1) {
		  self.changeImage(0);
		} else {
		  self.changeImage(self.currentImageIndex + 1);
		}
		return false;
	  });
  
	  /*
		Show context menu for image on right-click
  
		There is a div containing the navigation that spans the entire image and lives above of it. If
		you right-click, you are right clicking this div and not the image. This prevents users from
		saving the image or using other context menu actions with the image.
  
		To fix this, when we detect the right mouse button is pressed down, but not yet clicked, we
		set pointer-events to none on the nav div. This is so that the upcoming right-click event on
		the next mouseup will bubble down to the image. Once the right-click/contextmenu event occurs
		we set the pointer events back to auto for the nav div so it can capture hover and left-click
		events as usual.
	   */
	  this.$nav.on('mousedown', function(event) {
		if (event.which === 3) {
		  self.$nav.css('pointer-events', 'none');
  
		  self.$lightbox.one('contextmenu', function() {
			setTimeout(function() {
				this.$nav.css('pointer-events', 'auto');
			}.bind(self), 0);
		  });
		}
	  });
  
  
	  this.$lightbox.find('.lb-loader, .lb-close').on('click', function() {
		self.end();
		return false;
	  });
	};
  
	// Show overlay and lightbox. If the image is part of a set, add siblings to album array.
	Lightbox.prototype.start = function($link) {
	  var self    = this;
	  var $window = $(window);
  
	  $window.on('resize', $.proxy(this.sizeOverlay, this));
  
	  $('select, object, embed').css({
		visibility: 'hidden'
	  });
  
	  this.sizeOverlay();
  
	  this.album = [];
	  var imageNumber = 0;
  
	  function addToAlbum($link) {
		self.album.push({
		  link: $link.attr('href'),
		  title: $link.attr('data-title') || $link.attr('title')
		});
	  }
  
	  // Support both data-lightbox attribute and rel attribute implementations
	  var dataLightboxValue = $link.attr('data-lightbox');
	  var $links;
  
	  if (dataLightboxValue) {
		$links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]');
		for (var i = 0; i < $links.length; i = ++i) {
		  addToAlbum($($links[i]));
		  if ($links[i] === $link[0]) {
			imageNumber = i;
		  }
		}
	  } else {
		if ($link.attr('rel') === 'lightbox') {
		  // If image is not part of a set
		  addToAlbum($link);
		} else {
		  // If image is part of a set
		  $links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]');
		  for (var j = 0; j < $links.length; j = ++j) {
			addToAlbum($($links[j]));
			if ($links[j] === $link[0]) {
			  imageNumber = j;
			}
		  }
		}
	  }
  
	  // Position Lightbox
	  var top  = $window.scrollTop() + this.options.positionFromTop;
	  var left = $window.scrollLeft();
	  this.$lightbox.css({
		top: top + 'px',
		left: left + 'px'
	  }).fadeIn(this.options.fadeDuration);
  
	  // Disable scrolling of the page while open
	  if (this.options.disableScrolling) {
		$('body').addClass('lb-disable-scrolling');
	  }
  
	  this.changeImage(imageNumber);
	};
  
	// Hide most UI elements in preparation for the animated resizing of the lightbox.
	Lightbox.prototype.changeImage = function(imageNumber) {
	  var self = this;
  
	  this.disableKeyboardNav();
	  var $image = this.$lightbox.find('.lb-image');
  
	  this.$overlay.fadeIn(this.options.fadeDuration);
  
	  $('.lb-loader').fadeIn('slow');
	  this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();
  
	  this.$outerContainer.addClass('animating');
  
	  // When image to show is preloaded, we send the width and height to sizeContainer()
	  var preloader = new Image();
	  preloader.onload = function() {
		var $preloader;
		var imageHeight;
		var imageWidth;
		var maxImageHeight;
		var maxImageWidth;
		var windowHeight;
		var windowWidth;
  
		$image.attr('src', self.album[imageNumber].link);
  
		$preloader = $(preloader);
  
		$image.width(preloader.width);
		$image.height(preloader.height);
  
		if (self.options.fitImagesInViewport) {
		  // Fit image inside the viewport.
		  // Take into account the border around the image and an additional 10px gutter on each side.
  
		  windowWidth    = $(window).width();
		  windowHeight   = $(window).height();
		  maxImageWidth  = windowWidth - self.containerPadding.left - self.containerPadding.right - self.imageBorderWidth.left - self.imageBorderWidth.right - 20;
		  maxImageHeight = windowHeight - self.containerPadding.top - self.containerPadding.bottom - self.imageBorderWidth.top - self.imageBorderWidth.bottom - 120;
  
		  // Check if image size is larger then maxWidth|maxHeight in settings
		  if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {
			maxImageWidth = self.options.maxWidth;
		  }
		  if (self.options.maxHeight && self.options.maxHeight < maxImageWidth) {
			maxImageHeight = self.options.maxHeight;
		  }
  
		  // Is there a fitting issue?
		  if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) {
			if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) {
			  imageWidth  = maxImageWidth;
			  imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
			  $image.width(imageWidth);
			  $image.height(imageHeight);
			} else {
			  imageHeight = maxImageHeight;
			  imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
			  $image.width(imageWidth);
			  $image.height(imageHeight);
			}
		  }
		}
		self.sizeContainer($image.width(), $image.height());
	  };
  
	  preloader.src          = this.album[imageNumber].link;
	  this.currentImageIndex = imageNumber;
	};
  
	// Stretch overlay to fit the viewport
	Lightbox.prototype.sizeOverlay = function() {
	  this.$overlay
		.width($(document).width())
		.height($(document).height());
	};
  
	// Animate the size of the lightbox to fit the image we are showing
	Lightbox.prototype.sizeContainer = function(imageWidth, imageHeight) {
	  var self = this;
  
	  var oldWidth  = this.$outerContainer.outerWidth();
	  var oldHeight = this.$outerContainer.outerHeight();
	  var newWidth  = imageWidth + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right;
	  var newHeight = imageHeight + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;
  
	  function postResize() {
		self.$lightbox.find('.lb-dataContainer').width(newWidth);
		self.$lightbox.find('.lb-prevLink').height(newHeight);
		self.$lightbox.find('.lb-nextLink').height(newHeight);
		self.showImage();
	  }
  
	  if (oldWidth !== newWidth || oldHeight !== newHeight) {
		this.$outerContainer.animate({
		  width: newWidth,
		  height: newHeight
		}, this.options.resizeDuration, 'swing', function() {
		  postResize();
		});
	  } else {
		postResize();
	  }
	};
  
	// Display the image and its details and begin preload neighboring images.
	Lightbox.prototype.showImage = function() {
	  this.$lightbox.find('.lb-loader').stop(true).hide();
	  this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration);
  
	  this.updateNav();
	  this.updateDetails();
	  this.preloadNeighboringImages();
	  this.enableKeyboardNav();
	};
  
	// Display previous and next navigation if appropriate.
	Lightbox.prototype.updateNav = function() {
	  // Check to see if the browser supports touch events. If so, we take the conservative approach
	  // and assume that mouse hover events are not supported and always show prev/next navigation
	  // arrows in image sets.
	  var alwaysShowNav = false;
	  try {
		document.createEvent('TouchEvent');
		alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false;
	  } catch (e) {}
  
	  this.$lightbox.find('.lb-nav').show();
  
	  if (this.album.length > 1) {
		if (this.options.wrapAround) {
		  if (alwaysShowNav) {
			this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
		  }
		  this.$lightbox.find('.lb-prev, .lb-next').show();
		} else {
		  if (this.currentImageIndex > 0) {
			this.$lightbox.find('.lb-prev').show();
			if (alwaysShowNav) {
			  this.$lightbox.find('.lb-prev').css('opacity', '1');
			}
		  }
		  if (this.currentImageIndex < this.album.length - 1) {
			this.$lightbox.find('.lb-next').show();
			if (alwaysShowNav) {
			  this.$lightbox.find('.lb-next').css('opacity', '1');
			}
		  }
		}
	  }
	};
  
	// Display caption, image number, and closing button.
	Lightbox.prototype.updateDetails = function() {
	  var self = this;
  
	  // Enable anchor clicks in the injected caption html.
	  // Thanks Nate Wright for the fix. @https://github.com/NateWr
	  if (typeof this.album[this.currentImageIndex].title !== 'undefined' &&
		this.album[this.currentImageIndex].title !== '') {
		var $caption = this.$lightbox.find('.lb-caption');
		if (this.options.sanitizeTitle) {
		  $caption.text(this.album[this.currentImageIndex].title);
		} else {
		  $caption.html(this.album[this.currentImageIndex].title);
		}
		$caption.fadeIn('fast')
		  .find('a').on('click', function(event) {
			if ($(this).attr('target') !== undefined) {
			  window.open($(this).attr('href'), $(this).attr('target'));
			} else {
			  location.href = $(this).attr('href');
			}
		  });
	  }
  
	  if (this.album.length > 1 && this.options.showImageNumberLabel) {
		var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
		this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast');
	  } else {
		this.$lightbox.find('.lb-number').hide();
	  }
  
	  this.$outerContainer.removeClass('animating');
  
	  this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function() {
		return self.sizeOverlay();
	  });
	};
  
	// Preload previous and next images in set.
	Lightbox.prototype.preloadNeighboringImages = function() {
	  if (this.album.length > this.currentImageIndex + 1) {
		var preloadNext = new Image();
		preloadNext.src = this.album[this.currentImageIndex + 1].link;
	  }
	  if (this.currentImageIndex > 0) {
		var preloadPrev = new Image();
		preloadPrev.src = this.album[this.currentImageIndex - 1].link;
	  }
	};
  
	Lightbox.prototype.enableKeyboardNav = function() {
	  $(document).on('keyup.keyboard', $.proxy(this.keyboardAction, this));
	};
  
	Lightbox.prototype.disableKeyboardNav = function() {
	  $(document).off('.keyboard');
	};
  
	Lightbox.prototype.keyboardAction = function(event) {
	  var KEYCODE_ESC        = 27;
	  var KEYCODE_LEFTARROW  = 37;
	  var KEYCODE_RIGHTARROW = 39;
  
	  var keycode = event.keyCode;
	  var key     = String.fromCharCode(keycode).toLowerCase();
	  if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
		this.end();
	  } else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
		if (this.currentImageIndex !== 0) {
		  this.changeImage(this.currentImageIndex - 1);
		} else if (this.options.wrapAround && this.album.length > 1) {
		  this.changeImage(this.album.length - 1);
		}
	  } else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
		if (this.currentImageIndex !== this.album.length - 1) {
		  this.changeImage(this.currentImageIndex + 1);
		} else if (this.options.wrapAround && this.album.length > 1) {
		  this.changeImage(0);
		}
	  }
	};
  
	// Closing time. :-(
	Lightbox.prototype.end = function() {
	  this.disableKeyboardNav();
	  $(window).off('resize', this.sizeOverlay);
	  this.$lightbox.fadeOut(this.options.fadeDuration);
	  this.$overlay.fadeOut(this.options.fadeDuration);
	  $('select, object, embed').css({
		visibility: 'visible'
	  });
	  if (this.options.disableScrolling) {
		$('body').removeClass('lb-disable-scrolling');
	  }
	};
  
	return new Lightbox();
  }));
  
	jQuery(window).load(function() {
	
		/*Stop carousel*/
		$('#multi-item').carousel('pause');
	});