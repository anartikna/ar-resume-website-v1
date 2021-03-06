$(function() {
	/* Intro */
	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});

	/* Features */
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});

	/* Experience */
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeIn');
		$('.skills-bar-container').addClass('animated fadeIn');
        $('.wp3-1').addClass('progress1-delay');
        $('.wp3-2').addClass('progress2-delay');
        $('.wp3-3').addClass('progress3-delay');
        $('.wp3-4').addClass('progress4-delay');
        $('.wp3-5').addClass('progress5-delay');
	}, {
		offset: '50%'
	});

	/* Resume Button */
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated bounceIn');
	}, {
		offset: '75%'
	});

	/* Portfolio */
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});

	/* Paper Plane */
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated bounceInDown');
	}, {
		offset: '75%'
	});

	// for preloader
	// setTimeout(function(){
	// 	$('body').addClass('loaded');
	// }, 2800);

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            // $(".navbar").addClass("navbar-shadow");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            // $(".navbar").removeClass("navbar-shadow");
        }
    });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $("#to-top").mouseover(function() {
        $("#to-top-copy").animate({opacity: "1"}, "slow");
    });
    $("#to-top").mouseout(function() {
        $("#to-top-copy").animate({opacity: "0"}, "slow");
	});
	
	//vert tabs attempt
    const tabs = document.querySelector('.tabs');

    tabs.addEventListener('click', e => handleClick(e));
    
    function handleClick(e) {
      const target = e.target;
      const tabNum = target.dataset.tab;
      const activeTab = document.querySelector('.tabs .active');
      const activeContent = document.querySelector(
        '.content .visible'
      );
      const currentContent = document.querySelector(
        `.content__section[data-tab='${tabNum}']`
      );
      
      if (!tabNum) {
        return;
      }
      
      activeTab.classList.remove('active');
      target.classList.add('active');
      activeContent.classList.remove('visible');
      currentContent.classList.add('visible');
    }

    //cycle through banners

$(function() {
    // set `$.fx.interval` at `0`
    $.fx.interval = 10;
    (function cycleBgImage(elem, bgimg) {
  // `elem`:`#slideshow`
  // set, reset, delay to `1000` after background image reset
  elem.css("backgroundImage", bgimg)
    // fade in background image
    .fadeTo(1500, 1, "linear", function() {
      // set `delay` before fadeing out image
      // fade in background image        
      $(this).delay(1900, "fx").fadeTo(1900, 0, "linear", function() {
        // split background image string at comma , creating array
        var img = $(this).css("backgroundImage").split(","),
          // concat first background image to `img` array,
          // remove first background image from `img` array
          bgimg = img.concat(img[0]).splice(1).join(",");
        // recursively call `cycleBgImage`
        cycleBgImage(elem, bgimg);
      });
    });
    }($("#intro")));
  });


});
