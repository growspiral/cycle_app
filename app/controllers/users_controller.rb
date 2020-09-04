class UsersController < ApplicationController
  def show
    @balances = Balance.all
    redirect_to user_session_path unless user_signed_in?
  end
  
end
