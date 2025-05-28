class Admin::ContactsController < ApplicationController
  http_basic_authenticate_with name: ENV["ADMIN_USER"], password: ENV["ADMIN_PASSWORD"]

  def index
    @contacts = Contact.order(created_at: :desc)
  end
end
