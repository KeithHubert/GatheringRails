class AddCreatorColumnToGames < ActiveRecord::Migration[5.0]
  def change
    add_column :games, :creator, :string
  end
end
