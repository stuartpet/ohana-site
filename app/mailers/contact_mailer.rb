class ContactMailer < ApplicationMailer
  def new_contact
    @contact = params[:contact]
    mail(to: "contact@ohana.yourdomain.com", subject: "New Contact Message")
  end
end
