import React, { useState } from 'react'
import "./Home.css"
import axios from "axios"
import toast , {Toaster} from "react-hot-toast"

function Home() {

    // const [title,setTitle] =useState("") ;
    // const [target,setTarget] =useState("") ;
    // const [slug,setSlug] =useState("") ;
    // we can optimize this 3 use state in a single object

    const [linkData, setlinkData] = useState({
        title: "",
        target: "",
        slug: ""
    })

    const shortenURL =async ()=>{
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/link`,
            linkData)
    
    if(response.data.success){
        toast.success("link shortened successfully")

        setlinkData({
            title:"",
            target:"",
            slug:""
        })
    }
    else{
        toast.error("response.data.message")
    }
}

    return (
        <div>
            <h1 className=''>"Simplify Your Links: Short, Sweet, and Shareable!"</h1>
            

            <form className='link-form'>
            <p className='form-heaidng'>shorten your links in a seconds</p>
                <input
                    type="text"
                    placeholder='Title'
                    value={linkData.title}
                    onChange={(e) => {
                        setlinkData({
                            ...linkData,
                            title: e.target.value
                        })
                    }}
                    className='linkdata'
                />
                <input
                    type="text"
                    placeholder='Target URL'
                    value={linkData.target}
                    onChange={(e)=>{
                        setlinkData({
                            ...linkData,
                            target:e.target.value
                        })
                    }}
                    className='linkdata'
                />
                <input
                    type="text"
                    placeholder='Slug'
                    value={linkData.slug}
                    onChange={(e)=>{
                        setlinkData({
                            ...linkData,
                            slug:e.target.value
                        })
                    }}
                    className='linkdata'
                />

                <button 
                className='btn'
                 type='button'
                 onClick={shortenURL}
                 >shorten</button>
            </form>
            <Toaster/>
        </div>
    )
}

export default Home