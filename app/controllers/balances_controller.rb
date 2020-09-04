class BalancesController < ApplicationController
  before_action :move_to_sign_in, except: :index
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
      redirect_to edit_balance_path(@balance.start_time), notice: '必須項目を入力してください'
    end
  end

  def destroy
    balance = Balance.find(params[:id])
    balance.destroy
    redirect_to edit_balance_path(balance.start_time)
  end
  
  

   private

  def balance_params
    params.require(:balance).permit(:start_time, :category_id, :detail, :money_amount).merge(user_id: current_user.id)
  end

  def move_to_sign_in
    redirect_to user_session_path unless user_signed_in?
  end
end