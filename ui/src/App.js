import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLogo } from './reducer';
import './App.css'

const App = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getLogo()), [dispatch]);

  if (state.apiVersion === '1') {
    return (
      <div>
        <h1>CHIMERA V1</h1>
        <img src="/Chimera_graphic_black.svg" alt="Black Logo" />
      </div>
    )    
  } else if (state.apiVersion === '2') {
    return (
      <div>
        <h1>CHIMERA V2</h1>
        <img src="/Chimera_graphic_color.svg" alt="Color Logo" />
      </div>
    )
  } else {
    return (
      <div>
        <h1>CHIMERA</h1>
      </div>
    )
  }
};

export default App;
