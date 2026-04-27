class Letter < ApplicationRecord
  belongs_to :user

  before_create :set_readable_at
  validate :deliver_at_must_be_in_future

  validates :deliver_at, presence: true

  private

  def set_readable_at
    self.readable_at ||= deliver_at
  end

  def deliver_at_must_be_in_future
    return if deliver_at.blank?

    if deliver_at < Time.current
      errors.add(:deliver_at, "must be in the future")
    end
  end

end
