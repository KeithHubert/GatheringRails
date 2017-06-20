class RemoveLatitudeFromGames < ActiveRecord::Migration[5.0]
  def change
    remove_column :games, :latitude, :float
  end
end
