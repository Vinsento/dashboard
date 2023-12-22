import { Status } from "../Status";
import "./ProductsTable.scss";

export const ProductsTable = ({table}) => {
  return ( 
    <div className="products-table">
      <table className="products-table__table">
        <thead>
          <tr className="products-table__head-row">
            <th>Customer Name</th>
            <th className="products-table__mobile_hide">Company</th>
            <th className="products-table__mobile_hide">Phone number</th>
            <th>Email</th>
            <th className="products-table__mobile_hide">Country</th>
            <th className="products-table__status">Status</th>
          </tr>
        </thead>
        <tbody>
        {table.map((row, i) => {
          return (
            <tr key={i}>
              <td>{row.name}</td>
              <td className="products-table__mobile_hide">{row.company}</td>
              <td className="products-table__mobile_hide">{row.phone}</td>
              <td>{row.email}</td>
              <td className="products-table__mobile_hide">{row.country}</td>
              <td className="products-table__status">
                <Status status={row.status} />  
              </td>
            </tr>
          )
        })}
        </tbody>                                               
      </table>
    </div>
   );
}