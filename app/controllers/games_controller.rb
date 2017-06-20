class GamesController < ApplicationController
  before_action :authenticate_user!

  def index
    @games = Game.all.order('created_at DEC')
      if params[:search]
        @games = Game.search(params[:search]).order("created_at DESC")
      else
        @games = Game.all.order("created_at DESC")
      end
  end

  def new
    @game = Game.new
  end

  def show
    authenticate_user!
    @game = Game.find(params[:id])
    @request = Request.new
    @signup = Signup.new
  end

  def create
    @game = Game.new(game_params)
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
    @game = Game.find(params[:id])
  end

  def update
    @game = Game.find(params[:id])
    @game.update(game_params)
    redirect_to game_path(@game)
  end

  def destroy
    @game = Game.find(params[:id])
    @game.destroy
    redirect_to map_path
  end

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
    :creator
  )

  end
end
