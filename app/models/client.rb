class Client < ApplicationRecord
  has_secure_password

  enum role: { student: 0, teacher: 1 }
  enum status: { active: 0, inactive: 1 }

  validates :email, :username, presence: true
end
