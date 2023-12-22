import "./Status.scss"

export const Status = ({status}) => {
  const statusCheck = status ? "active" : "inactive"
  return ( 
    <div className={`status ${statusCheck}`}>
      {statusCheck}
    </div>
  );
}