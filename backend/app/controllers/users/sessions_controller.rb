module Users
  class SessionsController < Devise::SessionsController
    respond_to :json

    private

    def respond_with(resource, _opts = {})
      render json: {
        message: 'Logged in successfully',
        user: resource
      }, status: :ok
    end
  end
end