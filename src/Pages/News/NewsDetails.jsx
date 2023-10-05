import PropTypes from "prop-types";


const NewsDetails = ({newsDetail}) => {
    const {details,image_url} = newsDetail;
    // console.log(newsDetail);
    return (
        <div className=" p-4 space-y-3">
            <img className="w-full" src={image_url} alt="" />
            <p>{details}</p>
        </div>
    );
};

export default NewsDetails;

NewsDetails.propTypes = {
    newsDetail: PropTypes.array,
  };