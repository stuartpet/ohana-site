class ContactMailer < ApplicationMailer
  def new_contact(contact)
    @contact = contact
    mail(
      to: ENV["CONTACT_EMAIL"] || "contact@example.com",
      subject: "New contact message from #{@contact.name}"
    )
  end
end
