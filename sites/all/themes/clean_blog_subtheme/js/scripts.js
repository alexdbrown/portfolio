/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {


    // Change image on mouseover to be coolest cooler
    // Save old image src outside handler scope so we can set it back

    //hog heave
    var oldImgSrc1;
    $("td.col-1.col-first img")
      .mouseover(function() {
        oldImgSrc1 = $(this).attr('src');
        $(this).attr('src', 'https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png');
      })
      .mouseleave(function() {
        $(this).attr('src', oldImgSrc1);
      })

    //ADA
    var oldImgSrc2;
    $("td.col-2.col-first img")
      .mouseover(function() {
        oldImgSrc2 = $(this).attr('src');
        $(this).attr('src', "https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png");
      })
      .mouseleave(function() {
        $(this).attr('src', oldImgSrc2);
      })


    //tap that
    var oldImgSrc3;
    $("td.row-2 col-1 img")
      .mouseover(function() {
        oldImgSrc3 = $(this).attr('src');
        $(this).attr('src', 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Programming-Php-icon.png');
      })
      .mouseleave(function() {
        $(this).attr('src', oldImgSrc3);
      })


    //sign in
    var oldImgSrc4;
    $("td.col-2.col-last img")
      .mouseover(function() {
        oldImgSrc4 = $(this).attr('src');
        $(this).attr('src', 'http://www.w3devcampus.com/wp-content/uploads/logoAndOther/logo_JavaScript.png');
      })
      .mouseleave(function() {
        $(this).attr('src', oldImgSrc4);
      })


  }
};


})(jQuery, Drupal, this, this.document);
