src/
├── appwrite/                       # Appwrite backend logic
│   ├── config.js                   # Appwrite client setup
│   ├── authService.js              # login, signup, getCurrentUser
│   ├── dbService.js                # Feedback, volunteer, event DB ops
│   └── roles.js                    # Role detection logic (admin/user)
│
├── store/                          # Redux store & slices
│   ├── index.js                    # Store setup
│   ├── authSlice.js                # Auth state (user, role, isLoggedIn)
│   └── (more slices…)              # For feedback, events, etc.
│
├── components/                     # Reusable components
│   ├── layout/                     # App layout elements
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── MainLayout.jsx
│   ├── ui/                         # Reusable UI elements (inputs/buttons)
│   │   └── Input.jsx, Button.jsx (optional)
│   └── shared/                     # Shared display components
│       └── InfoCard.jsx, etc.
│
├── features/                       # Feature-specific logic
│   ├── auth/                       # Auth-specific pages
│   │   ├── LoginPage.jsx
│   │   └── SignupPage.jsx
│   └── admin/                      # Admin-only features (event mgmt)
│       └── AddEventPage.jsx (future)
│
├── pages/                          # Public route pages
│   ├── HomePage.jsx
│   ├── EventsPage.jsx
│   ├── FeedbackPage.jsx
│   ├── VolunteerPage.jsx
│   └── NotFoundPage.jsx
│
├── routes/                         # Route definitions (future role-based routes)
│   └── routes.js                   # Optional: route config array
│
├── utils/                          # Helper functions (formatters, validators)
│   └── validateEmail.js, etc.
│
├── App.jsx                         # Route definitions using MainLayout
├── main.jsx                        # Entry point (BrowserRouter + Redux Provider)
└── index.css                       # Tailwind base styling
