module Api
  module V1
    module AdminUser
      class SessionsController < ApiController
        skip_before_action :authorize_request

        def create
          admin = Admin.find_by(username: admin_params[:username])

          if admin&.authenticate(admin_params[:password])
            token = jwt_encode(admin_id: admin.id)

            render json: { token: token, admin: admin }, status: :ok
          else
            render json: { errors: 'Invalid email or password' }, status: :unauthorized
          end

        end

        private

        def admin_params
          params.require(:admin).permit(:username, :password)
        end
      end
    end
  end
end
