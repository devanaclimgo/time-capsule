class Users::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_to_on_destroy
    render json: {
      message: 'Logged out successfully'
    }, status: :ok
  end

  def respond_with(resource, _opts = {})
    if resource.persisted?
      render json: {
        message: 'Logged in successfully',
        user: resource
      }, status: :ok
    else
      render json: {
        error: 'Invalid email/username or password'
      }, status: :unauthorized
    end
  end
end