import { AxiosResponse } from 'axios'

import api from './config'

export interface ProjectProps {
  name: string
  description: string
  language: string
  link: string
}

const repos = ['Barbearia_web', 'CoffeDelivery', 'gym', 'igniteShop']

async function RequestPromise(name: string) {
  return new Promise((resolve) => {
    try {
      const res = api.get(name)
      res && resolve(res)
    } catch (error) {
      console.log(error)
    }
  })
}

async function getRepos() {
  const JsonRepos: ProjectProps[] = []

  for (const item of repos) {
    const res: AxiosResponse = await RequestPromise(item)
    if (res) {
      JsonRepos.push({
        name: res.data.name,
        description: res.data.description,
        language: res.data.language,
        link: res.data.html_url,
      })
    }
  }
  return JsonRepos
}

export { getRepos }
