class ApplicationController < ActionController::Base
  before_action :log_site_visit

  private

  def log_site_visit
    return unless request.get? # only log page visits

    ip_hash = Digest::SHA256.hexdigest(request.remote_ip)

    SiteVisit.create!(
      referrer: request.referrer,
      user_agent: request.user_agent,
      ip_hash: ip_hash
    )
  end

  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
end
