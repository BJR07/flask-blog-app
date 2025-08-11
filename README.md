# Flask Blog App

A simple and responsive blog web application built with **Flask**, **MySQL**, and **Bootstrap**, allowing users to sign up, log in, and create blog posts.  
This project demonstrates **full-stack web development** with authentication, password hashing, and database integration.

---

## Features

- **User Registration & Login**
  - Secure password hashing using Werkzeug
  - Email-based authentication
- **Create & Manage Blog Posts**
  - Add, edit, and delete posts
- **Responsive UI**
  - Built with Bootstrap for mobile-friendly design
- **Database Integration**
  - MySQL backend for storing users and posts
- **Form Validation**
  - Basic validation for user inputs

---

## Tech Stack

- **Backend:** Flask (Python)
- **Frontend:** HTML5, CSS3, Bootstrap, jQuery
- **Database:** MySQL
- **Authentication:** Werkzeug password hashing
- **Version Control:** Git & GitHub

---

## 📂 Project Structure
/your-flask-app
  /static
    /js
      jquery.min.js
      jquery.js
      jquery.min.map
    /css
    /images
  /templates
    index.html
    signup.html
  app.py
2️⃣ Create & Activate Virtual Environment
bash

python -m venv venv
venv\Scripts\activate  # On Windows
source venv/bin/activate  # On Mac/Linux
3️⃣ Install Dependencies
bash

pip install -r requirements.txt
4️⃣ Configure the Database
Create a MySQL database

Import database.sql

Update config.py with your DB credentials

5️⃣ Run the Application
bash
python app.py
____________________________________________________
🤝 Contributing
Fork this repo

1.Create a feature branch (git checkout -b feature-name)

2.Commit your changes (git commit -m "Added new feature")

3.Push to the branch (git push origin feature-name)

4.Open a Pull Request
_______________________________________________________
👤 Author
Biswajit Rout
📧 Email: work.bjr07@gmail.com
🌐 GitHub: https://github.com/BJR07


