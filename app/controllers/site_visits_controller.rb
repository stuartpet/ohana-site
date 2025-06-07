# site_visit_controller.rb
class SiteVisitsController < ApplicationController
  def index
    @site_visits = SiteVisit.order(created_at: :desc).limit(50)
  end

  private

  def authenticate
    authenticate_or_request_with_http_basic("Admin Area") do |username, password|
      username == ENV["ADMIN_USER"] && password == ENV["ADMIN_PASSWORD"]
    end
  end
end
