Rails.application.routes.draw do

  root 'home#index'

  devise_for :users

  resources :users

  resources :games

  namespace :api do
    namespace :v1 do
      resources :games, only: [:index]
    end
  end
end
