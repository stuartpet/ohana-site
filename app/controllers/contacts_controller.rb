class ContactsController < ApplicationController
  def create
    if params[:contact][:nickname].present?
      head :unprocessable_entity and return
    end

    @contact = Contact.new(contact_params)
    if @contact.save
      ContactMailer.new_contact(@contact).deliver_later
      redirect_to contact_path, notice: "Thank you for your message."
    else
      flash[:alert] = "Please correct the errors."
      render "pages/contact"
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end

