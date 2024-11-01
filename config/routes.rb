Rails.application.routes.draw do

  constraints(AdminDomainConstraint.new) do
    root 'admin_user/home#index', as: :admin_root
    namespace :api do
      namespace :v1 do
        namespace :admin_user, path: 'admin' do
          resources :sessions, only: :create
        end
      end
    end

    get '*path', to: 'admin_user/home#index', via: :all
  end

  constraints(ClientDomainConstraint.new) do
    root 'client_user/home#index'
    namespace :api do
      namespace :v1 do
        namespace :client_user, path: 'client' do
          namespace :student do
            resources :sessions, only: :create
          end
          namespace :teacher do
            resources :sessions, only: :create
          end
        end
      end
    end

    get '*path', to: 'client_user/home#index', via: :all
  end
end
