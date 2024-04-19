import React from 'react';
import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(`#${hex}`);
      toast.success('Color copied to clipboard');
    } else {
      toast.error('Failed to copy color to clipboard');
    }
  };

  return (
    <article
      onClick={saveToClipboard}
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};

export default SingleColor;
