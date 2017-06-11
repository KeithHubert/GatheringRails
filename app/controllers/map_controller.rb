require 'gmaps4rails'

class MapController < ApplicationController
  before_action :authenticate_user!

  def index
    @games = Game.where.not(lat: nil).where.not(lat: 0).where.not(lat: 1).where("date > ?", Time.zone.now)
    @unlisted = Game.where(lat: nil)
    @unlisted += Game.where(lat: 1)
    @hash = Gmaps4rails.build_markers(@games) do |game, marker|
      marker.lat game.lat
      marker.lng game.lng
      marker.title game.title
      marker.infowindow "<h6><a href='/games/" + game.id.to_s + "'>" + game.title + "</a></h6><p>Address: " + game.address + "<br/>Description: " + game.gametype + "</p>"
    end
  end
end
