Rails.application.routes.draw do
  devise_for :users
  root to: 'balances#index'
 resources :balances, only: [:create, :edit, :update, :destroy]
 get "users/:id" => "users#show", as: :mypage
end
