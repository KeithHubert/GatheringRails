class AddCreatorToGames < ActiveRecord::Migration[5.0]
  def change
    add_column :games, :creator, :integer
  end
end
