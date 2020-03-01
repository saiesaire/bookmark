$(function(){
  $(".button").on("change",function(){
    let select_gerne = $(".button").val();
    $(".bookmark-body__table__content").remove();
    gon.bookmarks.forEach(function(bookmark){
      let list = `
      <div class = "bookmark-body__table__content">
      <div class = "bookmark-body__table__content__name">${bookmark.name}</div>
      <a target = "_blank" href = "${bookmark.url}" class = "bookmark-body__table__content__url">${bookmark.url}</a>
      <div class = "bookmark-body__table__content__gerne">${bookmark.gerne}</div>
      <div class = "bookmark-body__table__content__reason">${bookmark.reason}</div>
      <div class = "bookmark-body__table__content__time">${bookmark.created_at}</div>
      </div>
      `
      if(select_gerne){
        if(bookmark.gerne == select_gerne){
          $(".bookmark-body__table").append(list);
        }
      }else{
        $(".bookmark-body__table").append(list);
      }
    });
    
  })
});