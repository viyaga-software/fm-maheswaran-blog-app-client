import Navbar from '../shared/Navbar'

const MainLayout = ({ children }) => {
    return (
        <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
            <Navbar />
            {/* Added top padding to prevent overlap */}
            <main className="mt-24 md:mt-28 space-y-8">{children}</main>
        </div>
    );  
}

export default MainLayout;
