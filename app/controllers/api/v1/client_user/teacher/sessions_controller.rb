module Api
  module V1
    module ClientUser
      module Teacher
        class SessionsController < AuthenticationController
          skip_before_action :authorize_request

          def create
            teacher = Client.teacher.find_by(id_number: client_params[:id_number])

            if teacher&.authenticate(client_params[:password])
              token = jwt_encode(client_id: teacher.id)

              render json: { token: token, client: teacher }, status: :ok
            else
              render json: { errors: 'Invalid teacher id number or password' }, status: :unauthorized
            end

          end

          private

          def client_params
            params.require(:client).permit(:password, :id_number)
          end
        end
      end
    end
  end
end
