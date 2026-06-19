const { useState, useEffect, Component } = require("react");

//1. SRP (Single responsibility principle) :- A component should do one thing and do it well

// Bad: Mixing data fetching and presentation
function UserProfile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("user/data")
      .then((value) => value.json())
      .then((data) => setUser(data));
  }, []);
  if (!user) return <p>Loading...</p>;
  return <h1>{user.name}</h1>;
}

// Good: Hook handles data, component handles UI
function useUser() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("api/user")
      .then((data) => data.json())
      .then((val) => setUser(val));
  }, []);
  return user;
}

function userProfile() {
  const user = useUser();
  if (!user) return <p>Loading...</p>;
  return <h1>{user.name}</h1>;
}

//2. Open/Closed principle (OCP) :- component should be open for extension but closed for modification
// Bad: Modifying internal code for every new requirement
function Button({ text, isIcon }) {
  return (
    <Button>
      {isIcon ? <i className="icon" /> : null}
      {text}
    </Button>
  );
}

//fix:- Open to extension via composition
function Button({children, ...props}){
    return <button {...props}>{children}</button>
}
const TextBtn = () => <Button>Click Me</Button>
const InfoBtn = () => <Button><i className="info" />Info</Button>

// 3. Liskov substitution principle :- Component should be replacable with their subtypes
// Bad: Breaks standard HTML input contract
function HeavyInput({textvalue}){
    return <input value={textvalue} className="heavyInput" />
}
// fix: Behaves exactly like a normal input
function HeavyInput({...nativeProps}){
    return <input {...nativeProps} className="heavyInput" />
}

// 4. Interface segreration priciple :- a component should not depend on props it doesn't use
// Bad: Component depends on an entire object it barely uses
function UserTitle({user}){
    return <p>{user.name}</p>
}
// fix
function UserTitle({name}){
    return <p>{name}</p>
}

// 5. Dependency inversion principle :- Component shouldn't depend on module (library)
// Bad: Directly tied to an external library instance
import axios from 'axios'
function fetchData(){
    const getData = () => axios.post('/save', { data: 'payload' });
    return <button onClick={getData} >Get Data</button>
}

// fix
function DataFetch({fetcher}){
    return <button onClick={fetcher} >Get Data</button>
}

{/* <DataFetch fetcher={()=>fetch('data')} />
<DataFetch fetcher={()=>axios.post('data')} /> */}