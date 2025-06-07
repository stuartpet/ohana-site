class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    # Spam bot honeypot
    spam_filter

    @contact = Contact.new(contact_params)

    if @contact.valid?
      ContactMailer.contact_email(@contact).deliver_now
      flash.now[:notice] = t('contacts.notice')
      redirect_to root_path(anchor: 'contact')
    else
      render_error
    end
  end

  def render_error
    flash.now[:alert] = t('contacts.failure')
    render :new, status: :unprocessable_content
  end

  def spam_filter
    return if params.dig(:contact, :nickname).blank?

    head :unprocessable_entity
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :subject, :message)
  end
end
