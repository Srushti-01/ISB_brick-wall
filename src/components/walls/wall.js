import React from 'react' ;
import Brick from '../brick/brick'
import './style.css'
class Wall extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            bricks:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
        }
    }
    addMoreBricks = () => {
        const newBricksArray = [...this.state.bricks]
        newBricksArray.push(newBricksArray.length + 1);
        // this.state.bricks.push();
        // console.log(this.state.bricks);
        this.setState({
            bricks:newBricksArray
        });
    };
    // render method returns what is being displayed on the browser
    render =() => {
        return(
            <div className="wall-container">
                {
                    this.state.bricks.map((brick) => {
                        return <Brick key={brick} name={brick}/>
                    })
                }
                <button onClick={this.addMoreBricks} className="btn">Add More</button>
            </div>
         
        )
    }
}

export default Wall;