![CircleCI](https://circleci.com/gh/stuartpet/ohana_site.svg?style=shield)

# Ohana Consulting Website

A clean, elegant web presence for a boutique property consultancy. Built to be fast, accessible, and mobile-friendly — with clear messaging and easy contact.

---

## 🛠 Tech Stack

- **Backend**: Ruby on Rails 7
- **Frontend**: ERB templates & custom CSS
- **Testing**: RSpec, Capybara
- **Code Quality**: RuboCop
- **CI/CD**: CircleCI
- **Deployment**: Netlify

---

## 🚀 Features

- Smooth-scroll single-page layout
- "About", "Services", and "Projects" sections
- Secure contact form with honeypot spam protection
- Responsive design for all screen sizes

---

## 🧪 Getting Started Locally

To set everything up in one step:

```bash
bin/setup

This installs gems, sets up the database, clears logs/tmp, and restarts the Rails server.

Then run the server with:
bin/rails server
Visit: http://localhost:3000
```

✅ Development Commands
Run tests:
bundle exec rspec

Lint with RuboCop:
bundle exec rubocop

📦 Deployment
Deployed with Netlify, with CI checks via CircleCI on every push.

👤 Author
Built by Stuart Pethurst
Design & delivery by Studio P ✨