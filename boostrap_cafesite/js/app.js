//プログラムで使用する変数の設定
//フォーム要素の取得
//var button = document.getElementById('button');
//var form = document.getElementById('form');
var btn = $('#button');
var form = $('#form');

//イベント処理
//お問い合わせボタンを推したとき
//button.addEventListener('click', function() {
//フォームを表示
//form.style.display = 'block';
//});

btn.on('click', function(){
    form.slideToggle();
});

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('active');
            }
        });
    });
});
