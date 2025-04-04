import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import { ChatBubbleLeftRightIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>SmartAdsBot - AI-Powered Facebook Messenger Ad Responder</title>
        <meta name="description" content="Automate your Facebook Messenger ad responses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-50 min-h-screen">
        <div className="relative overflow-hidden">
          <div className="relative pt-6 pb-16 sm:pb-24">
            <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Automate Your</span>
                  <span className="block text-blue-600">Facebook Ad Responses</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Engage leads instantly with AI-powered conversations. Connect multiple Facebook pages and never miss a potential customer.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  {!session ? (
                    <button
                      onClick={() => signIn('facebook')}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Connect Facebook Page
                    </button>
                  ) : (
                    <a
                      href="/dashboard"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Go to Dashboard
                    </a>
                  )}
                </div>
              </div>
            </main>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">All-in-one platform for Facebook Messenger automation</h2>
            </div>
            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className={clsx(
                      feature.iconBackground,
                      'absolute flex items-center justify-center h-12 w-12 rounded-md text-white'
                    )}>
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

const features = [
  {
    name: 'Multi-Page Support',
    description: 'Connect and manage multiple Facebook pages from a single dashboard.',
    icon: UserGroupIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    name: 'Smart Auto-Replies',
    description: 'AI-powered responses that engage your leads naturally and effectively.',
    icon: ChatBubbleLeftRightIcon,
    iconBackground: 'bg-green-500',
  },
  {
    name: 'Advanced Analytics',
    description: 'Track engagement, conversion rates, and optimize your responses.',
    icon: ChartBarIcon,
    iconBackground: 'bg-indigo-500',
  },
];
