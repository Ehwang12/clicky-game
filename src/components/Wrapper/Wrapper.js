import React from 'react'

function Wrapper(props) {
    
        return (
            <div className="container container-fluid">
                {props.children}
            </div>
        )
    
}

export default Wrapper
