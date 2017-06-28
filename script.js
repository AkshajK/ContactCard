$(document).ready(function() {
  $('form').submit(function(){
    var curhtml = "<h3>"+$('#firstname').val() + " " + $('#lastname').val() + "</h3>";
    var althtml = "<p>"+$('#description').val()+"</p>";
    var s = "<div class=\"card\" althtml=\"" + althtml + "\">";
    s += curhtml
    s += "</div>";
    $('main').append(s);
    return false;
  });
  $(document).on("click", "div.card", function() {
    var curhtml = $(this).html();
    var althtml = $(this).attr("althtml");
    $(this).attr("althtml", curhtml);
    $(this).html(althtml);
  });

});
