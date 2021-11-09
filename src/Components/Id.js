import React from 'react'

export const Id = ({ IdLang }) => {

    const id = IdLang.slice(0, 10);
    console.log(IdLang);
    return (
        <div className="id_data">
            {id.map(post => {
                console.log(post);
                return (
                    <>
                        <div>
                            <h1 key={post.id}>{post.id}</h1>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Id