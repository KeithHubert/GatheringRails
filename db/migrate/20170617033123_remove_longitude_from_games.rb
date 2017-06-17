class RemoveLongitudeFromGames < ActiveRecord::Migration[5.0]
  def change
    remove_column :games, :longitude, :float
  end
end
