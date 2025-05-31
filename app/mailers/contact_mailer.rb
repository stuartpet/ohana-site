class ContactMailer < ApplicationMailer
  def new_contact(contact)
    @name = contact[:name]
    @email = contact[:email]
    @message = contact[:message]

    mail(
      to: ENV.fetch("PARTNER_CONTACT_EMAIL", "example@example.com"),
      subject: "New contact from #{@name}"
    )
  end
end
