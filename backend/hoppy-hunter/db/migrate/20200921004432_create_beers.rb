class CreateBeers < ActiveRecord::Migration[6.0]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :style
      t.string :abv
      t.string :img_src
      t.belongs_to :brewery
      t.timestamps
    end
  end
end
