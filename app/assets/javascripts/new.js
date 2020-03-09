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
          <option value="${gon.gernes[0].gerne_name}">${gon.gernes[0].gerne_name}</option>
          <option value="${gon.gernes[1].gerne_name}">${gon.gernes[0].gerne_name}</option>
          <option value="${gon.gernes[2].gerne_name}">${gon.gernes[0].gerne_name}</option>
          <option value="${gon.gernes[3].gerne_name}">${gon.gernes[0].gerne_name}</option>
          <option value="${gon.gernes[4].gerne_name}">${gon.gernes[0].gerne_name}</option>
          <option value="${gon.gernes[5].gerne_name}">${gon.gernes[0].gerne_name}</option>
          <option value="${gon.gernes[6].gerne_name}">${gon.gernes[0].gerne_name}</option>
          <option value="${gon.gernes[7].gerne_name}">${gon.gernes[0].gerne_name}</option>
          <option value="${gon.gernes[8].gerne_name}">${gon.gernes[0].gerne_name}</option>
          <option value="${gon.gernes[9].gerne_name}">${gon.gernes[0].gerne_name}</option>

        </select>
        <textarea placeholder="登録理由" name="reason" id="reason"></textarea>
        <input type="submit" name="commit" value="登録" class="btn" data-disable-with="登録">
        </form>
      </div>
    `

    $(".form").append(form).hide().fadeIn(300);
  })
});