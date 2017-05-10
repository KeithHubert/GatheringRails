class Api::V1::GamesController < Api::V1::BaseController
  skip_before_action :verify_authenticity_token

  def index
    recentgames = Game.order(created_at: :desc).limit(5)
    render json: recentgames
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
