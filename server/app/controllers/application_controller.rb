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

    get '/products/:id' do
        prod = Product.find(params[:id])
        seller_of_prod = prod.seller
        combo = prod, seller_of_prod
        combo.to_json
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

    get '/buyer_products' do
        bp = BuyerProduct.all
        if bp
            bp.to_json
        end
    end

    post '/buyer_products/find' do
        buyer_id = params[:buyer_id]
        product_id = params[:product_id]
        bp_find = BuyerProduct.find_by buyer_id: buyer_id, product_id: product_id
        bp_find.to_json
    end

    post '/buyer_products' do
        buyer_id = params[:buyer_id]
        product_id = params[:product_id]
        bp_find = BuyerProduct.find_by buyer_id: buyer_id, product_id: product_id
        if bp_find
            bp_find.update(
                quantity: bp_find.quantity + 1
            )
            bp = bp_find
        else
            bp = BuyerProduct.create(
                product_id: params[:product_id],
                buyer_id: params[:buyer_id],
                quantity: 1
            )
        end
        # new_buyerproduct = BuyerProduct.create(
        #     product_id: params[:product_id],
        #     buyer_id: params[:buyer_id],
        #     quantity: params[:quantity]
        # )
        bp.to_json
    end



    patch '/buyer_products' do
        bp = BuyerProduct.find(params[:id])
        bp.update(quantity: params[:quantity])
    end

    private 


    def bp_find
        buyer_id = params[:buyer_id]
        product_id = params[:product_id]
        bp_find = BuyerProducts.find_by buyer_id: buyer_id, product_id: product_id
        return bp_find
    end

end
  