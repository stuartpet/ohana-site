class PagesController < ApplicationController
  layout :choose_layout
  def privacy
    render layout: "application"
  end

  def coming_soon; end

  private

  def choose_layout
    action_name == "coming_soon" ? false : "application"
  end
end
