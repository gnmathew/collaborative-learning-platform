module Api
  module V1
    module AdminUser
      class BatchesController < ApiController
        before_action :set_batch, only: %i[update destroy]

        def index
          batches = Batch.includes(:students)

          render json: BatchSerializer.new(batches).serializable_hash, status: :ok
        end

        def create
          batch = Batch.new(batch_params)

          if batch.save
            render json: { batch: BatchSerializer.new(batch).serializable_hash[:data], status: 200 }, status: :ok
          else
            render json: { error: batch.errors.messages, status: 422 }, status: 422
          end
        end

        def update
          if @batch.update(batch_params)
            render json: { batch: BatchSerializer.new(@batch).serializable_hash[:data], status: 200 }, status: :ok
          else
            render json: { error: @batch.errors.messages, status: 422 }, status: 422
          end

        end

        def destroy
          if @batch.destroy
            render json: { message: 'Batch successfully deleted.', status: 200 }, status: :ok
          else
            render json: { error: @batch.errors.full_messages, status: 422 }, status: 422
          end
        end

        private

        def batch_params
          params.require(:batch).permit(:name, :status)
        end

        def set_batch
          @batch = Batch.find(params[:id])
        end
      end
    end
  end
end
