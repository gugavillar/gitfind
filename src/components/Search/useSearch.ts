import { octokit } from '@/services/github'
import { useState } from 'react'

type RepositoryData = Array<{
  description: string | null
  html_url: string
  name: string
}>

type UserData = {
  avatar_url: string
  bio: string | null
  name: string | null
  login: string
}

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [repositoryData, setRepositoryData] = useState<RepositoryData>([])

  const handleSearchUser = async () => {
    if (!search) return

    try {
      setIsLoading(true)
      const [userName, repository] = await Promise.all([
        octokit.request('GET /users/{username}', {
          username: search,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        }),
        octokit.request('GET /users/{username}/repos', {
          username: search,
          sort: 'updated',
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        }),
      ])
      setUserData(userName.data)
      setRepositoryData(repository.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    handleSearchUser,
    isLoading,
    userData,
    setSearch,
    search,
    repositoryData,
  }
}
