module Api
  module V1
    module ClientUser
      module Student
        class SessionsController < AuthenticationController
          skip_before_action :authorize_request

          def create
            student = Client.student.find_by(id_number: client_params[:id_number])

            if student&.authenticate(client_params[:password])
              token = jwt_encode(client_id: student.id)

              render json: { token: token, client: student }, status: :ok
            else
              render json: { errors: 'Invalid student id number or password' }, status: :unauthorized
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
