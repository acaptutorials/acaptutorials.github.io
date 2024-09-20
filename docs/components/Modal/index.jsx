import { useMemo } from 'react'
import { useTheme } from 'next-themes'
import PropTypes from 'prop-types'

function Modal({ children, title, isOpen = false, onClose }) {
  const { resolvedTheme } = useTheme()

  const modalBgStyle = useMemo(() => {
    const bg = resolvedTheme === 'dark'
      ? 'bg-neutral-800'
      : 'bg-neutral-50'

    return `${bg} rounded-lg shadow-lg p-6 max-w-md w-full`
  }, [resolvedTheme])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className={modalBgStyle}>
        <h2 className="text-xl font-semibold mb-4">
          {title}
        </h2>

        {children}

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-neutral-500 text-white rounded-lg px-4 py-2 hover:bg-neutral-600 transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default Modal
