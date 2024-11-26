import { useState } from 'react'

function App() {

  const defaultUser = {
    name : 'rubenbot07',
    bio: 'Frontend developer',
    avatar_url: 'https://avatars.githubusercontent.com/u/148891626?v=4',
    followers: 10,
    following: 10,
    location: 'Colombia',
  }

  const defaultRepos = [
    {
      name: 'github-profile-search',
      description: 'Search for github profile',
      html_url: 'https://github.com/rubenbot07/github-profile-search',
      stargazers_count: 0,
      forks_count: 0,
      license: null,
      updated_at: '2023-05-31T20:00:00Z',
    },
    {
      name: 'github-profile-search',
      description: 'Search for github profile',
      html_url: 'https://github.com/rubenbot07/github-profile-search',
      stargazers_count: 0,
      forks_count: 0,
      license: null,
      updated_at: '2023-05-31T20:00:00Z',
    },
    {
      name: 'github-profile-search',
      description: 'Search for github profile',
      html_url: 'https://github.com/rubenbot07/github-profile-search',
      stargazers_count: 0,
      forks_count: 0,
      license: null,
      updated_at: '2023-05-31T20:00:00Z',
    },
    {
      name: 'github-profile-search',
      description: 'Search for github profile',
      html_url: 'https://github.com/rubenbot07/github-profile-search',
      stargazers_count: 0,
      forks_count: 0,
      license: null,
      updated_at: '2023-05-31T20:00:00Z',
    }
  ]
  const [user, setUser] = useState(defaultUser)
  const [repos, setRepos] = useState(defaultRepos)

  return (
    <>
      <main className=''>
        <section className='bg-hero-image h-72 bg-cover bg-center pt-6'>
          <div className="mx-auto  flex bg-background items-center gap-2 p-4 w-[540px] rounded-lg">
            <span>🔍</span>
            <input type="search" placeholder="username" className="bg-transparent w-full placeholder-text-secondary outline-none font-semibold text-lg text-text"/>
          </div>
        </section>
        <section className=' bg-background'>
          {
            user && (
              <div className='flex flex-col items-center'>
                <div className='flex w-[75%] min-w-72 gap-8 py-4'>
                  <div>
                    <img src={user.avatar_url} alt={user.name} className='w-32 h-32 relative border-background border-8 rounded-lg top-[-60px]'/>
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
          <div>hola</div>
        </section>
      </main>
    </>
  )
}

export default App
