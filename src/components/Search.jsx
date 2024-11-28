import SearchIcon from '../icons/SearchIcon'
const Search = ({ handleSearch, username, getUser }) => {
    return (
        <section className='flex flex-col gap-2 bg-hero-image md:h-64 h-48 bg-cover bg-center pt-6 px-4'>
          <div className="mx-auto  flex bg-background items-center gap-2 p-4 w-[80%] sm:w-[600px] rounded-lg">
            <SearchIcon />
            <input onChange={(e) => handleSearch(e.target.value)} type="search" placeholder="username" className="bg-transparent w-full placeholder-text-secondary outline-none font-semibold text-lg text-text"/>
          </div>
          {
            username.id && (
              <div onClick={() => getUser(username.login)} className="mx-auto flex items-center cursor-pointer gap-4 p-2 w-[80%] sm:w-[600px] rounded-lg bg-stats">
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
    )
}

export default Search