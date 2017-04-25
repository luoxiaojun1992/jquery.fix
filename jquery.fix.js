/**
 * Created by 224 on 2016/1/8.
 */
(function($){
    $.fn.extend({
       fix:function(config){
           var top = 10;
           if (typeof config != 'undefined' && typeof config.top != 'undefined') {
               top = config.top;
           }
           var thisObj = this;
           var objTop = $(thisObj).offset().top;
           var objWidth = $(thisObj).width();
           var isIE6 = !-[1,]&&!window.XMLHttpRequest;
           $(window).on('scroll', function(){
               var scrollTop = $(this).scrollTop();
               if (scrollTop > objTop) {
                   if (isIE6) {
                       $(thisObj).css({
                           'position': 'absolute',
                           'width': objWidth
                       });
                       $(thisObj).animate({'top': String(scrollTop + top) + 'px'}, 'slow');
                   } else {
                       $(thisObj).css({
                           'position': 'fixed',
                           'width': objWidth
                       });
                       $(thisObj).animate({'top': String(top) + 'px'}, 'slow');
                   }
               } else {
                   $(thisObj).removeAttr('style');
               }
           });

           if ($(window).scrollTop > objTop) {
               if (isIE6) {
                   $(thisObj).css({
                       'position': 'absolute',
                       'width': objWidth
                   });
                   $(thisObj).animate({'top': String($(window).scrollTop + top) + 'px'}, 'slow');
               } else {
                   $(thisObj).css({
                       'position': 'fixed',
                       'width': objWidth
                   });
                   $(thisObj).animate({'top': String(top) + 'px'}, 'slow');
               }
           }
       }
    });
})(jQuery);
