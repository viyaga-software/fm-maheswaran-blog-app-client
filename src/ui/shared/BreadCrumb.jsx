"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter((segment) => segment);

    return (
        <nav className="text-sm text-muted-foreground py-1 md:py-2">
            <ul className="flex items-center gap-2">
                <li>
                    <Link href="/" className="text-primary hover:text-accent transition">
                        Home
                    </Link>
                </li>
                {pathSegments.map((segment, index) => {
                    const path = "/" + pathSegments.slice(0, index + 1).join("/");
                    const isLast = index === pathSegments.length - 1;

                    return (
                        <li key={path} className="flex items-center gap-2">
                            <span className="text-muted">•</span>
                            {!isLast ? (
                                <Link href={path} className="text-primary hover:text-accent transition">
                                    {decodeURIComponent(segment)}
                                </Link>
                            ) : (
                                <span className="text-foreground">{decodeURIComponent(segment)}</span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
