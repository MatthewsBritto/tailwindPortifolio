import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/repos/matthewsbritto/',
  headers: {
    Authorization: 'B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',
  },
})

export default api
