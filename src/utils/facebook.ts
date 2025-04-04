export async function getFacebookPages(accessToken: string) {
  const response = await fetch(
    `https://graph.facebook.com/v19.0/me/accounts?access_token=${accessToken}`
  );
  const data = await response.json();
  return data.data || [];
}

export async function setupMessengerProfile(pageId: string, accessToken: string) {
  const response = await fetch(
    `https://graph.facebook.com/v19.0/${pageId}/messenger_profile`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        get_started: {
          payload: 'GET_STARTED',
        },
        greeting: [
          {
            locale: 'default',
            text: 'Hello! Thanks for reaching out. How can we help you today?',
          },
        ],
      }),
    }
  );
  return response.json();
}
