Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "https://time-capsule-front-production.up.railway.app"

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      expose: ["Authorization"]
  end
end