class LetterMailer < ApplicationMailer
  def send_letter(letter)
    Resend::Emails.send({
      from: "onboarding@resend.dev",
      to: letter.user.email,
      subject: "Sua carta chegou 💌",
      html: "<p>#{letter.content}</p>"
    })
  end
end