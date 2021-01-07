import React from 'react';
import { useCookies } from 'react-cookie';

import NameForm from './NameForm';

function App() {
  const [cookies, setCookie] = useCookies(['name'], 100);

  function onChange(newName) {
    setCookie('name', newName, { path: '/' });
  }
  function getCookie(){
    window.fetch("/newCookie")
  }

  return (
    <div>
      <NameForm name={cookies.name} onChange={onChange} />
      {cookies.name && <h1>Hello {cookies.name}!</h1>}
      <button onClick = {getCookie}>Get a cookie from the server!</button>
    </div>
  );
}

export default App;
