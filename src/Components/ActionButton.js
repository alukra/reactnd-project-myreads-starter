import React from 'react'

const ActionButton = (props) => {
    const { label } = props
    return (
        <div className="open-search">
            <button>{label}</button>
        </div>
    )
}

export default ActionButton