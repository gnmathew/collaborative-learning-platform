class Batch < ApplicationRecord
  validates :name, presence: true

  enum status: { ongoing: 0, completed: 1 }
end
