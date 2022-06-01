class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    get '/' do
        "Hello World"
    end

    get '/products' do
        products = Product.all
        products.to_json
    end

    post '/products' do
        new_prod = Product.create(
            name: params[:name],
            price: params[:price],
            description: params[:description],
            image: params[:image],
            quantity: params[:quantity],
            seller_id: params[:seller_id]
        )
        new_prod.to_json
    end

    patch '/products/:id' do
        prod = Product.find(params[:id])
        prod.update(
            price: params[:price],
            quantity: params[:quantity],
            buyer_id: params[:buyer_id]
        )
        prod.to_json
    end

    delete '/products/:id' do
        prod = Product.find(params[:id])
        prod.destroy
        prod.to_json
    end

    post '/sellers' do
        new_seller = Seller.create(
            name: params[:name],
            username: params[:username],
            password: params[:password]
        )
        new_seller.to_json
    end

    get '/sellers' do
        sellers = Seller.all
        sellers.to_json
    end

    patch '/sellers/:id' do
        seller = Sellers.find(params[:id])
        seller.update(balance: params[:balance])
        seller.to_json
    end

    get '/buyers' do
        buyer = Buyer.all
        buyer.to_json
    end

    post '/buyers' do
        new_buyer = Buyer.create(
            name: params[:name],
            username: params[:username],
            password: params[:password]
        )
        new_buyer.to_json
    end

end
  