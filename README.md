# Task 2: Inline Styles, Basic Interaction and Server-Side Validation

##  Objective
Expand inline styles and introduce server-side validation for form submissions using Node.js and Express.

##  Tech Stack
- **Frontend:** HTML, EJS, Inline JavaScript
- **Backend:** Node.js, Express.js
- **Styling:** CSS3

##  Project Structure
```
level1-task2/
├── public/
│   └── style.css
├── views/
│   ├── index.ejs
│   └── result.ejs
├── .gitignore
├── package.json
├── server.js
└── README.md
```
##  Setup & Installation

1. Clone the repository
```bash
git clone https://github.com/Anubhav852/cognifyz-task2-form-validation.git
cd cognifyz-task2-form-validation/level1-task2
```

2. Install dependencies
```bash
npm install
```

3. Start the server
```bash
npm start
```

4. Open your browser and visit

http://localhost:3000

##  Features
- Complex registration form with Name, Email, Phone, Password and Age fields
- Client-side validation using inline JavaScript before form submission
- Server-side validation as a second layer of security
- Password strength indicator with color-coded bar
- Error messages displayed inline per field
- Server-side error box for validation failures
- Temporary in-memory storage of validated submissions

##  How It Works
1. User fills the registration form
2. Client-side JS validates instantly on submit
3. If client-side passes, form POSTs to server
4. Server validates again independently
5. If server validation fails, errors are shown on the form
6. If all valid, data is stored in memory and result page is rendered

## Author
**Anubhav VK**
- GitHub: [Anubhav852](https://github.com/Anubhav852)
- LinkedIn: [anubhav-vk](https://linkedin.com/in/anubhav-vk-523364354)

## Internship
Cognifyz Technologies - Full Stack Development Internship