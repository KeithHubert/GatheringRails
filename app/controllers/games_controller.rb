class GamesController < ApplicationController

  def index;
  end

  def new
    @game = Game.new
  end

  def create
    @game = Game.new(game_params)
  end



end
