class GamesController < ApplicationController

  def index
    @game = Game.all
  end

  def show
    @game = Game.find(params[:id])
    # @reviews = @user.reviews.order(created_at: :desc)
  end

  def edit
    @game = Game.find(params[:id])
  end

  def create
    @game = Game.new(game_params)

    if @game.save
      flash[:notice] = 'Game added successfully!'
    #   redirect_to game_path(@game)
    # else
    #   @state_collection = Venue::STATES
    #   render action: 'new'
    end
  end

  def edit
    @game = Game.find(params[:id])
    # @state_collection = Venue::STATES
  end

  def update
    @game = Game.find(params[:id])
    @game.email = params[:user][:email]

    if @game.save
      flash[:notice] = 'Success! Your game has been updated.'
      redirect_to @game
    # else
    #   @user.email = params[:user][:email]
    #   @user.avatar_url = params[:user][:avatar_url]
    #   render :edit
    end
  end

  def destroy
    this_game = Game.find(params[:id])
    this_game.destroy

    redirect_to games_path
  end

end
