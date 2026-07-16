# 🍽️ velvel-ember — Restaurant Management System (Frontend)

Welcome to the frontend repository of **velvel-ember**, a premium, high-performance, and feature-rich Restaurant Management Web Application built with **React**. 

This platform delivers an immersive experience for food lovers, allowing them to explore interactive menus, securely manage accounts, order food via dynamic animations, and complete purchases using a live payment gateway.

The project is structured using the **Modular Pattern** to maintain clean, scalable, and enterprise-grade code organization.

---

## 🚀 Key Features

*   **🔒 Secure Authentication:** Handled via **Firebase Authentication** with dedicated flows for Customer Sign-In and Sign-Up.
*   **🤖 Bot Protection:** Google **reCAPTCHA** integration on the sign-in page to prevent automated brute-force attacks.
*   **🛒 Advanced Form Handling:** Form states, validations, and error messages are managed seamlessly using **React Hook Form**.
*   **💳 Live Payment Gateway:** Fully integrated with **Stripe Payment** for processing secure, real-time credit card transactions.
*   **✨ Premium UI/UX Animations:** Powered by **Framer Motion** for smooth page transitions and **Lottie React** for interactive, lightweight vector animations.
*   **🔔 Interactive Alerts:** Beautiful, non-blocking toast notifications and confirmation dialogs powered by **SweetAlert2**.
*   **📱 Responsive & Modern UI:** Crafted using **Tailwind CSS** and **daisyUI** components for an elegant and fully adaptive layout.

---

## 🛠️ Tech Stack & Libraries

*   **Core:** React.js & JavaScript (ES6+)
*   **Routing:** React Router DOM (v6)
*   **Authentication:** Firebase Auth
*   **Forms & Security:** React Hook Form & Google reCAPTCHA
*   **Payment Processor:** Stripe API
*   **Styling & UI Components:** Tailwind CSS & daisyUI
*   **Animations:** Framer Motion & Lottie React
*   **Alerts:** SweetAlert2

---

## 📂 Project Structure

This project follows a strict **Feature-Based Modular Structure** combined with standard React practices:

```text
velvel-ember-frontend/
│
├── public/                # Lottie JSON files and static assets
├── src/
│   ├── assets/            # Global images, logos, and stylesheets
│   ├── components/        # Reusable global UI elements (Buttons, Loaders, Navbar, Footer)
│   ├── config/            # Firebase, Stripe, and API configurations
│   ├── hooks/             # Custom global React hooks
│   │
│   ├── modules/           # 📦 Feature Modules (Modular Pattern Architecture)
│   │   ├── auth/          # Auth Module (Sign In, Sign Up, Captcha)
│   │   │   ├── components/
│   │   │   ├── auth.service.js
│   │   │   └── auth.routes.js
│   │   │
│   │   ├── menu/          # Menu Exploration & Filtering Module
│   │   │
│   │   ├── cart/          # Cart Management Module
│   │   │
│   │   └── payment/       # Stripe Checkout and Order Confirmation Module
│   │
│   ├── routes/            # Global Application Router setup
│   ├── App.jsx            # Main App Wrapper
│   └── main.jsx           # Application entry point
│
├── .env.example           # Configuration template for API keys
├── tailwind.config.js     # Tailwind and daisyUI configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

---

## 💻 Getting Started

Follow these steps to run a local development copy of **velvel-ember**.

### Prerequisites
Ensure you have **Node.js** installed on your system.
```bash
node -v
npm -v
```

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com
   ```
2. Navigate into the project folder:
   ```bash
   cd velvel-ember-frontend
   ```
3. Install all npm packages:
   ```bash
   npm install
   ```

### Environment Configuration
Create a `.env.local` file in the root directory and add your secret keys based on the template below:

```env
# Backend API
VITE_API_URL=http://localhost:5000/api

# Firebase Configuration
VITE_apiKey=your_firebase_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your-_app_id


# Stripe & Captcha
VITE_stripe_payment_publishable_key=your_app_id

```

### Running the Project
Launch the local development server:
```bash
npm run dev
```
Open your browser and navigate to the local URL (usually `http://localhost:5173`).

---

## 🔒 CORS & Security Reminder
Since this app interacts with external services (Firebase, Stripe, Captcha) and your custom backend API, ensure that your backend has **CORS** configured properly to allow incoming requests from your local React development server origin (`http://localhost:5173`).

---

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License
This project is licensed under the MIT License - see the `LICENSE` file for details.

---

## 📞 Contact
Project Link: [https://github.com](https://velvet-ember.web.app)  
Developer Email: `antodasahir@gmail.com`
