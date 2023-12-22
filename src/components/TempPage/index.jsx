import "./TempPage.scss"

export const TempPage = ({message}) => {
  return ( 
    <div className="temporary-page">
      <div className="temporary-page__messagee-box">
        {message}
      </div>
    </div>
   );
}