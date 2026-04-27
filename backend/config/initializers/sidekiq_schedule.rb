if defined?(Sidekiq) && ENV["REDIS_URL"].present?
  require "sidekiq/cron/job"

  Sidekiq.configure_server do |config|
    config.on(:startup) do
      Sidekiq::Cron::Job.create(
        name: "Deliver letters every 5 minutes",
        cron: "*/5 * * * *",
        class: "DeliverLettersJob"
      )
    end
  end
end