import { useCallback } from 'react'
import { defaultUser, defaultRepos } from './utils/mock'
import RepoCards from './components/RepoCards'
import UserInfo from './components/UserInfo'
import debounce from 'just-debounce-it'
import Search from './components/Search'
import useGetData from './services/useGetData'
function App() {

  const { 
    getName, 
    getUser, 
    username, 
    user, 
    repos, 
    setUsername } = useGetData({defaultUser, defaultRepos})
  const handleSearch = (name) => {
    debouncedSearch(name)
  }

  const debouncedSearch = useCallback(
    debounce((name) => {
      if (name.trim() !== '') {
        getName(name);
      } else {
        setUsername({})
      }
  }, 300), [])

  

  return (
    <>
      <main className=''>
        <Search handleSearch={handleSearch} username={username} getUser={getUser} />
        <section className='flex flex-col gap-10 bg-background min-h-dvh'>
          {
            user && (
              <UserInfo user={user} />
            )

          }
          <RepoCards repos={repos} />
        </section>
      </main>
    </>
  )
}

export default App
