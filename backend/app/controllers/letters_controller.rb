class LettersController < ApplicationController
  before_action :authenticate_user!

  # GET /letters
  def index
    letters = current_user.letters.order(created_at: :desc)

    Rails.logger.info letters.inspect

    render json: letters.map { |letter|
      {
        id: letter.id,
        sender: letter.sender,
        recipient: letter.recipient,
        written_at: letter.created_at.iso8601,
        deliver_at: letter.deliver_at.iso8601,
        readable_at: letter.readable_at,
        delivered: letter.delivered,
        content: letter.readable_at <= Time.current ? letter.content : nil
      }
    }
  end

  # GET /letters/:id
  def show
    letter = current_user.letters.find(params[:id])

    if Time.current < letter.readable_at
      render json: { error: "You can't read this letter yet." }, status: :forbidden
    else
      render json: letter
    end
  end

  # POST /letters
  def create
    letter = current_user.letters.new(letter_params)


    if letter.save
      render json: letter, status: :created
    else
      Rails.logger.debug letter.errors.full_messages
      render json: { errors: letter.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # POST /letters/send_due
  def send_due
    letters = Letter.where("deliver_at <= ? AND delivered = ?", Time.current, false)

    letters.each do |letter|
      LetterMailer.send_letter(letter).deliver_now
      letter.update(delivered: true)
    end

    render json: { message: "Letters sent successfully" }
  end

  private

  def letter_params
    params.require(:letter).permit(
      :content,
      :sender,
      :recipient,
      :written_at,
      :deliver_at
    )
  end
end