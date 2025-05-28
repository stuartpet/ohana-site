class ContactsController < ApplicationController
  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      ContactMailer.with(contact: @contact).new_contact.deliver_later
      redirect_to contact_path, notice: "Thank you for your message."
    else
      render "pages/contact", notice: "your message was nit sent please try again"
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end

