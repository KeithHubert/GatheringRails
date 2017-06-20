class RemoveCityFromGames < ActiveRecord::Migration[5.0]
  def change
    remove_column :games, :city, :string
  end
end
