$(function(){
  $(document).on("click",".js-append-btn",function(){
    var number = $(this).attr("id");

    var created  = gon.bookmarks[number].created_at;
    var year     = created.substr(0,4);
    var month    = created.substr(5,2);
    var day      = created.substr(8,2);
    var hour     = created.substr(11,2);
    var minute   = created.substr(14,2);
    var sec      = created.substr(17,2);
    let window = `
      <div class = "show__window js-move-pannel">
      <div class = "show__window__top">
        <div class = "show__window__top__btn js-remove-btn"></div>
        <div class = "show__window__top__mini js-mini-btn"></div>
        <div class = "show__window__top__expansion js-expansion-btn"></div>
      </div>
      <p>${gon.bookmarks[number].name}</p>
      <a target = "_brank" href = "${gon.bookmarks[number].url}">${gon.bookmarks[number].url}</a>
      <p>${gon.bookmarks[number].gerne}</p>
      <p>${gon.bookmarks[number].reason}</p>
      <p>${year}年${month}月${day}日${hour}時${minute}分${sec}秒</p>
      <div class = "show__window__others">${gon.bookmarks[number].gerne}ジャンルで他の人が登録しているもの</div>
      </div>
    `
    


    $(".bookmark-body").css('filter','brightness(50%)');
    $(".show").append(window).hide().fadeIn(300);

    gon.others.forEach(function(other){
      let relative = `
        <div class = "show__window__others__other">
          <a>${other.name}</a>
          <a target = "_brank" href = "${other.url}">${other.url}</a>
        </div>
      `
      if(gon.bookmarks[number].gerne == other.gerne){
        $(".show__window__others").append(relative);
      }
    })
  })

  $(".wall-btn").on("click",function(){
    var image = $("#wall-url").val();
    console.log(image);
    $(".bookmark-body").css('backgroundImage',`url("${image}")`);
  })
  
  $(".bookmark-body__table__content__win-btn").on("click",function(){
    $(".show__window").remove();
    var number = $(this).attr("id");

    var created  = gon.bookmarks[number].created_at;
    var year     = created.substr(0,4);
    var month    = created.substr(5,2);
    var day      = created.substr(8,2);
    var hour     = created.substr(11,2);
    var minute   = created.substr(14,2);
    var sec      = created.substr(17,2);
    let window = `
      <div class = "show__window js-move-pannel">
      <div class = "show__window__top">
        <div class = "show__window__top__btn js-remove-btn"></div>
        <div class = "show__window__top__mini js-mini-btn"></div>
        <div class = "show__window__top__expansion js-expansion-btn"></div>
      </div>
      <p>${gon.bookmarks[number].name}</p>
      <a target = "_brank" href = "${gon.bookmarks[number].url}">${gon.bookmarks[number].url}</a>
      <p>${gon.bookmarks[number].gerne}</p>
      <p>${gon.bookmarks[number].reason}</p>
      <p>${year}年${month}月${day}日${hour}時${minute}分${sec}秒</p>
      <div class = "show__window__others">${gon.bookmarks[number].gerne}ジャンルで他の人が登録しているもの</div>
      </div>
    `
    $(".bookmark-body").css('filter','brightness(50%)');
    $(".show").append(window).hide().fadeIn(300);

    gon.others.forEach(function(other){
      let relative = `
        <div class = "show__window__others__other">
          <a>${other.name}</a>
          <a target = "_brank" href = "${other.url}">${other.url}</a>
        </div>
      `
      if(gon.bookmarks[number].gerne == other.gerne){
        $(".show__window__others").append(relative);
      }
    })
  })

});