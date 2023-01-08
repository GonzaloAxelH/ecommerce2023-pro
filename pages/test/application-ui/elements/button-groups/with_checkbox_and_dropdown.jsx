/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <span className="inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2">
        <label htmlFor="select-all" className="sr-only">
          Select all
        </label>
        <input
          id="select-all"
          type="checkbox"
          name="select-all"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
      </span>
      <label htmlFor="message-type" className="sr-only">
        Select message type
      </label>
      <select
        id="message-type"
        name="message-type"
        className="-ml-px block w-full rounded-l-none rounded-r-md border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        <option>Unread messages</option>
        <option>Sent messages</option>
        <option>All messages</option>
      </select>
    </span>
  )
}
