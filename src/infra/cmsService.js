import { useEffect } from "react";

const TOKEN = '591a3efbaa14f584ac990a94370837'

export const ShowPosts = () => {
  useEffect(() => {
    async function cmsService({
      query
    }) {
      try {
        const pageContentResponse = await fetch('https://graphql.datocms.com/', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN,
          },
          body: JSON.stringify({
            query,
          })
        })
          .then(async (respostaDoServer) => {
            const body = await respostaDoServer.json();
            return body;
          })
        console.log(pageContentResponse)

      } catch (err) {
        throw new Error(err.message)
      }
    }
  }, [] )
  return {
    data: pageContentResponse.data,
  }
}
