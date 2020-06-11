import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.levelChange = this.levelChange.bind(this);
  }
  levelChange(level) {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;

    const ColorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));

    return (
      <div className='Palette'>
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          onAfterChange={this.levelChange}
          step={100}
        />
        {/* Navbar goes here */}
        <div className='Palette-colors'>{ColorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}
export default Palette;
