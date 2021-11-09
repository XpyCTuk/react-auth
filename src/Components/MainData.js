import React from 'react'
// import Data from './Data/Data.json';


export const MainData = ({ data }) => {
    console.log(data)
    const Selected = data.slice(0, 10);

    return (
        <div className="main_data">
            {Selected.map(post => {
                console.log(post);
                return (
                    <>
                        <div>
                            <h1 key={post.id}>{post.id}</h1>
                            <h2 key={post.first_name}>{post.first_name}</h2>
                            <h3 key={post.last_name}>{post.last_name}</h3>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default MainData