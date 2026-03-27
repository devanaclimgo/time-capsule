class LetterMailer < ApplicationMailer
  default from: 'no-reply@timecapsule.com'

  def send_letter(letter)
    @letter = letter
    mail(
      to: letter.user.email,
      subject: "Your Time Capsule Letter 💌"
    )
  end
end