class BalancesController < ApplicationController
  def index
    @balances = Balance.all
  end

  def edit
    @balance = Balance.new
    @id = params[:id]
    @balances = Balance.where(start_time: params[:id])
    @visit_day = "#{@id.slice(8, 9)}日" 

    
    
  end
  def create
    @balance = Balance.new(balance_params)
 
    if @balance.save
      render json:{ balance: @balance }
      
    else
      render :edit
    end
  end

  def destroy
    balance = Balance.find(params[:id])
    balance.destroy
    redirect_to edit_balance_path(balance.day)
  end
  
  

   private

  def balance_params
    params.require(:balance).permit(:start_time, :category_id, :detail, :money_amount).merge(user_id: current_user.id)
  end
end