$(function(){
  $(".button").on("change",function(){
    let select_gerne = $(".button").val();
    $(".bookmark-body__table__content").remove();
    i = 1
    gon.bookmarks.forEach(function(bookmark){
      
      let list = `
      <div class = "bookmark-body__table__content">
      <div class = "bookmark-body__table__content__number">${i}</div>
      <div class = "bookmark-body__table__content__win-btn js-append-btn" id = "${i}">${bookmark.name}</div>
      <a target = "_blank" href = "${bookmark.url}" class = "bookmark-body__table__content__item">${bookmark.url}</a>
      <div class = "bookmark-body__table__content__item">${bookmark.gerne}</div>
      <div class = "bookmark-body__table__content__item">${bookmark.reason}</div>
      <div class = "bookmark-body__table__content__item">${bookmark.created_at}</div>
      </div>
      `
      if(select_gerne){
        if(bookmark.gerne == select_gerne){
          $(".bookmark-body__table").append(list);
        }
      }else{
        $(".bookmark-body__table").append(list);
      }
      i += 1
    });
    
  })
  $(document).on("click",".js-append-btn",function(){
    console.log("OK")
    var number = $(this).attr("id");
    console.log(number)
    let window = `
    <div class = "show__window">
    <p>${gon.bookmarks[number - 1].name}</p>
    <a target = "_brank" href = "${gon.bookmarks[number - 1].url}">${gon.bookmarks[number - 1].url}</a>
    <p>${gon.bookmarks[number - 1].gerne}</p>
    <p>${gon.bookmarks[number - 1].reason}</p>
    <div class = "show__window__btn js-remove-btn">❎</div>
    </div>
    `
    console.log(window)
    $(".show").append(window).hide().fadeIn(300);
  })
  $(".bookmark-body__table__content__win-btn").on("click",function(){
    $(".show__window").remove();
    var number = $(this).attr("id");
    let window = `
      <div class = "show__window">
      <p>${gon.bookmarks[number - 1].name}</p>
      <a target = "_brank" href = "${gon.bookmarks[number - 1].url}">${gon.bookmarks[number - 1].url}</a>
      <p>${gon.bookmarks[number - 1].gerne}</p>
      <p>${gon.bookmarks[number - 1].reason}</p>
      <div class = "show__window__btn js-remove-btn">❎</div>
      </div>
    `
    $(".show").append(window).hide().fadeIn(300);
  })
  $(document).on("click",".js-remove-btn",function(){
    $(".show__window").remove().fadeOut(700);
  })
});