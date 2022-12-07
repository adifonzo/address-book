import CreateContact from './components/CreateContact';
import './App.css';

function App() {

  return (
    <div className="App">
      <CreateContact />
    </div>
  );
}

export default App;


// Pseudo Code 
// Step 1: Create 1 form with 3 inputs
  // Text
  // Telephone
  // Email
  // Add a button which will submit userInput

// Step 2: Prepare state to hold data from input form in an object
  // on click, run preventDefault() and store userInput data in state which then pushes to database
  // pull object from database and display (map function) it in the contact list on the lower half of the page

// Step 3: Error Handling
  // If the user makes a mistake with a contact, they can click the ‘delete’ button, which on click will remove information from both the app and the database.

// finally, add CSS 