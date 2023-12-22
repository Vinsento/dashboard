import "./Pagination.scss"

export const Pagination = ({countPerPage, totalPages, paginate, currentPage}) => {
  const pageNumbers = []

  for(let i = 1; i < totalPages / countPerPage; i++) {
    pageNumbers.push(i)
  }

  const start = () => {
    if(currentPage - 2 < 0) {
      return 0
    }
    if(currentPage === 1) {
      return 0
    }
    if(currentPage == pageNumbers.length) {
      return pageNumbers.length - 5
    }

    if(currentPage == 39) {
      return pageNumbers.length - 5
    }

    if(currentPage == 38) {
      return pageNumbers.length - 5
    }

    if(currentPage + 2 > pageNumbers.length) {
      return -(currentPage + 2) + currentPage - 2
    }

    if(currentPage === 3) {
      return 1
    }
    return currentPage - 2
  }

  const finish = () => {
    if(currentPage + 2 > pageNumbers.length) {
      return pageNumbers.length
    }

    if(currentPage == pageNumbers.length) {
      return pageNumbers.length
    }

    if(currentPage == 38) {
      return pageNumbers.length
    }

    if(currentPage == 1) {
      return 5
    }

    if(currentPage - 2 < 0) {
      return (-(currentPage - 2) + currentPage) + 2
    }

    if(currentPage === 2) {
      return 5
    }

    if(currentPage === 3) {
      return 5
    }

    return currentPage + 1
  }

  const temporaryPages = pageNumbers.slice(start(), finish())
  return ( 
    <ul className="pagination">
      <li 
        className="pagination__page"
        onClick={() => paginate(currentPage - 1 < 1 ? 1 : currentPage - 1)}
      >
        {"<"}
      </li>

      {currentPage !== 1 && currentPage !== 2 && <li onClick={() => paginate(1)} className="pagination__page">{pageNumbers[0]}</li>}
      {currentPage !== 1 && currentPage !== 2 && currentPage !== 3 &&<li className="pagination__dots">...</li>}

      {temporaryPages.map(num => {
          return (
            <li 
              className={currentPage === num ? 'pagination__page active' : 'pagination__page'} 
              onClick={() => paginate(num)}
              key={num}
            >
              {num}
            </li>
          )
        
      })}

      {currentPage < pageNumbers.length - 2 && <li className="pagination__dots" onClick={() => paginate(currentPage + 1)}>...</li>} 
      {currentPage < pageNumbers.length - 2 && <li onClick={() => paginate(pageNumbers.length)} className="pagination__page">{pageNumbers[pageNumbers.length - 1]}</li>}
      <li 
        className="pagination__page" 
        onClick={() => paginate(currentPage + 1 > pageNumbers.length ? pageNumbers[pageNumbers.length - 1] : currentPage + 1)}
      >
        {">"}
      </li>
    </ul>
   );
}