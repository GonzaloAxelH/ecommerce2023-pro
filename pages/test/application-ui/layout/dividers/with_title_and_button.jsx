/* This example requires Tailwind CSS v2.0+ */
import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex items-center justify-between">
        <span className="bg-white pr-3 text-lg font-medium text-gray-900">Projects</span>
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <PlusIcon className="-ml-1.5 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>Button text</span>
        </button>
      </div>
    </div>
  )
}
