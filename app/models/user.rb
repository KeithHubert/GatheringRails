class User < ApplicationRecord
  has_many :games, through: :users_games
  has_many :user_games
  has_many :comments
  has_many :requests
  has_many :signups

  validates :first_name, presence: true
  validates :last_name, presence: true

  validates :email, presence: true
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def admin?
    role == "admin"
  end
end
