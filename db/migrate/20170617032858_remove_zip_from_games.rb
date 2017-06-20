class RemoveZipFromGames < ActiveRecord::Migration[5.0]
  def change
    remove_column :games, :zip, :string
  end
end
