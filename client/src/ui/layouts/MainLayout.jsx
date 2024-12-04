import Navbar from '../shared/Navbar'

const MainLayout = ({ children }) => {
    return (
        <div className='px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64'>
            <Navbar />
            {children}
        </div>
    )
}

export default MainLayout
