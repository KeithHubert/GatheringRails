class Api::V1::GamesController < ApplicationController
  def index
    recentgames = Game.order(created_at: :desc).limit(5)
    render json: recentgames
  end
end
