class Material < ApplicationRecord
  belongs_to :batch_id

  validates :title, presence: true
end
