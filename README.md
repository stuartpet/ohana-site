![CircleCI](https://circleci.com/gh/stuartpet/ohana_site.svg?style=shield)

# Ohana Consulting Website

A sleek, personal-yet-professional site for a boutique property consulting firm. Designed to showcase services, client work, and enable secure contact, with mobile-friendly design and clean UX.

## 🛠 Tech Stack

- **Backend**: Ruby on Rails 7
- **Frontend**: Embedded Ruby (ERB), custom CSS
- **Testing**: RSpec, Capybara
- **Code Quality**: RuboCop
- **CI/CD**: CircleCI
- **Deployment**: Netlify

## 🧪 Test Coverage

Coming soon: test coverage badge via [SimpleCov](https://github.com/simplecov-ruby/simplecov)

## 🚀 Features

- Elegant landing page
- Smooth scrolling to "About", "Services", and "Clients"
- Secure contact form with spam protection (honeypot field)
- Admin-only contact inbox (WIP)
- Simple structure with clean, accessible HTML/CSS

## 📂 Setup Instructions

## 🧪 Running Locally
```bash
bundle install
bin/rails db:create db:migrate
bin/rails server
Visit http://localhost:3000

✅ Running Tests
bundle exec rspec
To check linting:
bundle exec rubocop
```

👤 Author
Built by Stuart Pethurst as part of a consulting project.
Brand presented by Studio P ✨

📄 License
MIT License