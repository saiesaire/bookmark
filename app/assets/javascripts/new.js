$(function(){
  $(".new-btn").on("click",function(){
    let form = `
      <div class = "form__window">
      <div class = "form__window__top">
        <div class = "form__window__top__btn js-remove-fbtn"></div>
        <div class = "form__window__top__mini js-mini-fbtn"></div>
        <div class = "form__window__top__expansion js-expansion-fbtn"></div>
      </div>
      <form action="/bookmarks/new" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="SUAPHkqnumjEgS6ljx3GLHednUxTyAtczwsT2NbfpB0rwZekAE0Zb8bWmTaqUuFvFPtBuoTAFXzPhJJho6WCXg==">
        <textarea placeholder="名称" name="name" id="name"></textarea>
        <textarea placeholder="アドレス" name="url" id="url"></textarea>
        <select class="button" name="gerne" id="gerne"><option value="">ジャンル</option>
          <option value="プログラミング">プログラミング</option>
          <option value="ゲーム">ゲーム</option>
          <option value="趣味">趣味</option>
          <option value="声優">声優</option>
          <option value="ブログ">ブログ</option>
          <option value="アーティスト">アーティスト</option>
          <option value="スポーツ">スポーツ</option>
          <option value="Vtuber">Vtuber</option>
        </select>
        <textarea placeholder="登録理由" name="reason" id="reason"></textarea>
        <input type="submit" name="commit" value="登録" class="btn" data-disable-with="登録">
        </form>
      </div>
    `
    $(".form").append(form).hide().fadeIn(300);
  })
});