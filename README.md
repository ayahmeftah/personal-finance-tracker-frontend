# Personal Finance Tracker - Frontend  

## Introduction  
This is the **frontend repository** for the Personal Finance Tracker application we created for Project 3 (MERN Stack) of General Assembly's Software Engineering Bootcamp.  
The app helps users manage their incomes, expenses, and budget through a simple interface. It provides visual insights with charts, transaction management, and profile settings.  

The backend repository will handle authentication, database management, and API services (link provided below).  

Below are some screeshots of the website

<img width="1919" height="902" alt="Image" src="https://github.com/user-attachments/assets/221505f7-cda5-4507-aee5-3cd586329fba" />

<img width="1896" height="907" alt="Image" src="https://github.com/user-attachments/assets/b0573f9d-4c2a-4a8f-a95a-8cb685e61794" />

---

## Backend Repository  
The backend repository can be found here:  
[Personal Finance Tracker - Backend](https://github.com/ayahmeftah/personal-finance-tracker-backend)  

---

## Features  
- **User Authentication** (Sign Up / Login with JWT support)  
- **Dashboard** with total balance, incomes, and expenses overview.
- **Add, Edit, and Delete Transactions** (incomes/expenses)  
- **Charts & Visual Insights** (powered by Recharts)  
- **Emoji Support** for personalized categories
- **CSV Export** for downloading all transactions by type
- **Profile Management** (edit or delete account, profile picture upload)  
- **Filter Transactions** filter transactions for quick navigation  

### Planning Material
- [Trello Board](https://trello.com/invite/b/68a0da9190e98701d5915321/ATTIc1e429efc052514d44747f139336719b63618C83/budgetwise-mern-stack-website)

---

## Getting Started  

### Prerequisites  
- Node.js and npm installed  

### Installation  
1. Clone the repository  
   ```bash  
   git clone https://github.com/ayahmeftah/personal-finance-tracker-frontend.git  
   ```

2. Navigate into the project folder  
   ```bash  
   cd personal-finance-tracker-frontend 
   ``` 

3. Install dependencies  
   ```bash  
   npm install 
   ``` 

4. Create a `.env` file and set the backend API URL, for example:  
   ```env  
   VITE_BACK_END_SERVER_URL=http://localhost:5000  
   ```

5. Start the development server  
   ```bash  
   npm run dev  
   ```

---

## Attributions  
- **Charts**: [Recharts Simple Line Chart Example](https://recharts.org/en-US/examples/SimpleLineChart)  
- **Icons**: [Material UI Icons](https://mui.com/material-ui/material-icons/)  
- **Font**: [Fira Sans on Google Fonts](https://fonts.google.com/specimen/Fira+Sans)  
- **CSV Download Logic**: [Stack Overflow Discussion](https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side)  
- **Emoji Picker**: [Medium Guide](https://medium.com/@dmostoller/using-emoji-picker-react-959c06f0b436)  
- **Documentation**:  
  - [Recharts Documentation](https://recharts.org/en-US/)  
  - [Emoji Picker React Documentation](https://www.npmjs.com/package/emoji-picker-react)  

---

## Technologies Used  
- **React (Vite)** – Frontend framework
- **CSS** – Styling
- **JavaScript** – Programming language  
- **Node.js** – Runtime environment  
- **Express** – Backend framework  
- **MongoDB** – Database for storing data 

---

## Future Enhancements  
- Dark mode support  
- Multi-currency support  
- More advanced charts and filtering options  
- Budget planning and reminders 
