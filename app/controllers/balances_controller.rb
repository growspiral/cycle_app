class BalancesController < ApplicationController
  def index
    @balances = Balance.all
  end

  def edit
    @balance = Balance.new
    @id = params[:id]
    @balances = Balance.where(day: params[:id])
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
    
    id = params[:id]
    id.slice(0, 10)
    balances = Balance.where(day: id.slice(0, 10))
    balances[id.slice(11, 100).to_i - 1].destroy
    redirect_to edit_balance_path(id.slice(0, 10))
  end
  
  def update
    @balance = Balance.create
  end

   private

  def balance_params
    params.require(:balance).permit(:day, :category_id, :detail, :money_amount).merge(user_id: current_user.id)
  end
end