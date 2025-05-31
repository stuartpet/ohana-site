class PagesController < ApplicationController
  def home
  end

  def contact
  end
  def privacy
    render layout: "application"
  end

end
