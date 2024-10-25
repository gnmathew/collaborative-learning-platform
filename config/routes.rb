Rails.application.routes.draw do
  constraints(AdminDomainConstraint.new) do
    namespace :api do
      namespace :v1 do
        namespace :admin_user, path: 'admin' do
          resources :sessions, only: :create
        end
      end
    end
  end
end
