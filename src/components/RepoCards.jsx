import NestingIcon from '../icons/NestingIcon'
import StarIcon from '../icons/StarIcon'
import timeAgo from '../utils/timeAgo'
import ChieldAltIcon from '../icons/ChiledAltIcon'

const RepoCards = ({ repos }) => {
    return (
        <section className='mx-auto grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-10 sm:w-[75%] w-[80%] pb-8'>
            {
              repos?.map((repo) => (
                <a href={repo.html_url} target='_blank' key={repo.id}>
                  <div className='flex flex-col gap-2 bg-custom-gradient p-4 rounded-lg'>
                    <h3 className='text-xl text-text'>{repo.name}</h3>
                    <p className='text-text-secondary truncate'>{repo.description}</p>
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
    );
};

export default RepoCards;