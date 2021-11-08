import React from 'react'
import Data from './Data/Data.json';

export const MainData = () => {

    const Selected = Data.slice(0, 10);

    return (
        <div className="main_data">
            {Selected.map(post => {
                return (
                    <div key={post.id}>
                        <h1>{post.id}</h1>
                        <h2>{post.first_name}</h2>
                        <h3>{post.last_name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default MainData