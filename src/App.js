import React from 'react'
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
    setDarkMode(prevState => !prevState)
  }
  return (
    <div>
      <Nav 
        darkMode={darkMode}
        handleClick={toggleDarkMode} 
      />
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
