import { useState } from 'react'
import Modal from '@/components/Modal'

function AnchorModal({
   anchorText = 'Click Me',
   modalTitle,
   children
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

export default AnchorModal
