import { Action } from '@components/Action'
import { Profile } from '@components/Profile'
import { Repository } from '@/components/Repository'
import { Item } from '@/components/Repository/Item'
import { Wrapper } from '@/components/Wrapper'
import { useSearch } from './useSearch'
import { EmptyState } from '@components/EmptyState'

export const Search = () => {
  const {
    userData,
    handleSearchUser,
    setSearch,
    search,
    repositoryData,
    isLoading,
  } = useSearch()

  return (
    <Wrapper>
      <Action
        handleChange={setSearch}
        handleSearch={handleSearchUser}
        value={search}
      />
      {!userData ? (
        <EmptyState isLoading={isLoading} />
      ) : (
        <>
          <Profile
            description={userData.bio}
            imageUrl={userData.avatar_url}
            name={userData.name}
            user={`@${userData.login}`}
          />
          <Repository>
            {repositoryData.map((repo) => (
              <Item
                key={repo.name}
                repositoryDescription={repo.description}
                repositoryName={repo.name}
                repositoryUrl={repo.html_url}
              />
            ))}
          </Repository>
        </>
      )}
    </Wrapper>
  )
}
