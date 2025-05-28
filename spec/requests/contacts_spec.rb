require 'rails_helper'

RSpec.describe "Contacts", type: :request do
  include Rails.application.routes.url_helpers

  describe "POST /contacts" do
    it "creates a contact and redirects" do
      post contacts_path, params: {
        contact: {
          name: "Jane",
          email: "jane@example.com",
          message: "I'm interested"
        }
      }
      expect(response).to have_http_status(:found) # 302 redirect
    end
  end
end

