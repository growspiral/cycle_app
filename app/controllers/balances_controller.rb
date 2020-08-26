class BalancesController < ApplicationController
  def index
    @balances = Balance.all
  end

  def edit
    @balance = Balance.new
  end

  def update
  end

end
