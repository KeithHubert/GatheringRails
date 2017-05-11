class Api::V1::GamesController < Api::V1::BaseController

  def index
    recentgames = Game.order(created_at: :desc).limit(5)
    render json: recentgames
  end

  def show
    game = Game.find(params[:id])
    comments = game.comments
    user = current_user

    game_show_data = { game: game, comments: comments, current_user: user }

    render json: game_show_data
  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    game = Game.new(parsed)

    # HTTPrequest.call( // some address)
    if game.save!
      render json: game
    end
  end
end
