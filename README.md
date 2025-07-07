# Phone Number Validator

A clean and efficient web application for validating and looking up details of phone numbers using the Numlookupapi.

![Phone Number Validator Screenshot](https://via.placeholder.com/800x500?text=Phone+Number+Validator+Screenshot) 
*(Consider adding an actual screenshot here)*

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [API Key Setup](#api-key-setup)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)

## About the Project
This project provides a simple, formal, and user-friendly interface to validate phone numbers and retrieve associated details such as country, location, carrier, and line type. It leverages the Numlookupapi for its backend data. Designed with a clean aesthetic, it offers a professional tool for quick phone number information retrieval.

## Features
- **Phone Number Validation**: Checks if a given phone number is valid
- **Detailed Lookup**: Retrieves comprehensive information including:
  - Number (E.164, local, international formats)
  - Country Code and Name
  - Geographic Location
  - Carrier Information
  - Line Type (mobile, landline, VoIP)
  - Rechargeable status
- **Intuitive User Interface**: Clean, responsive design for ease of use on various devices
- **Real-time Status Updates**: Provides feedback during search operations
- **Error Handling**: Displays clear messages for API errors or invalid inputs

## Getting Started
To get a local copy up and running, follow these simple steps.

### Prerequisites
- A web browser (e.g., Chrome, Firefox, Edge)
- A text editor (e.g., VS Code, Sublime Text)
- A local web server (due to CORS policies)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/phone-number-validator.git
cd phone-number-validator
