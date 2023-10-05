import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import NewsDetails from "./NewsDetails";


const News = () => {
    const [newsDetail, setNewsDetail] = useState([]);

    const {id} =useParams();
    
    const news =useLoaderData()
    
    useEffect(()=>{
        const findNews = news.find((item) =>item._id === id)
        setNewsDetail(findNews)
    },[news,id])

    
    return (

        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    
                    <NewsDetails newsDetail={newsDetail}></NewsDetails>
                </div>
                <div>
                <RightSideNav></RightSideNav>
                </div>

            </div>
            
        </div>
    );
};

export default News;