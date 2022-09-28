import React from 'react'
import { BsX } from 'react-icons/bs'
import ReactModal from 'react-modal'
import Modal from 'react-modal'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '50%',
    marginRight: '-50%',
    backgroundColor: 'rgb(35 31 31)',
    transform: 'translate(-50%, -50%)'
  }
}

ReactModal.defaultStyles.overlay.backgroundColor = 'rgb(20 17 17 / 75%)'

export default function ModalDialog ({
  visible,
  toggleModal,
  fuel,
  total,
  totalPerPassenger
}) {
  return (
    <div>
      <Modal
        isOpen={visible}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel='Results Modal'
      >
        <div className='d-flex'>
          <BsX onClick={toggleModal} className='btn-close' />
        </div>
        <div className='modal-body'>
          <div className='d-lg-flex'>
            <div className='form-group'>
              <h3>Total fuel:</h3>
              <span className='result'>{fuel.toFixed(2)}L</span>
            </div>
            <div className='form-group'>
              <h3>Total cost:</h3>
              <span className='result'>Php {total.toFixed(2)}</span>
            </div>
            <div className='form-group'>
              <h3>Per passenger:</h3>
              <span className='result'>Php {totalPerPassenger.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
