import React from 'react'

export const ThirdComponent = (props) => {
    return (
        <div>
            <title>3</title>
            Третий компонент
            <div>
                <p> name:Это Третий компонент {props.name}</p>
            </div>
        </div>
    )
}

export default ThirdComponent