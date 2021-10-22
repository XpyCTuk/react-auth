import React from 'react'

export const FirstComponent = (props) => {
    console.log(props);
    return (

        <div>
            <title>1</title>
            Первый компонент
            <div>
                <p> name:Это Первый компонент {props.name}</p>
            </div>
        </div>
    )
}

export default FirstComponent