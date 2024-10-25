Rails.application.routes.draw do
  constraints(AdminDomainConstraint.new) do
  end
end
