module Users
  class RegistrationsController < Devise::RegistrationsController
    respond_to :json

    skip_before_action :authenticate_user!, raise: false

    before_action :configure_sign_up_params, only: [:create]

    private

    def sign_up(resource_name, resource)
      # não loga automaticamente
    end

    def respond_with(resource, _opts = {})
      if resource.persisted?
        render json: {
          message: 'Signed up successfully',
          user: resource
        }, status: :ok
      else
        render json: {
          errors: resource.errors.to_hash(true)
        }, status: :unprocessable_entity
      end
    end

    protected

    def configure_sign_up_params
      devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    end
  end
end