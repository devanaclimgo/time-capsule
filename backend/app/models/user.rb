class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::Null

  devise :database_authenticatable,
         :registerable,
         :validatable,
         :jwt_authenticatable,
         jwt_revocation_strategy: Devise::JWT::RevocationStrategies::Null

  has_many :letters

  attr_writer :login

  def login
    @login || self.email
  end

  def self.find_for_database_authentication(warden_conditions)
    email = warden_conditions[:email]&.downcase
    where(email: email).first
  end
end