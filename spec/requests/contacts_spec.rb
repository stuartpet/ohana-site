require 'rails_helper'
require 'pry'

RSpec.describe "Contacts", type: :request do
  include Rails.application.routes.url_helpers

  let(:params) do
    {
      contact: {
        name: "Jane",
        email: "jane@example.com",
        message: "I'm interested",
        nickname: "" # Honeypot field left empty (as a real user would)
      }
    }
  end

  describe "POST /contacts" do
    it "creates a contact and redirects" do
      post contacts_path, params: params
      expect(response).to have_http_status(:found) # 302 redirect
    end
  end
end

