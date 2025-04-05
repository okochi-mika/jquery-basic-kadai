$('#change-color').on('click', function() {
    $('#target').css('color', 'red'); // 文字の色を赤に
  });
  
  $('#change-text').on('click', function() {
    $('#target').text('クリックされました！'); // テキスト変更
  });
  
  $('#fade-out').on('click', function() {
    $('#target').fadeOut(); // フェードアウトで非表示に
  });
  
  $('#fade-in').on('click', function() {
    $('#target').fadeIn(); // フェードインで再表示
  });
  