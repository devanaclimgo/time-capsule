require "sidekiq/cron/job"

Sidekiq::Cron::Job.create(
  name: "Deliver letters every 5 minutes",
  cron: "*/5 * * * *",
  class: "DeliverLettersJob"
)