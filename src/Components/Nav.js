import {useState, useEffect, useRef} from 'react';
import TextContainer from './TextContainer';


const Nav = () => {

  const [permit, setPermit] = useState('enabled');
  const [color, setColor] = useState('black');
  const [size, setSize] = useState('12');
  const [fontFamily, setFontFamily] = useState('Nunito');

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    if(permit === 'disabled'){
      ref1.current.disabled = true;
      ref2.current.disabled = true;
      ref3.current.disabled = true;
    }else{
     ref1.current.disabled = false;
     ref2.current.disabled = false;
     ref3.current.disabled = false;
  }},[permit]);



  return (
    <div>
      
    <div className="nav_container">
      <select name="edit-text" className="edit_text" onChange={(e) => {setPermit(e.target.value)}}>
        <option value="enabled">Allow Edit</option>
        <option value="disabled">Edit not allow</option>
      </select>

      <select name="color-select" className="color_select" ref={ref1} onChange={(e) => {setColor(e.target.value)}}>
        <option value="black">Black</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
      </select>

      <select name="space-select" className="space_select" ref={ref2} onChange={(e) => {setSize(e.target.value)}}>
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
        <option value="18">18</option>
        <option value="20">20</option>
        <option value="22">22</option>
      </select>

      <select name="font_style" className="font_style" ref ={ref3} onChange={(e) => {setFontFamily(e.target.value)}}>
          <option value="Nunito">Nunito</option>
          <option value="sans-serif">Sans-serif</option>
          <option value="fantasy">fantasy</option>
          <option value="Georgia">Georgia</option>
          <option value="Cursive">Cursive</option>
        </select>
      
    </div>
    <TextContainer color= {color} size={size} fontFamily = {fontFamily}/>
    </div>
  );
};

export default Nav;
