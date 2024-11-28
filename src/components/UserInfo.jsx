const UserInfo = ({ user }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col sm:flex-row w-[75%] min-w-72 gap-16 pt-4 '>
                <div className='flex flex-col w-36'>
                <img src={user.avatar_url} alt={user.name} className='w-28 h-28 relative border-background border-8 rounded-xl top-[-55px] bg-black'/>
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

export default UserInfo