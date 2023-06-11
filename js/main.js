$(function () {
  // スライドショー--------------
  // ---------------------------
  // ---------------------------
  $(".slider").slick({
    autoplay: true, //自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000, //次のスライドに切り替わる待ち時間
    speed: 1500, //スライドの動きのスピード。初期値は300。
    infinite: true, //スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1, //スライドを画面に3枚見せる
    slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
    arrows: true, //左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
    dots: true, //下部ドットナビゲーションの表示
    pauseOnFocus: false, //フォーカスで一時停止を無効
    pauseOnHover: false, //マウスホバーで一時停止を無効
    pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
  });

  //スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
  $(".slider").on(
    "touchmove",
    function (event, slick, currentSlide, nextSlide) {
      $(".slider").slick("slickPlay");
    }
  );

  // fadeup------------------
  // ------------------------
  // ------------------------
  // 動きのきっかけとなるアニメーションの名前を定義
  function fadeAnime() {
    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $(".fadeUpTrigger").each(function () {
      //fadeInUpTriggerというクラス名が
      var elemPos = $(this).offset().top + 10; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("fadeUp");
        // 画面内に入ったらfadeInというクラス名を追記
      } else {
        $(this).removeClass("fadeUp");
        // 画面外に出たらfadeInというクラス名を外す
      }
    });
  }
  //関数でまとめることでこの後に違う動きを追加することが出来ます
  $(".fadeDownTrigger").each(function () {
    //fadeInDownTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeDown");
      // 画面内に入ったらfadeDownというクラス名を追記
    } else {
      $(this).removeClass("fadeDown");
      // 画面外に出たらfadeDownというクラス名を外す
    }
  });
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on("load", function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

  // pagelink-------------------
  // ---------------------------
  // ---------------------------
  $('a[href*="#"]').click(function () {
    //全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    var elmHash = $(this).attr("href"); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top; //idの上部の距離を取得
    $("body,html").animate({ scrollTop: pos }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    $(".openbtn").removeClass('active');
    return false;
  });


  // pagetop-------------------
  // ---------------------------
  // ---------------------------
  //スクロールした際の動きを関数でまとめる
  function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
      //上から200pxスクロールしたら
      $("#page-top").removeClass("DownMove"); //#page-topについているDownMoveというクラス名を除く
      $("#page-top").addClass("UpMove"); //#page-topについているUpMoveというクラス名を付与
    } else {
      if ($("#page-top").hasClass("UpMove")) {
        //すでに#page-topにUpMoveというクラス名がついていたら
        $("#page-top").removeClass("UpMove"); //UpMoveというクラス名を除き
        $("#page-top").addClass("DownMove"); //DownMoveというクラス名を#page-topに付与
      }
    }
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
  });

  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on("load", function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
  });

  // #page-topをクリックした際の設定
  $("#page-top").click(function () {
    $("body,html").animate(
      {scrollTop: 0, //ページトップまでスクロール
      },500); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
  });


  // hambergurmenu-------------------
  // ---------------------------
  // ---------------------------
  $(".openbtn").click(function () {
    $(this).toggleClass('active');
});
});
