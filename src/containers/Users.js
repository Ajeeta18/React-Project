import React, {useState} from 'react';
function Users(){
    const [users,setUsers] = useState([
       {name:'Ajeeta',age:21},
       {name: 'Bhumika', age:22}
    ])
    return(
        <div>
            <h2>Users </h2>
            <ul>
                {
                    users.map((user,index)=>{
                        return <li>{user.name},{user.age}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Users;