class ContactMailer < ApplicationMailer
  def contact_email(contact)
    @contact = contact
    mail(
      to: ENV.fetch("PARTNER_CONTACT_EMAIL", "example@example.com"),
      subject: "New contact from #{@contact.name}"
    )
  end
end
