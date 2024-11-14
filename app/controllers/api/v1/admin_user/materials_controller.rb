module Api
  module V1
    module AdminUser
      class MaterialsController < ApiController
        before_action :set_material, only: %i[show update destroy]

        def index
          materials = Material.includes(:batch)

          render json: MaterialSerializer.new(materials).serializable_hash, status: :ok
        end

        def create
          material = Material.new(material_params)

          if material.save
            render json: MaterialSerializer.new(material).serializable_hash, status: :ok
          else
            render json: { error: material.errors.messages }, status: 422
          end

        end

        def show
          render json: MaterialSerializer.new(@material).serializable_hash, status: :ok
        end

        def update
          if @material.update(material_params)
            render json: MaterialSerializer.new(@material).serializable_hash, status: :ok
          else
            render json: { error: @material.errors.messages }, status: 422
          end
        end

        def destroy
          if @material.destroy
            head :no_content
          else
            render json: { error: @material.errors.messages }, status: 422
          end
        end

        private

        def set_material
          @material = Material.find(params[:id])
        end

        def material_params
          params.require(:material).permit(:title, :description, :documents, :url, :batch_id)
        end
      end
    end
  end
end
