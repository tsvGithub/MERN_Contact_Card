import React, { useState, useEffect } from "react";
import "./styles.css";

//https://www.freecodecamp.org/news/getting-started-with-react-a-modern-project-based-guide-for-beginners-including-hooks-2/

// const App = () => {
//   const message = "Summer already is here!";
//   const handleClick = () => {
//     alert("you clicked the message!");
//   };
//   return (
//     <div>
//       <h1>Hello React World!</h1>
//       {/* <h2>{message}</h2> */}
//       {/* <h2 onClick={() => alert("you clicked the message!")}>{message}</h2> */}
//       <h2 onClick={handleClick}>{message}</h2>
//     </div>
//   );
// };

const App = () => {
  //data usually comes in the form of an array of data,
  //e.g. after an API call.
  //But how we we turn this data into ContactCard components?
  //We loop over an array using .map()
  //To display a list of components, we:
  //Loop over the array using .map()
  //For each item in the array, create a new ContactCard component
  //Pass the data from each object in the array to the ContactCard component as props
  // const contacts = [
  //   { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
  //   { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
  //   { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 },
  // ];

  //create a state variable to hold the data we get back from
  //the API. State is good for holding that that can change.
  //Here, we’re creating a state object, and initialising it
  //to an empty array.
  //When we make the API call, we’ll update the state to
  //contain a list of contacts. Since we named this state object
  //contacts, our rendering logic within the JSX will look for
  //this array.
  const [contacts, setContacts] = useState([]);

  /*useEffect hook runs on every re-render. 
However, we can configure it to only run under certain 
condition, e.g. when a component mounts, or if a 
variable changes.
If we want to specify “only run once” we pass in an empty 
array as a second argument. This is called a dependency array. 
When the dependency array is empty, this means the useEffect 
function will only run when the component loads for the first 
time. For additional re-renders, the useEffect function is 
skipped.*/
  useEffect(() => {
    //grab the data from the API.
    //Making a GET request to the randomuser API, asking for three results
    //Convert the response into JSON
    //Logging the JSON to the console.
    //This is similar to the "contacts" array we manually created
    //ourselves - just an array full of objects.
    //Let’s update our App components JSX to pick data from this object.
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //we want to store the results array in state
        //React does a re-render when the state changes
        setContacts(data.results);
        //When the component re-renders, the fetch api call
        //happens again, and sets the state.
        //Since the state updated, the component re-renders again
        //After the component re-renders, fetch is called again…
        //So how do we stop this?
        //We can fix this with another built in React Hook -
        //useEffect.
      });
  }, []); //<-- notice the empty array. This is called a dependency array.
  //If we want to specify useEFFECT “only run once” we pass in
  //an empty array as a second argument
  return (
    <>
      {/*We map over the array. For each object in the array, 
    we want to create a new ContactCard component.
    Pass the data from each object in the array "contact" to 
    the ContactCard component as props*/}
      {contacts.map((contact) => (
        //Props must be defined using quoted text or within braces
        <ContactCard
          // avatar="https://via.placeholder.com/150"
          avatar={contact.picture.large}
          //name=“Jenny Han”
          // name={contact.name}
          name={`${contact.name.first} ${contact.name.last} `}
          email={contact.email}
          // age={contact.age}
          //age={25}
          age={contact.dob.age}
        />
        //We are looping through the contacts variable
        //(which, at the moment is an empty array)
        //When we eventually save the response to state
        //we look through each object in the array, for the
        //appropriate things we need: in this case picture, name,
        //email, and dob objects.
        //Next we want to store the results array in state (in our
        //fetch function), so JSX can loop over it (using the map()
        //function) and render some ContactCards.
      ))}
    </>
  );
};

//USE STATE HOOK
//the useState() hook gives us a function to update the state
// Let’s wire this up to a button, which, when clicked, will
//toggle showing the age on the contact card.
const ContactCard = (props) => {
  //We can store whether the age should be shown or not in
  //state by using the useState hook within the component.
  const [showAge, setShowAge] = useState(false);
  //useState object gives us a variable with the current value,
  //and a function that lets us change that value.
  //When we call useState we can define an initialvalue (in this
  //case, false).
  //We use destructuring assignment on the useState hook to get
  //these.
  //The first variable lets us access the state value,
  //the second one lets us change it.
  return (
    <>
      <div className="contact-card">
        {/*<img src="https://via.placeholder.com/150" alt="profile" /> */}
        <img src={props.avatar} alt="profile" />
        <div className="user-details">
          {/*<p>Name: Stitch</p> */}
          <p>Name: {props.name}</p>
          {/*<p>Email: stitch@barcelona.com</p> */}
          <p>Email: {props.email}</p>
          {/*What this is doing is calling the setShowAge function 
          (which we get from the useState hook) 
          to change the value of show age to the opposite of what it currently is. */}
          <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>
          {/* if the showAge variable is true, render the age, 
          if not, render nothing */}
          {/*{showAge === true ? <p>Age: 25</p> : null}  */}
          {showAge && <p>Age: {props.age}</p>}
        </div>
      </div>
    </>
  );
};
export default App;
