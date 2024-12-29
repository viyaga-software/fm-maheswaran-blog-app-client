import Link from "next/link"


const BreadCrumb = ({ prev, currentPage }) => {
    return (
        <div className="flex items-center gap-4">
            {prev.length && prev.map((page, index) => {
                return (
                    <div key={index} className="flex items-center gap-4">
                        <Link href={page.path}>{page.name}</Link>
                        <span>•</span>
                    </div>
                )
            })}
            <span className="text-blue-800">{currentPage}</span>
        </div>
    )
}

export default BreadCrumb
