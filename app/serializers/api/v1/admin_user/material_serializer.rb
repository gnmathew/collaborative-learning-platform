module Api
  module V1
    module AdminUser
      class MaterialSerializer
        include FastJsonapi::ObjectSerializer

        attributes :id, :title, :description, :url, :documents, :batch_id

        attribute :batch_name do |object|
          object.batch&.name
        end
      end
    end
  end
end
