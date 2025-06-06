# app/models/contact.rb
class Contact < ApplicationRecord
  include ActiveModel::Model

  attr_accessor :name, :email, :message

  validates :name, :email, :message, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
