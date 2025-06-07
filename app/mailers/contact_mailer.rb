class ContactMailer < ApplicationMailer
  def contact_email(contact)
    @contact = contact
    mail(
      to: ENV.fetch("CONTACT_EMAIL", "example@example.com"),
      subject: @contact.subject.presence || "New contact from #{@contact.name}"
    )
  end
end
