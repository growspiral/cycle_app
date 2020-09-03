class UsersController < ApplicationController
  def show
    @balances = Balance.all
    
  end
  
end
