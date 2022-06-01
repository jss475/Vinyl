class UpdateSellers < ActiveRecord::Migration[6.1]
  def change
    add_column :sellers, :username, :string
    add_column :sellers, :password, :string
  end
end
