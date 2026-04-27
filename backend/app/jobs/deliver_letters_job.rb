class DeliverLettersJob < ApplicationJob
  queue_as :default

  def perform
    letters = Letter.where("deliver_at <= ? AND delivered = ?", Time.current, false)

    letters.find_each do |letter|
      LetterMailer.send_letter(letter)
      letter.update!(delivered: true)
    end
  end
end