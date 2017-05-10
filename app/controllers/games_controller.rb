class GamesController < ApplicationController

  def index;
  end

  def new
    @game = Game.new
  end

  def create
    @game = Game.new(game_params)
    if user_signed_in?
      @game = Game.create(game_params)
      require_relative 'httprequest.rb'
      if @game.location.include?(' ') && !@game.location.include?('.')
        require_relative 'httprequest.rb'
        results = Httprequest.call(@game.location)
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

    def game_params
   params.require(:game).permit(
    :title,
    :gamtype,
    :time,
    :date,
    :address,
    :city,
    :zip,
    :number_of_players,
    :latitude,
    :longitude,
  )
end



end
