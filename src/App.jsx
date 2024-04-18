import Values from 'values.js';
import ColorList from './ColorList';
import Form from './Form';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (err) {
      toast.error(`Don't have a color: ${color}`);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />

      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;
