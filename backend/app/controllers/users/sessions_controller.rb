module Users
  class SessionsController < Devise::SessionsController
    respond_to :json

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