import { getCategories } from "@/lib/strapi"
import Introduction from "./introduction"


const CategoriesPage = async () => {
    const categories = await getCategories({ page: 1, pageSize: 10 });
    if(categories.error) return <p>Something went wrong</p>

    return (
        <div className="max-w-6xl mx-auto mxmt-4 flex flex-col gap-4">
            <Introduction categories={categories.data} />
        </div>
    )
}

export default CategoriesPage
