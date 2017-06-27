class Api::V1::GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :gametype, :time, :date, :address, :number_of_players, :lat, :lng, :user_viewing_page
  has_many :comments
  delegate :current_user, to: :scope

  def user_viewing_page
    instance_options[:user]
  end
end
