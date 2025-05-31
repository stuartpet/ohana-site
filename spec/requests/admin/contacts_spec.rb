ENV["ADMIN_USER"] = "testuser"
ENV["ADMIN_PASSWORD"] = "secret123"

require "rails_helper"

RSpec.describe "Admin::Contacts", type: :request do
  describe "GET /admin/contacts" do
    it "returns http success" do
      credentials = ActionController::HttpAuthentication::Basic.encode_credentials("testuser",
                                                                                   "secret123")

      get "/admin/contacts", headers: {
        "HTTP_AUTHORIZATION" => credentials
      }

      expect(response).to have_http_status(:success)
    end
  end
end
