class Buyer < ActiveRecord::Base
    has_many :products
    has_many :sellers, through: :products
end