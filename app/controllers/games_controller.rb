class GamesController < ApplicationController
  def index
    @games = Game.order(created_at: :desc)
  end

  def show
    authenticate_user!
    @game = Game.find(params[:id])
    @request = Request.new
    @signup = Signup.new
    else
      flash[:notice] = 'Game not found. Sorry.'
      redirect_to map_index_url
  end

  def new
    if user_signed_in?
      @game = Game.new
    else
      flash[:notice] = 'Please sign in to add a game'
      redirect_to new_user_session_path
    end
  end

  def create
    if user_signed_in?
      @game = Game.create(game_params)
      require_relative 'httprequest.rb'
      if @game.address.include?(' ') && !@game.address.include?('.')
        require_relative 'httprequest.rb'
        results = Httprequest.call(@game.address)
        @game.lat = results[0]
        @game.lng = results[1]
      end

      if @game.save
        flash[:notice] = 'Thank you for adding this listing to our database!'
        Signup.create(user: current_user, game: @game)
        redirect_to game_path(@game)
      else
        flash[:notice] = @game.errors.full_messages.to_sentence
        redirect_back(fallback_location: root_path)
      end
    else
      flash[:alert] = 'Please sign in to add a game'
      redirect_to new_user_session_path
    end
  end

  def edit
    if user_signed_in?
      @game = Game.find(params[:id])
      unless current_user.id == @game.creator
        flash[:alert] = "UNAUTHORIZED"
        redirect_back(fallback_location: root_path)
      end
    else
      flash[:alert] = "UNAUTHORIZED"
      redirect_back(fallback_location: root_path)
    end
  end

  def update
    @game = Game.find(params[:id])
    @game.update_attributes(game_params)
    if @game.address.include?(' ') && !@game.address.include?('.')
      require_relative 'httprequest.rb'
      results = Httprequest.call(@game.address)
      @game.lat = results[0]
      @game.lng = results[1]
    end
    if @game.save
      flash[:notice] = "Thank you for editing this listing!"
      redirect_to game_path(@game)
    else
      flash[:notice] = @game.errors.full_messages.to_sentence
      render :edit
    end
  end

  def destroy
    @game = Game.find(params[:id])
    if user_signed_in? && (current_user.id == @game.creator)
      Comment.where(game: @game).delete_all
      Signup.where(game: @game).delete_all
      Request.where(game: @game).delete_all
      @game.delete
      flash[:alert] = "You have deleted this game listing successfully"
      redirect_to games_path
    else
      flash[:alert] = 'UNAUTHORIZED'
      redirect_back(fallback_location: root_path)
    end
  end

  private

  def game_params
    params.require(:game).permit(
    :title,
    :gametype,
    :time,
    :date,
    :address,
    :number_of_players,
    :latitude,
    :longitude,
    :creator,
    :username
  )

  end
end
