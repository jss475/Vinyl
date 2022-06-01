class UpdateBuyers < ActiveRecord::Migration[6.1]
  def change
    add_column :buyers, :username, :string
    add_column :buyers, :password, :string
  end
end
