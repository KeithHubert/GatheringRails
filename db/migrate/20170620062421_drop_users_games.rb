class DropUsersGames < ActiveRecord::Migration[5.0]
  def change
    drop_table :users_games
  end
end
