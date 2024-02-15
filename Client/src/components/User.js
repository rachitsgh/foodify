const User = (props)=>{
    const {name}=props;
    return (
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h3>location:Chandigarh</h3>
            <h4>contact:@rachitsgh.10</h4>
        </div>
    )
}

export default User;