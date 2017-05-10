class Comment < ApplicationRecord
    has_many :games, through: :comments
    has_many :users, through: :comments

    validates :comment, presence: true
  end

end
