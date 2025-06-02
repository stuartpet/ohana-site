class ContactMailer < ApplicationMailer
  def contact_email(contact)
    @contact = contact
    mail(
      to: ENV.fetch("katet@ohana-consulting.co.uk", "example@example.com"),
      subject: "New contact from #{@contact.name}"
    )
  end
end
