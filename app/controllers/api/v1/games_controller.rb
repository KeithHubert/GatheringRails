class Api::V1::GamesController < Api::V1::BaseController
  def index
    recentgames = Game.order(created_at: :desc).limit(5)
    render json: recentgames
  end

  def create
    @game = Game.new(game_params)

    if @game.save!
      render json: @game
    end
  end

private

  def game_params
    params.permit(:id, :overall_rating, :address, :city, :date, :time, :number_of_players, :title, :zip)
  end

end
