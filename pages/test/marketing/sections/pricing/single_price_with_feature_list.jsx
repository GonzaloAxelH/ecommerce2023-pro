/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  'Vitae in pulvinar odio id utobortis in inter.',
  'Sed sed id viverra viverra augue eget massa.',
  'Urna, gravida amet, a, integer venenatis.',
  'Lobortis sed pharetra amet vitae eleifend.',
  'Ullamcorper blandit a consequat donec elit aoreet.',
  'Dolor quo assumenda.',
  'Esse rerum distinctio maiores maiores.',
  'Eos enim officiis ratione.',
  'Tempore molestiae aliquid excepturi.',
  'Perspiciatis eveniet inventore eum et aliquam.',
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="pb-16 xl:flex xl:items-center xl:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-gray-900">Everything you need for</span>
              <span className="text-indigo-600">$99 a month</span>
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Includes every feature we offer plus unlimited projects and unlimited users.
            </p>
          </div>
          <a
            href="#"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0"
          >
            Get started today
          </a>
        </div>
        <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
          <div>
            <h2 className="text-lg font-semibold text-indigo-600">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">All-in-one platform</p>
            <p className="mt-4 text-lg text-gray-500">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
              nec. Urna, sed a lectus elementum blandit et.
            </p>
          </div>
          <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:col-span-2 xl:mt-0">
            <ul role="list" className="divide-y divide-gray-200">
              {features.slice(0, 5).map((feature, featureIdx) =>
                featureIdx === 0 ? (
                  <li key={feature} className="flex py-4 md:py-0 md:pb-4">
                    <CheckIcon className="h-6 w-6 flex-shrink-0 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ) : (
                  <li key={feature} className="flex py-4">
                    <CheckIcon className="h-6 w-6 flex-shrink-0 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                )
              )}
            </ul>
            <ul role="list" className="divide-y divide-gray-200 border-t border-gray-200 md:border-t-0">
              {features.slice(5).map((feature, featureIdx) =>
                featureIdx === 0 ? (
                  <li key={feature} className="flex py-4 md:border-t-0 md:py-0 md:pb-4">
                    <CheckIcon className="h-6 w-6 flex-shrink-0 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ) : (
                  <li key={feature} className="flex py-4">
                    <CheckIcon className="h-6 w-6 flex-shrink-0 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
