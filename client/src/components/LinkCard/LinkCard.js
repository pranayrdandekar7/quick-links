import "./LinkCard.css"

function LinkCard({title,target,slug,views,createdAt}) {
  return (
    <>
    
   <div className="link-card">
   <h2 className="link-title"> {title} </h2>
    {target}
    {slug}
    {views}
    {createdAt}
    </div>
    </>
  )
}

export default LinkCard