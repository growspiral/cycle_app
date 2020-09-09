class UsersController < ApplicationController
  def show
    @balances = Balance.where(user_id: current_user.id)
    @id = params[:id]
    redirect_to user_session_path unless user_signed_in?
    @balances_income = Balance.where(balance: "収入", user_id: current_user.id).sum(:money_amount)
    @balances_spending = Balance.where(balance: "支出", user_id: current_user.id).sum(:money_amount)
  end
  
end
