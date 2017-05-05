class Game < ApplicationRecord
  has_many :users, through: :users_games
  has_many :user_games

  validates :title, presence: true
  validates :gametype, presence: true
  validates :time, presence: true
  validates :date, presence: true
  validates :address, presence: true
  validates :zip, presence: true
  validates :number_of_players, presence: true
end
