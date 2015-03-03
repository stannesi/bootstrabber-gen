// JavaScript Document
// Author: Stanley Ilukhor
$.fn.bootsmapper = function() {
    return this.each( function() {
		
		$mapholder = $(this);
		$mappers = $(this).find("div.mapper");

        init();

        function init() {		
			_setMapper($mapholder);
			_alignMappers();								
		}
		
        function _setMapper(mholder) {
			mImg = $(mholder).find('img');
			
			$("<img/>").attr("src", mImg.attr("src"))
			.load(function() {
				$(mholder).css({
					width : this.width,
					height: this.height
				});
			});
		}
		
		function _alignMappers() {
			$mappers.each(function() {				
				$(this).css({
					width: $(this).data('w'),
					height: $(this).data('h'),
					top: $(this).data('y'),
					"border-radius": $(this).data('radius'),
					left: $(this).data('x')					
				}).popover({
    				placement : $(this).data('place'),
    				    title : $(this).data('title'),
    				  content : $(this).data('content'),
    				  trigger : 'manual',
                     template : '<div class="popover"><div class="arrow"></div><div class="close">x</div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    			}).click(function(){
    				var $this = $(this);
                    if( !$this.hasClass('active') ){					   
					    $(this).popover('show').addClass('active');
                    } else {
				        $(this).popover('hide').removeClass('active');
				    }
    			}).mouseout(function(){
					$(this).popover('hide').removeClass('active');
				});
			});
		}
    });
};

$(document).ready( function() {
	$('#img-mapper').bootsmapper();
	$('#img-mapper2').bootsmapper();
});
