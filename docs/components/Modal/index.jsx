import { useMemo } from 'react'
import { useTheme } from 'next-themes'

function Modal({ title, children, isOpen, onClose }) {
  const { resolvedTheme } = useTheme()

  if (!isOpen) return null

  const modalBgStyle = useMemo(() => {
    const bg = resolvedTheme === 'dark'
    ? 'bg-neutral-800'
    : 'bg-neutral-50'

    return `${bg} rounded-lg shadow-lg p-6 max-w-md w-full`
  }, [resolvedTheme])

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

export default Modal