/* This file is part of Carrusel Informativo. Copyright 2012 SPOTI S.L. */ var currentUrl=0,currentDuration=0;function rotate(a){setTimeout(function(){$("#iframe").attr("src",sites[currentUrl].url);currentUrl==sites.length-1?currentUrl=0:currentUrl++;!0!=a&&(currentDuration==sites.length-1?currentDuration=0:currentDuration++);rotate()},!0==a?0:1E3*sites[currentDuration].duration)}$(document).ready(function(){rotate(!0)});