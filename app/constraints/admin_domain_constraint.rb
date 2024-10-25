class AdminDomainConstraint
  def matches(request)
    domain = Rails.application.config_for(:domain)[:admin]
    domain.include?(requests.domain.downcase)
  end
end