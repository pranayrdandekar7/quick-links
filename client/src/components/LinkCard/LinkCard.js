import "./LinkCard.css"
import eye_icon from "./visible-opened-eye.png"

function LinkCard({ title, target, slug, views, createdAt }) {
  return (
    <>

      <div className="link-card">
        <h3 className="link-card-title"> {title || "No Title"} </h3>

        <a href={`${process.env.REACT_APP_API_URL}/${slug}`}
          target="_blank"
          className="slug_url">
          <span className="link-key">Short URL  :</span>
          {process.env.REACT_APP_API_URL}/{slug}</a>

        <a href={target}
          target="_blank"
          className="target_url" >
          <span className="link-key">Target URL :</span>
          {target.substring(0, 50)}{target.length > 50 ? "..." : null}
        </a>

        <span className="link-card-views">
          <img src={eye_icon} className="eye-icon" />
          {views}</span>

        <span className="created-date">
          {new Date(createdAt).toLocaleString()}
        </span>
      </div>
    </>
  )
}

export default LinkCard