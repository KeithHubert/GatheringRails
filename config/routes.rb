Rails.application.routes.draw do

  root 'home#index'

  devise_for :users

  resources :users

  resources :games

  resources :comments

  resources :map, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :new, :create]
      resources :comments, only: [:index, :new, :create]
    end
  end


end
