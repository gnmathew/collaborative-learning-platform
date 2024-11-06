module Api
  module V1
    module AdminUser
      class ClientSerializer
        include FastJsonapi::ObjectSerializer
        
        attributes :id, :username, :email, :id_number, :status, :role, :batch_id
      end
    end
  end
end
