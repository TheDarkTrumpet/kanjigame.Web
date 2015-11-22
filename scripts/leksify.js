$(function() {
  $('.container').empty()
  var data = [
    { lex: 'dog', target: '' },
    { lex: 'cat', target: '' },
  ];
  
  data.forEach(function(e, i) {
    $('.container').append('<div class="cell lex" id="c"'+i+'">'+e.lex+'</div>');
    $('.container').append('<div class="cell target" id="c"'+i+'">'+e.target+'</div>');
  })
});