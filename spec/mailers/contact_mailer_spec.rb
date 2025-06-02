require 'rails_helper'

RSpec.describe ContactMailer, type: :mailer do
  describe 'contact_email' do
    let(:contact) { Contact.new(name: 'Jane', email: 'jane@example.com', message: 'Hi there') }
    let(:mail) { described_class.contact_email(contact) }

    it 'renders the subject' do
      expect(mail.subject).to eq('New contact from Jane')
    end

    it 'sends to the configured email' do
      expect(mail.to).to eq([ENV.fetch('OHANA_CONTACT_EMAIL', 'example@example.com')])
    end

    it 'includes the name and message in the body' do
      expect(mail.body.encoded).to include('Jane')
      expect(mail.body.encoded).to include('Hi there')
    end
  end
end
