class ContactsController < ApplicationController
  def create
    # Spam bot honeypot
    spam_filter

    contact = contact_params.to_h.symbolize_keys

    if contact[:name].present? && contact[:email].present? && contact[:message].present?
      ContactMailer.new_contact(contact).deliver_later
      redirect_to contact_path, notice: t('contacts.success')
    else
      flash[:alert] = t('contacts.failure')
      render "pages/contact"
    end
  end

  def spam_filter
    return if params.dig(:contact, :nickname).blank?

    head :unprocessable_entity

  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
