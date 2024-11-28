import { useState, useCallback } from 'react'
import { defaultUser, defaultRepos } from './utils/mock'
import ChieldAltIcon from './icons/ChiledAltIcon'
import NestingIcon from './icons/NestingIcon'
import StarIcon from './icons/StarIcon'
import SearchIcon from './icons/SearchIcon'
import timeAgo from './utils/timeAgo'
import debounce from 'just-debounce-it'
function App() {
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
  const getName = async (name) => {
    const responseUsername = await fetch(`https://api.github.com/users/${name}`)
    const dataUsername = await responseUsername.json()
    setUsername(dataUsername)
    console.log(dataUsername)
  }

  const getUser = async (name) => {
    const responseUser = await fetch(`https://api.github.com/users/${name}`)
    const dataUser = await responseUser.json()
    setUser(dataUser)
    console.log(dataUser)
    const responseRepos = await fetch(`https://api.github.com/users/${name}/repos`)
    const dataRepos = await responseRepos.json()
    setRepos(dataRepos)
    console.log(repos.map(repo => repo.license.name))
  }

  
  const [username, setUsername] = useState({})
  const [user, setUser] = useState(defaultUser)
  const [repos, setRepos] = useState(defaultRepos)

  return (
    <>
      <main className=''>
        <section className='flex flex-col gap-2 bg-hero-image h-72 bg-cover bg-center pt-6 px-4'>
          <div className="mx-auto  flex bg-background items-center gap-2 p-4 w-[80%] sm:w-[600px] rounded-lg">
            <SearchIcon />
            <input onChange={(e) => handleSearch(e.target.value)} type="search" placeholder="username" className="bg-transparent w-full placeholder-text-secondary outline-none font-semibold text-lg text-text"/>
          </div>
          {
            username.id && (
              <div onClick={() => getUser(username.login)} className="mx-auto flex items-center gap-4 p-2 w-[80%] sm:w-[600px] rounded-lg bg-stats">
                <img src={username.avatar_url} alt={username.name} className='w-14 h-14 rounded-lg' />
                <div>
                  <h3 className='text-lg font-bold text-text'>
                    {username.name || username.login}
                  </h3>
                  <p className='text-text-secondary'>{username.bio}</p>
                </div>
              </div>
            )
          }
        </section>
        <section className='flex flex-col gap-10 bg-background min-h-dvh'>
          {
            user && (
              <div className='flex flex-col items-center'>
                <div className='flex flex-col sm:flex-row w-[75%] min-w-72 gap-16 pt-4 '>
                  <div className='flex flex-col w-36'>
                    <img src={user.avatar_url} alt={user.name} className='w-32 h-32 relative border-background border-8 rounded-lg top-[-50px] bg-black'/>
                    <div className='w-[75%] min-w-72'>
                      <h2 className='text-3xl font-bold text-text'>{user.name || user.login}</h2>
                      <p className='text-text-secondary font-normal'>{user.bio}</p>
                    </div>
                  </div>
                  <div className='flex gap-4 w-[80%] flex-wrap font-semibold'>
                    <p className='flex gap-5 bg-stats h-min py-4 px-4 rounded-2xl text-text-secondary'>
                      <span className='border-r-text-secondary border-r-[1px] pr-5'>Location</span>
                      <span className='text-text'>{user.location}</span>
                    </p>
                    <p className='flex gap-5 bg-stats h-min py-4 px-4 rounded-2xl text-text-secondary'>
                      <span className='border-r-text-secondary border-r-[1px] pr-5'>Followers</span>
                      <span className='text-text'>{user.followers}</span>
                    </p>
                    <p className='flex gap-5 bg-stats h-min py-4 px-4 rounded-2xl text-text-secondary'>
                      <span className='border-r-text-secondary border-r-[1px] pr-5'>Following</span>
                      <span className='text-text'>{user.following}</span>
                    </p>
                  </div>
                </div>
              </div>
            )

          }
          <section className='mx-auto grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-10 sm:w-[75%] w-[80%]'>
            {
              repos?.map((repo) => (
                <a href={repo.html_url} target='_blank' key={repo.id}>
                  <div className='flex flex-col gap-2 bg-custom-gradient p-4 rounded-lg'>
                    <h3 className='text-xl text-text'>{repo.name}</h3>
                    <p className='text-text-secondary'>{repo.description}</p>
                    <div className='flex gap-2 text-text-secondary'>
                      {
                        repo.license?.name && (
                          <p className='flex gap-1'>
                            <ChieldAltIcon/> {repo.license?.spdx_id}
                          </p>
                        )
                      }
                      <p className='flex gap-1'><NestingIcon /> {repo.forks_count}</p>
                      <p className='flex gap-1'><StarIcon /> {repo.stargazers_count}</p>
                      <span>Updated {timeAgo(new Date(repo.updated_at))}</span>
                    </div>
                  </div>
                </a>

              ))
            }
          </section>
        </section>
      </main>
    </>
  )
}

export default App
