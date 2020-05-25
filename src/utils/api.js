import axios from 'axios'

const urlPrefix = 'https://us-central1-lyvo-4c9fa.cloudfunctions.net/app'

export const httpPost = async (apiEndpoint, postData) => {
  await axios({
    method: 'POST',
    url: `${urlPrefix}${apiEndpoint}`,
    data: postData,
    config: { headers: { 'Content-Type': 'application/json' } }
  })
}

export const httpGet = async (apiEndpoint, params) => {
  const resp = await axios.get(`${urlPrefix}${apiEndpoint}`, {
    params
  })
  return resp.data
}
