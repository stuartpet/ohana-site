class Admin::ContactsController < ApplicationController
  layout "admin"
  before_action :authenticate

  def index
    @contacts = Contact.all
  end

  def logout
    reset_session
    redirect_to root_path, notice: t("admin.logged_out")
  end

  private

  def authenticate
    authenticate_or_request_with_http_basic("Admin Area") do |username, password|
      username == ENV["ADMIN_USER"] && password == ENV["ADMIN_PASSWORD"]
    end
  end
end
