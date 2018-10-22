import React from 'react';
import './Components.css';

const ColorPicker = () => (
  <div className="colorPicker">
    <label>방 색상</label>
    <p>
      방에서 보여질 색을 선택하세요. <br />
      다른 팀이 먼저 선택한 색은 선택할 수 없어요.
    </p>
    <input type="radio" name="color1" value="red" />
    <input type="radio" name="color2" value="orange" />
    <input type="radio" name="color3" value="yellow" />
    <input type="radio" name="color4" value="green" />
    <input type="radio" name="color5" value="blue" />
    <input type="radio" name="color6" value="navy" />
    <input type="radio" name="color6" value="purple" />
    <input type="radio" name="color5" value="blue" />
    <input type="radio" name="color6" value="navy" />
    <input type="radio" name="color6" value="purple" />
  </div>
);

export default ColorPicker;
