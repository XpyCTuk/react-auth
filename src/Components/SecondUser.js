import React from 'react'


const SecondUser = (props) => {
    console.log(props)

    return (
        <div>
            Authorized {props.counter_2}
        </div>
    )
}
export default SecondUser