import React from 'react'
// import Data from './Data/Data.json';

export const SecondaryData = ({ data }) => {

    const Selected = data.slice(0, 10);

    return (
        <div className="secondary_data">
            {Selected.map(post => {
                return (
                    <>
                        <div key={post.email}>
                            <h4>{post.email}</h4>
                            <h5>{post.gender}</h5>
                            <h6>{post.ip_address}</h6>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default SecondaryData
