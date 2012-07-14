$(document).ready(function() {

var		$canvas = $('#background'),
		$caption = $('div.caption'),
		$pause = $('#pause'),
		$resume = $('#resume'),
		$freeze = $('#freeze'),
		$stop = $('#stop'),
		$restart = $('#restart'),
		STOP = 1, RUN = 2, PAUSE = 3;



$('#background').crossSlide({
  fade: 1
}, [
  {
    src:  'poster1.jpg',
    alt:  'Neones en suspension',
    from: '30% 50% 1x',
    to:   '100% 0% 1.7x',
    time: 6
  }, {
    src:  'poster2.jpg',
    alt:  'El cartel de la bestia',
    from: 'bottom right 1.7x',
    to:   'top left',
    time: 6
  }, {
    src:  'poster3.jpg',
    alt:  'Comida a cualquier hora',
    from: '40% 50% 1.5x',
    to:   '100% 0% 1.1x',
    time: 7
  }, {
    src:  'poster4.jpg',
    alt:  'Luces de Madrid',
    from: '30% 50% 1x',
    to:   '100% 0% 1.5x',
    time: 6
  },{
  src:  'poster5.jpg',
    alt:  'Fauna nocturna (I)',
    from: '30% 50% 1x',
    to:   '100% 0% 1.7x',
    time: 6
  },{
   src:  'poster1.jpg',
    alt:  'Fauna nocturna (y II)',
    from: '100% 80% 1x',
    to:   '100% 0% 1.7x',
    time: 7
  }
],  function(idx, img, idxOut, imgOut) {
    if (idxOut == undefined)
    {
        // starting single image phase, put up caption
        $('div.caption').text(img.alt).animate({ opacity: .7 })
            }
            else
            {
		$('div.caption').animate({ opacity: 0 })
} }); 

$('div.caption').show().css({ opacity: 0 })

function state(state) {
		$pause.attr('disabled', state != RUN);
		$resume.attr('disabled', state != PAUSE);
		$freeze.attr('disabled', state == STOP);
		$stop.attr('disabled', state == STOP);
	}
	state(RUN);

	$pause.click(function() {
		$canvas.crossSlidePause();
		state(PAUSE);
	});

	$resume.click(function() {
		$canvas.crossSlideResume();
		state(RUN);
	})

	$freeze.click(function() {
		$canvas.crossSlideFreeze();
		state(STOP);
	});

	$stop.click(function() {
		$canvas.crossSlideStop();
		$caption.css({ opacity: 0 })
		state(STOP);
	});

	$restart.click(function() {
		$canvas.crossSlideRestart();
		state(RUN);
	});

});
