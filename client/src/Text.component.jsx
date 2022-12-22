import {Component} from "react";

class Text extends Component{
    constructor(props){
        super();
        this.title = props.title;
    }
    render(){
        return <h1>{this.props.title}</h1>
    }
}
export default Text;