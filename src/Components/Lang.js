import React from 'react'


export const Lang = ({ IdLang }) => {

    const lang = IdLang.slice(0, 10);
    console.log(IdLang);
    return (
        <div className="lang_data">
            {lang.map(post => {
                return (
                    <>
                        <div>
                            <h2>{post.language}</h2>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Lang