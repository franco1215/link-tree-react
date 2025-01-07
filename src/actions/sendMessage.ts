'use server'

export async function sendMessage(chatCode: string, message: string): Promise<Response> {
  console.log(`Sending message to chat ${chatCode}: ${message}`);
  
  const url = `https://stream.scaleup.com.br/player/v1/chats/codes/${chatCode}/streams`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: {
          text: message
        }
      })
    });

    console.log(`Response status: ${response.status}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error response: ${errorText}`);
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
    }

    return response;
  } catch (error) {
    console.error('Error in sendMessage:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to send message: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred while sending the message');
    }
  }
}

