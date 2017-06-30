class User < ApplicationRecord
  has_many :games, through: :signups
  has_many :comments
  has_many :requests
  has_many :signups
  has_one :profile

  validates :first_name, presence: true
  validates :last_name, presence: true

  validates :email, presence: true
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable

  def admin?
    role == "admin"
  end
end
