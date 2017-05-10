class CommentsController < ApplicationController

  def new
    @comment = Comment.new
  end

  # def create
  #   @comment = Comment.new(comment_params)
  #   if user_signed_in?
  #     @comment = Game.create(comment_params)
  #     if @comment.save
  #      flash[:notice] = 'Thank you for adding this listing to our database!'
  #       Signup.create(user: current_user, game: @game)
  #       redirect_to game_path(@game)
  #     else
  #       flash[:notice] = @comment.errors.full_messages.to_sentence
  #       redirect_back(fallback_location: root_path)
  #     end
  #   else
  #     flash[:alert] = 'Please sign in to add a game'
  #     redirect_to new_user_session_path
  #   end
  # end
end
