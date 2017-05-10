class Review < ApplicationRecord
  belongs_to :show
  belongs_to :game
end
