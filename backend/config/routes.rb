Rails.application.routes.draw do
  devise_for :users,
    controllers: {
      sessions: 'users/sessions'
    }

  get "up" => "rails/health#show", as: :rails_health_check

  resources :letters, only: [:create, :index, :show] do
    collection do
      post :send_due
    end
  end
end