import React from 'react'


const TrueUser = (props) => {
    console.log(props)

    return (
        <div>
            Authorized {props.counter}
        </div>
    )
}
export default TrueUser