Rails.application.routes.draw do
  root "pages#home"
  get "about", to: "pages#about"
  get "privacy", to: "pages#privacy", as: :privacy

  # Contact form
  get "/contact", to: "contacts#new", as: :contact
  get "/contacts", to: redirect("/contact")
  resources :contacts, only: [:new, :create]

  # Health check
  get "up" => "rails/health#show", as: :rails_health_check

  # PWA files
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest

  namespace :admin do
    get "contacts/index"
    resources :contacts, only: [:index]
  end
end
