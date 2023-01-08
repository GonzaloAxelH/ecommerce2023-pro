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
    <div>
      <label htmlFor="name" className="ml-px block pl-4 text-sm font-medium text-gray-700">
        Name
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full rounded-full border-gray-300 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Jane Smith"
        />
      </div>
    </div>
  )
}
