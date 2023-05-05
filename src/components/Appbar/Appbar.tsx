import React from 'react'
import Select from 'react-select'
import './style.css'
import Button from '../Button/Button'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function Appbar() {
    return (
        <div className='container'>
            <div className="row">
                <h1 className="logo">OnlyCats 2</h1>
                <Select className='select' options={options} />
            </div>
            <div className="row">
                <div className="controls">
                    <button>-</button>
                    <span>10</span>
                    <button>+</button>
                </div>
                <button className="gif-control">
                    .gif
                </button>
            </div>
        </div>
    )
}
export default Appbar;
