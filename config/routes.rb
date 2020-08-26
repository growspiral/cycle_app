Rails.application.routes.draw do
  root to: 'balances#index'
 resources :balances, only: [:edit, :update]
end
