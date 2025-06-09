class ContactMailer < ApplicationMailer
  def contact_email(contact)
    @contact = contact
    mail(
      to: ENV.fetch("CONTACT_EMAIL", "kate@ohana-consulting.co.uk"),
      from: ENV.fetch("SMTP_FROM", "kate@ohana-consulting.co.uk"),
      reply_to: @contact.email,
      subject: @contact.subject.presence || "New contact from #{@contact.name}"
    )
  end
end
