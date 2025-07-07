Phone Number Validator
A clean and efficient web application for validating and looking up details of phone numbers using the Numlookupapi.

Table of Contents
About the Project

Features

Getting Started

Prerequisites

Installation

API Key Setup

Running the Application

Usage

Technologies Used

Credits

License

About the Project
This project provides a simple, formal, and user-friendly interface to validate phone numbers and retrieve associated details such as country, location, carrier, and line type. It leverages the Numlookupapi for its backend data. Designed with a clean aesthetic, it offers a professional tool for quick phone number information retrieval.

Features
Phone Number Validation: Checks if a given phone number is valid.

Detailed Lookup: Retrieves comprehensive information including:

Number (E.164, local, international formats)

Country Code and Name

Geographic Location

Carrier Information

Line Type (mobile, landline, VoIP)

Rechargeable status

Intuitive User Interface: Clean, responsive design for ease of use on various devices.

Real-time Status Updates: Provides feedback during search operations.

Error Handling: Displays clear messages for API errors or invalid inputs.

Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
A web browser (e.g., Chrome, Firefox, Edge).

A text editor (e.g., VS Code, Sublime Text).

A local web server: Due to browser security policies (CORS), you cannot simply open index.html directly from your file system. You need to serve the files via a local HTTP server.

Python: If you have Python installed, you can use its built-in server.

Node.js: If you have Node.js installed, you can use a package like serve.

VS Code Live Server Extension: A very convenient option if you use VS Code.

Installation
Clone the repository (or download the files):
If this project is in a Git repository, clone it:

git clone [repository_url]
cd phone-number-validator

Otherwise, ensure you have the index.html, style.css, and script.js files in the same directory.

API Key Setup
Obtain an API Key:

Go to Numlookupapi.com and sign up for an account to get your API key.

Update script.js:

Open the script.js file in your text editor.

Locate the line:

const API_KEY = "YOUR_ACTUAL_API_KEY_HERE";

Replace "YOUR_ACTUAL_API_KEY_HERE" with your actual API key obtained from Numlookupapi.

// Example (do not use this key in production):
const API_KEY = "num_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxx";

Running the Application
Navigate to the project directory in your terminal or command prompt.

Start a local web server:

Using Python:

python -m http.server 8000

Then, open your browser and go to http://localhost:8000/.

Using Node.js (serve package):
If you don't have serve installed, install it globally:

npm install -g serve

Then, in your project directory:

serve .

It will typically tell you the address, often http://localhost:3000/.

Using VS Code Live Server Extension:
Open index.html in VS Code, right-click on it, and select "Open with Live Server."

Usage
Once the application is running in your browser, you will see an input field.

Enter a phone number in E.164 format (e.g., +12069220880, +442079460123).

Click the "Validate" button or press Enter.

The results table will populate with the validation details, or an error message will be displayed if the lookup fails.

Technologies Used
HTML5: For the basic structure of the web page.

CSS3: For styling and responsive design.

JavaScript (ES6+): For dynamic functionality and API interaction.

Numlookupapi: The external API used for phone number validation.

Google Fonts (Roboto): For professional typography.

Credits
This project was developed by:

Abod-X

DangerousAngel

License
Distributed under the MIT License. See LICENSE for more information. (Note: A LICENSE file is not included in the provided code, but it's good practice to add one for open-source projects.
