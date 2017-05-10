class Api::V1::CommentsController < Api::V1::BaseController
  skip_before_action :verify_authenticity_token

  def index
    comments = Comment.order(created_at: :desc)
    render json: comments
  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    game = Game.new(parsed)

    # HTTPrequest.call( // some address)
    if comment.save!
      render json: comment
    end
  end
end
