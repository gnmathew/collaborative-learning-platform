class Material < ApplicationRecord
  belongs_to :batch
  has_many_attached :documents

  validates :title, presence: true
end
