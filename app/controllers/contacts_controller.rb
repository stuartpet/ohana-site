class ContactsController < ApplicationController
  def create
    if params.dig(:contact, :nickname).present?
      head :unprocessable_entity and return
    end

    @contact = Contact.new(contact_params)

    if @contact.save
      ContactMailer.new_contact(@contact).deliver_later
      redirect_to contact_path, notice: t('contacts.success')
    else
      flash[:alert] = t('contacts.failure')
      render "pages/contact"
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end

