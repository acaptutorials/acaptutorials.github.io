import { useState } from 'react'
import PropTypes from 'prop-types'

import Modal from '@/components/Modal'

function AnchorModal({
  children,
  anchorText = 'Click Me',
  modalTitle
}) {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <a
        href="#"
        className="underline hover:text-blue-600"
        onClick={(e) => {
          e.preventDefault()
          setModalOpen(prev => !prev)
        }}>
        {anchorText}
      </a>

      <Modal
        title={modalTitle ?? anchorText}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(prev => !prev)}
      >
        {children}
      </Modal>
    </>
  )
}

AnchorModal.propTypes = {
  children: PropTypes.node,
  anchorText: PropTypes.string,
  modalTitle: PropTypes.string
}

export default AnchorModal
