module Api
  module V1
    module AdminUser
      class ClientsController < ApiController
        before_action :set_client, only: %i[show update destroy]

        def index
          teachers = Client.teacher.order(:username)
          students = Client.student.includes(:batch).order(:id_number)

          render json: {
                        teachers: ClientSerializer.new(teachers).serializable_hash,
                        students: ClientSerializer.new(students).serializable_hash
                       }, status: :ok
        end

        def show
          render json: { client: ClientSerializer.new(@client).serializable_hash[:data], status: 200 }, status: :ok
        end

        def create
          client = Client.new(client_params)

          if client.save
            render json: { client: ClientSerializer.new(client).serializable_hash[:data], status: 200 }, status: :ok
          else
            render json: { error: client.errors.messages, status: 422 }, status: 422
          end
        end

        def update
          if @client.update(client_params)
            render json: { client: ClientSerializer.new(@client).serializable_hash[:data], status: 200 }, status: :ok
          else
            render json: { error: @client.errors.messages }, status: 422
          end
        end

        def destroy
          if @client.destroy
            render json: { message: 'User successfully deleted.', status: 200 }, status: :ok
          else
            render json: { error: @client.errors.messages, status: 422 }, status: 422
          end
        end

        private

        def client_params
          params.require(:client).permit(:full_name, :username, :email, :password, :role, :status, :batch_id, :id_number)
        end

        def set_client
          @client = Client.find(params[:id])
        end
      end
    end
  end
end
