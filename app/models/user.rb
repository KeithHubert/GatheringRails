class User < ApplicationRecord
  has_many :games, through: :signups
  has_many :comments
  has_many :requests
  has_many :signups
  has_one :profile

  geocoded_by :current_sign_in_ip,
    :latitude => :lat, :longitude => :lng
  after_validation :geocode, :if => :current_sign_in_ip_changed?

  validates :first_name, presence: true
  validates :last_name, presence: true

  validates :email, presence: true
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def admin?
    role == "admin"
  end
end
