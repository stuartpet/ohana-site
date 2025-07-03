# site_visit_controller.rb
class SiteVisitsController < ApplicationController
  def index
    raw_data = SiteVisit.load_data

    @site_visits = raw_data
                   .sort_by { |visit| Time.zone.parse(visit["timestamp"]) }
                   .last(50).reverse
  end
end
