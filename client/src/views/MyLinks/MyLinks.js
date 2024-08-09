import { useState, useEffect } from "react";
import "./MyLinks.css"
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"
import LinkCard from "./../../components/LinkCard/LinkCard.js";


function MyLinks() {

  const [links, setLinks] = useState([]);

  const fetchAllLinks = async () => {

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/links`)
    setLinks(response.data.data)
    toast.success(`All Links Fetched Successfully`)
  }

  useEffect(() => {
    fetchAllLinks();
  }, [])  //empty dependancy for work on page load
  return (<>

    <h2 style={{textAlign:'center',fontSize:30,color:'#7f5af0'}}>My Links</h2>
    <div>
      {links.map((link, i) => {

        const { title,
          target,
          slug,
          views,
          createdAt
        } = link

        return <LinkCard
          title={title}
          target={target}
          slug={slug}
          views={views}
          createdAt={createdAt}
        />

      })}
    </div>
    <Toaster />

  </>
  )

}

export default MyLinks