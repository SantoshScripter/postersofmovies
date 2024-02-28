import React from 'react'

export function ErrorModel({ errorMsg, onClose }) {
    return (
        <div className='errorModel'>
            <div className='errorModelContainer'>
                <button className='closeIconConatiner' type='button' onClick={onClose}>
                    <span class="material-symbols-outlined">
                        close
                    </span>
                </button>
                <div className='errorText'>
                    Error
                </div>
                <div className='erroMsg'>{errorMsg}</div>
            </div>
        </div>
    )
}
