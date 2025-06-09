class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    # Spam bot honeypot
    spam_filter

    @contact = Struct.new(contact_params)

    if contact_valid?(@contact)
      ContactMailer.contact_email(@contact).deliver_now
      flash[:notice] = I18n.t('contacts.notice') # "Thanks for your message" etc.
      redirect_to root_path(anchor: 'contact')
    else
      render_error
    end
  end

  def render_error
    flash.now[:alert] = I18n.t('contacts.failure')
    render :new, status: :unprocessable_content
  end

  def spam_filter
    return if params.dig(:contact, :nickname).blank?

    head :unprocessable_entity
  end

  private

  def contact_valid?(contact)
    contact.name.present? && contact.email.present? && contact.message.present?
  end

  def contact_params
    params.require(:contact).permit(:name, :email, :subject, :message)
  end
end
