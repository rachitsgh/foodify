import React, { useState } from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        // console.log(props);
        const {name}=props;
        this.state={
            count:0,
            userinfo:{
                name:"Dummy name",
                location:"dummy location",
                avatar_url:"dummy avatar url"
            }
        };
    }
    async componentDidMount(){
        //Api call
        const data=await fetch("https://api.github.com/users/rachitsgh");
        const json=await data.json();
        console.log(json?.name);
        this.setState({
            userinfo:json,
        })
    }
    render(){
        // const {name,location}=this.props;
        const {name,location,avatar_url}=this.state.userinfo;
        const {count}=this.state;
        return (
            <div className="user-card">
                {/* <h1>{this.state.count}</h1> */}
                <h1>{count}</h1>
                <button onClick={()=>{
                    // NEVER UPDATE STATE VARIABLE DIRECTLY
                    this.setState({
                        count:this.state.count+1
                    })
                }}>click me</button>
                <img src={avatar_url}/>
                {/* <h2>Name:{this.props.name}</h2> */}
                <h2>Name:{name}</h2>
                {/* <h3>location:{this.props.location}</h3> */}
                <h3>location:{location}</h3>
                <h4>contact:@rachitsgh.10</h4>
            </div>
        )
    }
}

export default UserClass;

/*
Constructor(dummy)
Render(dummy)
  <html>(dummy)
ComponentDidMount()
    <API Call>
    this.setState -> state variable is updated
----update
    render(APIs data)
    <html>(Api data)
    componentDidUpdate();

*/