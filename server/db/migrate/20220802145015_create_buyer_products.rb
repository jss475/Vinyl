class CreateBuyerProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :buyer_products do |t|
      t.integer :product_id
      t.integer :buyer_id
      t.integer :quantity, :default => 0
    end
  end
end
