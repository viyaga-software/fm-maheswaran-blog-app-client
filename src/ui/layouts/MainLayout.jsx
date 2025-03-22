import Navbar from '../shared/Navbar'

const MainLayout = ({ children }) => {
    return (
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
            <Navbar />
            <main className="mt-6 space-y-8">{children}</main>
        </div>
    )
}

export default MainLayout;
