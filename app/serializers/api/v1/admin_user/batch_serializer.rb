module Api
  module V1
    module AdminUser
      class BatchSerializer
        include FastJsonapi::ObjectSerializer

        attributes :id, :name, :status

        has_many :students
      end
    end
  end
end
