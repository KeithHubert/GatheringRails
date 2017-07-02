require 'net/http'
require 'json'
require 'uri'

class Api::V1::NearmegamesController < ApplicationController
  def index

    # current_user_location_array = current_user.geocode
    # current_user_location = current_user_location_array.join(",")

    binding.pry

    games = Game.all
    games_within_five_miles = []
    games.each do |game|
      game_location_array= game.lat, game.lng
      game_geolocation = game_location_array.join(",")


      # Reach out to GMaps API and grab distance, gather those within 5 miles
      distance_url = "https://maps.googleapis.com/maps/api/directions/json?origin=#{current_user_location}&destination=#{game_geolocation}&key=#{ENV["GOOGLE_DISTANCE_KEY"]}"

      distance_uri = URI(distance_url)
      response = Net::HTTP.get(distance_uri)
      workable_data = JSON.parse(response)
        binding.pry
      distance_between = workable_data['routes'][0]['legs'][0]['distance']['value']
      if distance_between <= 8046
        games_within_five_miles << game
      end
    end

    render json: games_within_five_miles
  end
end
