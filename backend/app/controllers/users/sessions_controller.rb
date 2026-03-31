module Users
  class SessionsController < Devise::SessionsController
    respond_to :json
    
    skip_before_action :authenticate_user!, raise: false

    private

    def respond_with(resource, _opts = {})
    token = request.env['warden-jwt_auth.token']

    render json: {
      message: 'Logged in successfully',
      user: resource,
      token: token
    }, status: :ok
    end
  end
end