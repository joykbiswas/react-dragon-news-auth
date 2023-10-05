import PropTypes from "prop-types";
import { AiFillEye } from 'react-icons/ai';
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details, img, name, published_date,number,rating, author } =
    news;

  return (
    <div className="border-2 mb-12">
      <div className=" mb-12 ">
        <div className="bg-red-100">
          <div className="flex   mx-6 w-full py-4 ">
            <div>
              <img className="w-14 rounded-full" src={author.img} alt="" />
            </div>
            <div className="ml-4">
              <h3>{author.name}</h3>
              <p>{author.published_date}</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-lg space-y-4 mx-6">
          <h2 className="card-title">{title}</h2>
          <figure>
            <img className="w-full h-80" src={image_url} alt="Shoes" />
          </figure>
          <div className="space-y-5">
            <p>
              {details.length > 200 ? (
                <p>
                  {details.slice(0, 200)}{" "}
                  <Link 
                   
                    className="text-blue-500 font-semibold"
                    to={`/news/${_id}`}
                  >
                    
                    Read more...
                  </Link>
                </p>
              ) : (
                <p> {details}</p>
              )}
            </p>

            <div className="card-actions border-t-2  p-6 flex flex-col">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              {/* <StarRatings
          rating={rating.number}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={6}
          name='rating'
        /> */}
            </div>

            <div>
            <AiFillEye></AiFillEye>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  news: PropTypes.array,
};
