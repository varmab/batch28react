import React, {Component} from 'react'

class Wishlist extends Component{
    constructor(props){
        super(props);

        this.state={
            books:props.books
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            books:newProps.books
        })
    }

    render(){
        return(
            <div>
                <h1>Wishlist</h1>
                <p>Total:{this.state.books.length}</p>
            </div>
        )
    }
}

export default Wishlist;