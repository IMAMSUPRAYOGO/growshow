'use client'

interface ToastProps {
  message: string
  show: boolean
}

export default function Toast({ message, show }: ToastProps) {
  return (
    <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      show ? 'translate-y-0 opacity-100 visible' : 'translate-y-4 opacity-0 invisible'
    }`}>
      <div className="metallic-card px-6 py-4 min-w-[300px] text-center">
        <p className="font-mono font-semibold text-primary-200">
          {message}
        </p>
      </div>
    </div>
  )
}