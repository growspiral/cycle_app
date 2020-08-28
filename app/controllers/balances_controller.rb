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
      redirect_to root_path
    else
      render :edit
    end
  end

      
  def update
    @balance = Balance.create
  end

   private

  def balance_params
    params.require(:balance).permit(:day, :category_id, :detail, :money_amount).merge(user_id: current_user.id)
  end
end