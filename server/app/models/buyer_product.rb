class BuyerProduct < ActiveRecord::Base
    belongs_to :products
    belongs_to :buyers

    def special_create
        if bp_find
            bp = bp_find
            bp.update(bp_params)
        else
            bp = BuyerProduct.create(bp_params)
        end
        render json: bp, status: :created
    end


    private 

    def bp_params
        params.permit(:buyer_id, :product_id, :quantity)
    end

    def bp_find
        buyer_id = params[:buyer_id]
        product_id = params[:product_id]
        bp_find = BuyerProduct.find_by buyer_id: buyer_id, product_id: product_id
        return bp_find
    end

end