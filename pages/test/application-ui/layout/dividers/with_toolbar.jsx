/* This example requires Tailwind CSS v2.0+ */
import { ChatBubbleBottomCenterTextIcon, PaperClipIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="isolate inline-flex -space-x-px rounded-md shadow-sm">
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <span className="sr-only">Edit</span>
            <PencilIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <span className="sr-only">Attachment</span>
            <PaperClipIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <span className="sr-only">Annotate</span>
            <ChatBubbleBottomCenterTextIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <span className="sr-only">Delete</span>
            <TrashIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </span>
      </div>
    </div>
  )
}
