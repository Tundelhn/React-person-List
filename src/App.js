import React from 'react';
import './App.css';

const App = () => {
  return (
    <div  >
      <h1 style={{textAlign:"center", margin:"0.3rem auto",  width:"30%", backgroundColor:"#eeeeee"}}> Simple React Person List</h1>
      <PersonList />
    </div>
  );
};

const PersonList = () => {
  const people = [
    {
      img: 23,
      name: 'Ayodele Olumide Tunde',
      occupation: 'Software Developer'
    },
    {
      img: 65,
      name: 'Ayodele Oluseyi  samsoo',
      occupation: 'Banker'
    },
    {
      img: 79,
      name: ' Oluyemi Ayodele ',
      occupation: 'Lawyer'
    }
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} >
      this is the man with the divne touch od the masterof the univers
      </Person>
      <Person person={people[2]} />
    </section>
  );
};

const Person = props => {
  const { name, img, occupation } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div
      className="Person"
      >
        
      <img src={url} alt=""  />
      <div>
        <h4>{name}</h4>
        <h4>{occupation}</h4>
        <p>{children}</p>
        <button style={{ padding: '8px', border: '1px solid teal', borderRadius:"5px", backgroundColor:"teal", cursor:"pointer"  }}>
          More Details
        </button>
      </div>
    </div>
  );
};

export default App;
