import Link from "next/link";

interface PaginationBarProps {
    currentPage: number;
    totalPages: number;
}

export default function PaginationBar({
    currentPage,
    totalPages,
}: PaginationBarProps) {
    const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));
    const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));

    const numberdPageItems: JSX.Element[] = []

    for (let page = minPage; page <= maxPage; page++) {
        numberdPageItems.push(
            <Link
            href={"?page=" + page}
            key={page}
            className={`join-item btn ${
                currentPage === page ? "btn-active pointer-events-none": ""
            }`}
            >
                {page}
            </Link>
        )
    }
    return(
        <>
        <div className="join hidden sm:block">
            {numberdPageItems}
        </div>
        <div className="join block sm:hidden">
            {currentPage > 1 &&
                <Link href={"?page=" + (currentPage -1)} className="btn join-item">
                    «
                </Link>
            }
            <button className="join-item btn pointer-events-none">
                Pagina {currentPage}
            </button>
            {currentPage < totalPages && (
                <Link href={"?page=" + (currentPage + 1)} className="btn join-item">
                    »
                </Link>
            )}
        </div>
        </>
    )
}