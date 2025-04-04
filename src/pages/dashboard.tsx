import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { getFacebookPages } from '../utils/facebook';

interface FacebookPage {
  id: string;
  name: string;
  access_token: string;
}

export default function Dashboard() {
  const { data: session } = useSession();
  const [pages, setPages] = useState<FacebookPage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPages() {
      if (session?.accessToken) {
        try {
          const pagesData = await getFacebookPages(session.accessToken);
          setPages(pagesData);
        } catch (error) {
          console.error('Error loading pages:', error);
        }
        setLoading(false);
      }
    }

    loadPages();
  }, [session]);

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <p className="text-center text-sm text-gray-600">
              Please sign in to access the dashboard
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Connected Pages</h1>
          
          {loading ? (
            <p className="text-gray-600">Loading your Facebook pages...</p>
          ) : pages.length === 0 ? (
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  No Facebook Pages Connected
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>Connect a Facebook page to start automating your messenger responses.</p>
                </div>
                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Connect Facebook Page
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul role="list" className="divide-y divide-gray-200">
                {pages.map((page) => (
                  <li key={page.id}>
                    <div className="px-4 py-4 flex items-center sm:px-6">
                      <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                          <div className="flex text-sm">
                            <p className="font-medium text-blue-600 truncate">{page.name}</p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-5 flex-shrink-0">
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Configure
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
