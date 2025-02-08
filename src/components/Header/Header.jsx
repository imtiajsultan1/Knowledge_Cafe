import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 border-gray-200 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="profile img 404" />
        </header>
    );
};

export default Header;