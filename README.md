# Requirements
 1.Node Js <a href="https://nodejs.org/en/download/current">Download</a><br>
 2.Git <a href="https://git-scm.com/downloads">Download</a><br>

# Installation
 Clone the repository:

 1. git clone https://github.com/TechTasa/rupeexpertNode.git

 2. cd rupeexpertNode

 3. git checkout -b main <br>
            or <br>
  git checkout -b test <br>
            or <br>
  git checkout -b sell <br>
            or <br>
  git checkout -b inhouse <br>
            
 4. npm install <br>

 5. create .env file in root directory
    ![image](https://github.com/TechTasa/rupeexpertNode/assets/107754791/6ae7c7c9-8d87-4319-8869-e0f0f61abd2d)


 6. Put credentials in .env file
    ![image](https://github.com/TechTasa/rupeexpertNode/assets/107754791/b1b216c0-5974-4f3c-a824-1411bfa32134)

    <b>*note: each branch will have different credentials</b>

    
 8. npm run dev <br>  
       or <br>
    npm start <br>

 10. By default it will run on http://localhost:611

    
# File/Folder Structure

```
└── 📁rupeexpertNode
    └── .env
    └── .gitIgnore
    └── 📁config
        └── db.js
    └── 📁controllers
        └── authController.js
        └── blogController.js
        └── blogPageController.js
        └── careerController.js
        └── dashboardController.js
        └── jobController.js
        └── leadContoller.js
        └── leadsController.js
        └── managementController.js
        └── resumeController.js
    └── env_format.env
    └── 📁middlewares
        └── authMiddleware.js
    └── 📁models
        └── Blog.js
        └── Job.js
        └── Lead.js
        └── Resume.js
        └── User.js
    └── package-lock.json
    └── package.json
    └── 📁public
        └── 📁css
            └── apply.css
            └── blog.css
            └── cal.css
            └── login.css
            └── services.css
            └── style.css
        └── 📁html
            └── calculator.html
            └── career.html
            └── contact.html
            └── index.html
            └── services.html
        └── 📁images
        └── 📁js
            └── jquery.js
            └── navToggle.js
            └── script.js
    └── README.md
    └── 📁routes
        └── authRoutes.js
        └── blogPageRoutes.js
        └── blogRoutes.js
        └── careerRoutes.js
        └── dashboardRoutes.js
        └── jobRoutes.js
        └── leadRoutes.js
        └── leadsRoutes.js
        └── managementRoutes.js
        └── resumeRoutes.js
    └── server.js
    └── 📁uploads
    └── 📁utils
        └── errorHandler.js
    └── 📁views
        └── apply.ejs
        └── asasd.ejs
        └── blogCreate.ejs
        └── blogDetail.ejs
        └── blogEdit.ejs
        └── blogList.ejs
        └── blogPageDetail.ejs
        └── blogPageIndex.ejs
        └── business.ejs                 Services/Business Loan Page
        └── career.ejs                   Career Page 
        └── careerapply.ejs
        └── contact.ejs                  Contact Page
        └── createJob.ejs
        └── createmanagement.ejs
        └── creditcard.ejs               Services/Credit Card Page
        └── dashboard.ejs
        └── editJob.ejs
        └── editmanagement.ejs
        └── home.ejs                     Home Page
        └── homeloan.ejs                 Services/Home Loan Page
        └── jobs.ejs
        └── leads.ejs
        └── loanpage.ejs
        └── login.ejs                    Login Page
        └── management.ejs
        └── micro.ejs                    Services/Micro Loan Page
        └── personal.ejs                 Services/Personal Loan Page
        └── resume.ejs
        └── resumes.ejs
        └── services.ejs                 Services Page
        └── signup.ejs
```
