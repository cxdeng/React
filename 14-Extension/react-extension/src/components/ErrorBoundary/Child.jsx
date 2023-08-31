import React from 'react'

export default function Child() {
    // const [users, setUsers] = React.useState(
    //     [
    //         { id: '001', name: 'Jack', age: 21 },
    //         { id: '002', name: 'Tom', age: 22 },
    //         { id: '003', name: 'Jerry', age: 23 },
    //     ]
    // )

    const [users, setUsers] = React.useState()
    console.log(users);
    return (
        <div>
            <h2>This is Child Component</h2>
            {
                users.map((userObj) => {
                    return <h4 key={userObj.id}>{userObj.name}, {userObj.age}</h4>
                })
            }
        </div>
    )
}
