import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const BreadCrumb = ({ prev, currentPage }) => {
    return (
        <Breadcrumb>
            {prev.map((page, index) => (
                <BreadcrumbItem key={index}>
                    <BreadcrumbLink asChild>
                        <Link href={page.path}>{page.name}</Link>
                    </BreadcrumbLink>
                    {index < prev.length - 1 && <BreadcrumbSeparator />}
                </BreadcrumbItem>
            ))}
            <BreadcrumbItem>
                <span className="text-blue-800">{currentPage}</span>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};

export default BreadCrumb;
