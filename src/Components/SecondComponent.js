import React from 'react'

export const SecondComponent = (props) => {
    return (
        <div>
            <title>2</title>
            Второй компонент
            <div>
                <p> name:Это Второй компонент {props.name}</p>
            </div>
        </div>
    )
}

export default SecondComponent