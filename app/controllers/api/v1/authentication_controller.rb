class Api::V1::AuthenticationController < ActionController::Base
  SECRET_KEY = Rails.application.secret_key_base.to_s
  protect_from_forgery with: :null_session
  wrap_parameters false
  skip_before_action :verify_authenticity_token
  before_action :authorize_request

  attr_reader :current_admin_user

  def jwt_encode(payload, exp = 2.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def jwt_decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded
  rescue
    nil
  end

  private

  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    decoded = jwt_decode(header)

    @current_admin_user = Admin.find(decoded[admin_id]) if decoded
  rescue ActiveRecord::RecordNotFound => e
    render json: { errors: e.message }, status: :unauthorized
  rescue JWT::DecodeError => e
    render json: { errors: e.message }, status: :unauthorized
  end
end
