/* This example requires Tailwind CSS v2.0+ */
import { Bars4Icon, CalendarIcon, CheckIcon, PlusIcon, UsersIcon, ViewColumnsIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'List view',
    icon: Bars4Icon,
    description:
      'Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.',
  },
  {
    name: 'Boards',
    icon: ViewColumnsIcon,
    description:
      'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
  },
  {
    name: 'Calendar',
    icon: CalendarIcon,
    description:
      'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
  },
  {
    name: 'Teams',
    icon: UsersIcon,
    description:
      'Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.',
  },
]
const checklist = [
  'Unlimited projects',
  'No per user fees',
  'Unlimited storage',
  '24/7 support',
  'Cancel any time',
  '14 days free',
]

export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-indigo-700" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-8">
        <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
          <div className="mx-auto max-w-lg lg:mx-0">
            <h2 className="text-lg font-semibold text-indigo-600">Full-featured</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              Everything you need to talk with your customers
            </p>
            <dl className="mt-12 space-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="bg-indigo-700 py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:items-center lg:justify-end lg:bg-none lg:px-0 lg:pl-8">
          <div className="mx-auto w-full max-w-lg space-y-8 lg:mx-0">
            <div>
              <h2 className="sr-only">Price</h2>
              <p className="relative grid grid-cols-2">
                <span className="flex flex-col text-center">
                  <span className="text-5xl font-bold tracking-tight text-white">$99</span>
                  <span className="mt-2 text-base font-medium text-indigo-200">Setup fee</span>
                  <span className="sr-only">plus</span>
                </span>
                <span
                  className="pointer-events-none absolute flex h-12 w-full items-center justify-center"
                  aria-hidden="true"
                >
                  <PlusIcon className="h-6 w-6 text-indigo-300" aria-hidden="true" />
                </span>
                <span>
                  <span className="flex flex-col text-center">
                    <span className="text-5xl font-bold tracking-tight text-white">$4</span>
                    <span className="mt-2 text-base font-medium text-indigo-200">Per month</span>
                  </span>
                </span>
              </p>
            </div>
            <ul role="list" className="grid gap-px overflow-hidden rounded sm:grid-cols-2">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center space-x-3 bg-indigo-800 bg-opacity-50 py-4 px-4 text-base text-white"
                >
                  <CheckIcon className="h-6 w-6 text-indigo-300" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-4 text-lg font-medium leading-6 text-indigo-600 hover:bg-indigo-50 md:px-10"
            >
              Get started today
            </a>
            <a href="#" className="block text-center text-base font-medium text-indigo-200 hover:text-white">
              Try our Lite plan for free
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
