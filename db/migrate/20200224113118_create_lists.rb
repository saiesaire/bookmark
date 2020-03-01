class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string   :name
      t.string   :url
      t.string   :gerne
      t.text     :reason
      t.timestamps
    end
  end
end
