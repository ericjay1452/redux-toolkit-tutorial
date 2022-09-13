import React from 'react'

const Modal = () => {
  return (
    <div className='modal-container'>
        <div className = "modal">
            <h4>Remove all items from the Cart ?</h4>

            <div className='btn-container'>
                <button className = "confirm-btn btn" type='button'>Confirm</button>
                <button className = "clear-btn btn" type='button'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Modal