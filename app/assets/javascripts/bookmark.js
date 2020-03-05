$(function(){
  $(".button").on("change",function(){
    let select_gerne = $(".button").val();
    $(".bookmark-body__table__content").remove();
    i = 0
    gon.bookmarks.forEach(function(bookmark){
      var created  = bookmark.created_at;
      var year     = created.substr(0,4);
      var month    = created.substr(5,2);
      var day      = created.substr(8,2);
      var hour     = created.substr(11,2);
      var minute   = created.substr(14,2);
      var sec      = created.substr(17,2);
      let list = `
      <div class = "bookmark-body__table__content">
      <div class = "bookmark-body__table__content__win-btn js-append-btn" id = "${i}">${bookmark.name}</div>
      <a target = "_blank" href = "${bookmark.url}" class = "bookmark-body__table__content__item">${bookmark.url}</a>
      <div class = "bookmark-body__table__content__item">${bookmark.gerne}</div>
      <div class = "bookmark-body__table__content__item">${bookmark.reason}</div>
      <div class = "bookmark-body__table__content__item">${year}年${month}月${day}日${hour}時${minute}分${sec}秒</div>
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
});