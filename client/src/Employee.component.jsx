import { Component } from "react";
class Employee extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>
                Employee
                <h1>{this.props.fName}</h1>
                <h1>{this.props.lName}</h1>
                <h1>{this.props.date.getFullYear()}</h1>
                <img src={this.props.pic} alt=""/>
            </div>
        )
    }
}

export default Employee;