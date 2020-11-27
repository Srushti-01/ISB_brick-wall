import React from 'react';

import './style.css'
class Background extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            color: "white"
        };
    }

    changeBackgroundColor = (event) => {

        console.log("color selected by user ", event.target.value );
        const val = event.target.value;
        this.setState({
            selectedColor:val 
        });
    };

    //Overide
    render = ()=> {
        return(
            <div className="coll" style= { {
                backgroundColor: this.state.selectedColor }} >
                <div className="color_box">
                    <h1>Choose A Color</h1>
                    <input onChange = {this.changeBackgroundColor} type="color"/>
                    <h2>{this.state.selectedColor}</h2>
                </div>
            </div>
        )
    }
}

export default Background;