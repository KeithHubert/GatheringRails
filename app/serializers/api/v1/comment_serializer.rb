class Api::V1::CommentSerializer < ActiveModel::Serializer
  attributes :comment, :user

  def user
    object.user
  end

end
