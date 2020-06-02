import React, { useState, useEffect } from "react";
import "./styles.css";

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
  // const contacts = [
  //   { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
  //   { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
  //   { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 },
  // ];
  const [contacts, setContacts] = useState([]);
  {
    /*useEffect hook runs on every re-render. However, we can 
configure it to only run under certain condition, e.g. when a 
component mounts, or if a variable changes.
If we want to specify “only run once” we pass in an empty 
array as a second argument.
  */
  }
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContacts(data.results);
      });
  }, []);
  return (
    <>
      {/*we map over the array. For each object in the array, 
    we want to create a new ContactCard component.*/}
      {contacts.map((contact) => (
        <ContactCard
          // avatar="https://via.placeholder.com/150"
          avatar={contact.picture.large}
          name={`${contact.name.first} ${contact.name.last} `}
          // name={contact.name}
          email={contact.email}
          age={contact.dob.age}
          // age={contact.age}
        />
      ))}
      {/* <ContactCard /> */}
      {/* <ContactCard avatar="https://via.placeholder.com/150" name="Jenny Han" email="jenny.han@notreal.com" age={25} />
      <ContactCard avatar="https://via.placeholder.com/150" name="Jason Long" email="jason.long@notreal.com" age={45} />
      <ContactCard
        avatar="https://via.placeholder.com/150"
        name="Peter Pan";
        email="peter.pan@neverland.com"
        age={100}
      /> */}
    </>
  );
};

const ContactCard = (props) => {
  const [showAge, setShowAge] = useState(false);
  return (
    <>
      {/* <div className="contact-card">
        <img src="https://via.placeholder.com/150" alt="profile" />
        <div className="user-details">
          <p>Name: Stitch</p>
          <p>Email: stitch@barcelona.com</p>
          <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>

          //{/* {showAge === true ? <p>Age: 25</p> : null} */}
      {/* {showAge && <p>Age: 500</p>}
        </div>
      </div> */}

      <div className="contact-card">
        <img src={props.avatar} alt="profile" />
        <div className="user-details">
          <p>Name: {props.name}</p>
          <p>Email: {props.email}</p>
          <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>
          {showAge && <p>Age: {props.age}</p>}
        </div>
      </div>
    </>
  );
};
export default App;
