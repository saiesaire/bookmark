gernes = ["プログラミング","Vtuber","ゲーム","趣味","声優","ブログ","アーティスト","スポーツ"]

gernes.each do |gerne|
  Gerne.create(gerne_name: gerne)
end