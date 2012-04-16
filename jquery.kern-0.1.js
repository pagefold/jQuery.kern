/**
 *  jQuery Kerning Plugin
 *  Accepts an object containing a map, keyed by character
 *  and containing the amount to adjust letter-spacing for
 *  that character in the selected element(s).

 *  by Brandon McKinney
 *  pagefold [at] gmail

 *  Example:
 *  $('div.header').kern({ P: '-3px' });  // Tighten kerning by 3px on the letter P.
 */

(function($){
  $.fn.kern = function(opts){
    this.each(function(i, obj){
      var chars = '';
      for (i in opts){ chars += i; }
      $(obj).html(
        $(obj).text().replace(new RegExp("[" + chars + "]", 'g'), function(c){
          return '<span style="letter-spacing: ' + opts[c] + '">' + c + '</span>';
        })
      );
    });
  };
})(jQuery);
