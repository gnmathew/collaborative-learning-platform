class Client < ApplicationRecord
  has_secure_password
  after_create :generate_client_id_number

  enum role: { student: 0, teacher: 1 }
  enum status: { active: 0, inactive: 1 }

  validates :email, :username, presence: true, uniqueness: true
  validates :batch, presence: true, if: :student?

  belongs_to :batch, optional: true

  private

  def generate_client_id_number
    user_role = student? ? 'ST' : 'IN'
    self.id_number = "#{user_role}#{Time.current.year.to_s}#{set_user_id}"
  end

  def set_user_id
    start_year = Time.current.beginning_of_year
    end_year = Time.current.end_of_year
    user_id = Client.where(role: role, created_at: start_year..end_year)
    (user_id.count + 1).to_s.rjust(3, '0')
  end
end
