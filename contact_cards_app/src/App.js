import React, { useState } from "react";
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
  return (
    <>
      {/* <ContactCard /> */}
      <ContactCard avatar="https://via.placeholder.com/150" name="Jenny Han" email="jenny.han@notreal.com" age={25} />
      <ContactCard avatar="https://via.placeholder.com/150" name="Jason Long" email="jason.long@notreal.com" age={45} />
      <ContactCard
        avatar="https://via.placeholder.com/150"
        name="Peter Pan"
        email="peter.pan@neverland.com"
        age={100}
      />
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
