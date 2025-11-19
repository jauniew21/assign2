import { Link } from 'react-router-dom'

const Header = (props) => {
    return(<div className="flex relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <span className=''>Logo</span>
                    </div>

                    <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <Link to="/home" className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white'>Home</Link>
                                <p className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white'>Women</p>
                                <p className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white'>Men</p>
                                <p className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white'>Browse</p>
                                <p className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white'>About</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Link to="/cart">Cart</Link>
                    </div> 
                </div>
            </div>
        </div>
    </div>)
}

export default Header;