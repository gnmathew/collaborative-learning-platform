module Api
  module V1
    module ClientUser
      class SessionsController < ApiController
        skip_before_action :authorize_request

        def create
          client = Client.where(role: client_params[:role]).find_by(id_number: client_params[:id_number])

          if client&.authenticate(client_params[:password])
            token = jwt_encode(client_id: client.id)

            render json: { token: token, client: client }, status: :ok
          else
            render json: { errors: 'Invalid id number or password' }, status: :unauthorized
          end

        end

        private

        def client_params
          params.require(:client).permit(:password, :id_number, :role)
        end
      end
    end
  end
end
