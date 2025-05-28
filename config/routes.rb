Rails.application.routes.draw do
  root "pages#home"
  get "contact", to: "pages#contact"

  # Only allow POST to create contacts
  resources :contacts, only: [:create]

  # Health check
  get "up" => "rails/health#show", as: :rails_health_check

  # PWA files (optional, safe to leave)
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest

  namespace :admin do
    get "contacts/index"
    resources :contacts, only: [ :index ]
  end
end
