import { useState } from "react"
import { Greetings } from "../Greetings"
import { ProductsTable } from "../ProductsTable"
import { Pagination } from "../Pagination"
import { Search } from "../Search"
import { table } from "./table"
import "./Customers.scss"

export const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const countPerPage = 8

  const lastPageIndex = currentPage * countPerPage
  const firstPageIndex = lastPageIndex - countPerPage
  const currentTableIndex = table.slice(firstPageIndex, lastPageIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="customers">
      <Greetings />
      <div className="customers__box">
        <div className="customers__header">
          <div className="customers__head-text">
            <h1 className="customers__title">All Customers</h1>
            <p className="customers__description">Active customers</p>
          </div>
          <Search />  
        </div>
        <ProductsTable table={currentTableIndex} />
        <div className="customers__bottom">
          <div className="customers__count">
            <p>Showing data 1 to 8 of  256K entries</p>
          </div>
          <Pagination 
            countPerPage={countPerPage}
            totalPages={table.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  )
}