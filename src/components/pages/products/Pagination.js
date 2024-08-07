
const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const handleClick = (pageNumber) => {
        onPageChange(pageNumber);
        window.scrollTo({top : 0, behavior : 'smooth'});
    };
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handleClick(i)}
                    className={i === currentPage ? 'active' : ''}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="pagination">
            {currentPage > 1 && (
                <button onClick={() => handleClick(currentPage - 1)}>Previous</button>
            )}
            {renderPageNumbers()}
            {currentPage < totalPages && (
                <button onClick={() => handleClick(currentPage + 1)}>Next</button>
            )}
        </div>
    );
};

export default Pagination;