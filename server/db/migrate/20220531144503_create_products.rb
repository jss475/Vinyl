class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :seller_id
      t.integer :buyer_id
      t.float :price
      t.integer :quantity
      t.string :description
      t.string :image
    end
  end
end
