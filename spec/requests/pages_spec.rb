require 'rails_helper'

RSpec.describe "Pages", type: :request do
  describe "GET / (home page)" do
    it "returns http success" do
      get root_path
      expect(response).to have_http_status(:success)
    end
  end
end
