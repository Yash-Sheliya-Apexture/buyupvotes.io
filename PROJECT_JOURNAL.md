# BuyUpVotes.io Project Journal

Last Updated: December 10, 2024

## Project Overview
BuyUpVotes.io is a web application built using React.js for the frontend and Node.js/Express.js for the backend. The application allows users to purchase upvotes for various social media platforms.

## Project Structure

### Frontend (React)
```
client/
├── src/
│   ├── Dashboard/
│   │   ├── components/
│   │   │   └── Dashboard_header.jsx    # Dashboard header component with user profile
│   │   └── pages/
│   │       ├── ContactUs.jsx           # Contact page
│   │       ├── RabbitAccount.jsx       # User account management
│   │       ├── UpvoteOrder.jsx         # Order placement page
│   │       └── ordertable.jsx          # Order history/table view
```

### Backend (Node.js/Express)
```
server/
├── app.js                 # Express application setup with CORS
├── server.js             # Server entry point
├── .env                  # Environment variables
├── config/
│   └── db.js            # MongoDB connection setup
├── controllers/
│   ├── auth.js          # Authentication controllers
│   └── OrderController.js # Order management
├── middlewares/
│   └── authMiddleware.js # JWT authentication middleware
├── models/
│   └── User.js          # User model schema
├── routes/
│   └── auth.js          # Authentication routes
└── utils/
    └── googleSheets.js  # Google Sheets integration
```

## Key Features
1. User Authentication (JWT-based)
2. Order Management
3. Google Sheets Integration
4. Protected Routes
5. Dashboard Interface

## API Endpoints
- POST /api/auth/register - User registration
- POST /api/auth/login - User login
- GET /api/auth/user - Get user data (protected)
- POST /api/auth/submit-order - Submit order to Google Sheets (protected)

## Environment Variables
```
PORT=5000
MONGO_URI=mongodb+srv://[username]:[password]@cluster0.ibpvm.mongodb.net/buyupvotes
JWT_SECRET=[secret-key]
GOOGLE_CLIENT_EMAIL=[service-account-email]
GOOGLE_PRIVATE_KEY=[service-account-private-key]
```

## Authentication Flow
1. User registers/logs in
2. Server validates credentials
3. JWT token issued
4. Token used for protected routes

## Data Flow
1. User submits order through frontend
2. Request authenticated via JWT
3. Order data validated
4. Data appended to Google Sheets
5. Response sent to frontend

## Frontend Routes
- / - Home page
- /dashboard - Main dashboard
- /contact - Contact page
- /account - User account management
- /orders - Order history

## Development Notes

### CORS Configuration
- Frontend running on port 5173
- Backend running on port 5000
- CORS enabled for specific origins

### Google Sheets Integration
- Using service account for authentication
- Spreadsheet ID: 16mjIgnRXcoxXw9Se404dSeO2Y9oRRvGaCk8C9HlYysM
- Auto-incrementing row system

### Security Measures
1. Password hashing using bcrypt
2. JWT for session management
3. Protected API endpoints
4. Environment variables for sensitive data

## Troubleshooting Guide
1. CORS Issues: Check origin configuration in app.js
2. Authentication Errors: Verify JWT token format
3. Google Sheets Errors: Validate service account credentials

## Future Improvements
1. [ ] Add email verification
2. [ ] Implement payment gateway
3. [ ] Add order status tracking
4. [ ] Enhance dashboard analytics
5. [ ] Add user roles and permissions

## Dependencies
### Frontend
- React
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Express
- Mongoose
- JWT
- bcryptjs
- googleapis
- cors
- dotenv

## Maintenance Notes
- Regular backup of Google Sheets data
- Monitor MongoDB connection
- Update JWT secrets periodically
- Keep dependencies updated

This journal will be updated as the project evolves.
