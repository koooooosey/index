$(function() {
	setTimeout(function(){
		$('.FV_rogo p').fadeIn(1000);
	},500);
	setTimeout(function(){
		$('.FV_rogo').fadeOut(1000);
	},2500);
});



$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
  });



  // 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

    // ふわっ
    $('.popular_article').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
      }
      });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



//文字数制限
    const els_2 = document.getElementsByClassName('description');
    const len_2 = 200;//最大文字数を指定します
    
    for(let i = 0; i < els_2.length; i++) {
        const el = els_2[i];
        const str = el.textContent.trim();
    
        if (str.length > len_2) {
            el.textContent = str.substring(0, len_2) + '…';
        }
    }


    const els_3 = document.getElementsByClassName('th');
    const len_3 = 100;//最大文字数を指定します
    
    for(let i = 0; i < els_3.length; i++) {
        const el = els_3[i];
        const str = el.textContent.trim();
    
        if (str.length > len_3) {
            el.textContent = str.substring(0, len_3) + '…';
        }
    }
