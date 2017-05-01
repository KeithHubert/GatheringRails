class UsersGames < ActiveRecord::Migration[5.0]
  def change
    create_table :users_games do |t|
      t.integer :user_id, null: false
      t.integer :game_id, null:false

      t. timestamps null: false
    end
  end
end
