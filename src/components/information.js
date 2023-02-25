import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: "Find Jobs",
    description: "Jobs from over the web and posted by employers on the site.",
    icon: ArrowPathIcon,
  },
  {
    name: "Courses",
    description:
      "Get recommended courses to upskill yourself to get ready to work!!",
    icon: FingerPrintIcon,
  },
  {
    name: "Community",
    description:
      "Connect with Job Seekers and Employers with similar interests.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Marketplace",
    description: "Make use of the marketplace to expand your businesses.",
    icon: LockClosedIcon,
  },
];

export default function Info() {
  return (
    <div className="bg-white py-24 sm:py-32 divide-y">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Unlock Success
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to jumpstart you career.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The unemployment tackling app is designed to help individuals
            overcome the challenges of finding a job by providing them with
            everything they need to succeed. The app offers a range of features,
            including job search tools, career advice, interview preparation
            tips, and more. With the app's comprehensive resources and support,
            users can gain a competitive edge in their job search and
            confidently pursue their dream career. Whether you're just starting
            out in your career or looking to make a career change, this app can
            help you achieve your goals and land your dream job.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
