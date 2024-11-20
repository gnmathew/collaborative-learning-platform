class Batch < ApplicationRecord
  validates :name, presence: true

  has_many :students, -> { where(role: :student) }, class_name: 'Client', dependent: :restrict_with_error
  has_many :materials

  enum status: { ongoing: 0, completed: 1 }
end
