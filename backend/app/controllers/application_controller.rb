class ApplicationController < ActionController::API
  before_action :authenticate_user!
  before_action :ensure_json_request

  private

  def authenticate_user!
    unless current_user
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  def ensure_json_request
    request.format = :json
  end
end