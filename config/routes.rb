Rails.application.routes.draw do

  root 'home#index'

  devise_for :users

  resources :users


  resources :games

  # do resources :user
  # end
end
