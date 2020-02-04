import React, {Component} from 'react'


//Stateless functional components

const Phone=(props)=>{
    return(<p>{props.user.phone}</p>)
}

const User=(props)=>{
    return (
        <div>
            <h1>{props.user.name}</h1>
            {props.children}
        </div>
    )
}


class Users extends Component{
    constructor(){
        super();

        this.state={
            users:[],
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>{
            this.setState({
                users:users,
                loading:false
            })
        })
        .catch((err)=>{
            this.setState({
                loading:false,
                error:true
            })
        })
    }

    render(){
        if(this.state.loading==true){
            return(
                <div>
                    <h1>Users</h1>
                    <p>Loading.. Pleas wait</p>
                </div>
            )
        }

        if(this.state.error==true){
            return(
                <div>
                    <h1>Users</h1>
                    <p>Sorry.. Pleas try again later</p>
                </div>
            )
        }
        return(
            <div>
                <h1>Users</h1>
                {
                    this.state.users.map((user)=>{
                        return <User key={user.id} user={user}>
                                    <Phone user={user}/>
                                </User>
                    })
                }
            </div>
        )
    }
}

export default Users;