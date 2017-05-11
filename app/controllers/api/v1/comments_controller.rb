class Api::V1::CommentsController < Api::V1::BaseController

  def index
    comments = Comment.order(created_at: :desc)
    render json: comments
  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)

    comment = parsed["comment"]
    user_id = parsed["user_id"]
    game_id = parsed["game_id"]

    new_comment = Comment.create(user_id: user_id, game_id: game_id, comment: comment)

    comment_user = new_comment.user

    if new_comment.save!
      render json: { comment: new_comment, user: comment_user }
    end
  end
end
