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
const accounts = [
  { id: 'checking', name: 'Checking', description: 'CIBC ••••6610' },
  { id: 'savings', name: 'Savings', description: 'Bank of America ••••0149' },
  { id: 'mastercard', name: 'Mastercard', description: 'Capital One ••••7877' },
]

export default function Example() {
  return (
    <div>
      <h2 className="text-lg font-medium leading-6 text-gray-900">Transfer funds</h2>
      <p className="mt-1 text-sm text-gray-500">Transfer your balance to your bank account.</p>
      <fieldset className="mt-2">
        <legend className="sr-only">Bank account</legend>
        <div className="divide-y divide-gray-200">
          {accounts.map((account, accountIdx) => (
            <div key={accountIdx} className="relative flex items-start py-4">
              <div className="min-w-0 flex-1 text-sm">
                <label htmlFor={`account-${account.id}`} className="font-medium text-gray-700">
                  {account.name}
                </label>
                <p id={`account-${account.id}-description`} className="text-gray-500">
                  {account.description}
                </p>
              </div>
              <div className="ml-3 flex h-5 items-center">
                <input
                  id={`account-${account.id}`}
                  aria-describedby={`account-${account.id}-description`}
                  name="account"
                  type="radio"
                  defaultChecked={account.id === 'checking'}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
