import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Comments from './Comments'
import ProducthuntContext from '../../context/producthunt/producthuntContext';


const Product = ({ match }) => {
  const producthuntContext = useContext(ProducthuntContext);
  const {loading,getProduct,product}=producthuntContext
  
  useEffect(() => {
    getProduct(match.params.id);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    comments_count,
    tagline,
    votes_count,
    discussion_url,
    user,
    description,
    comments,
    thumbnail
  } = product;
  

  if (loading) return <Spinner />;
  console.log(user)
  return (
    <Fragment>
      <Link to='/devtools' className='btn btn-light'>
        Back To Search
      </Link>
      <div className='card grid-2'>
        <div className='all-center'>
           {thumbnail&& <img
            src={thumbnail.image_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />}
          <h1>{name}</h1>
          {tagline && (
            <Fragment>
              <h3>{tagline}</h3>
            </Fragment>
          )}
        </div>
        <div>        
          <a href={discussion_url} target="_blank" rel="noopener noreferrer" className='btn btn-dark my-1'>
            Visit Tool 
          </a>
          <span >
            {user&&<h3>Made by: {user.name}</h3>}
            <br/>
          </span>
          <ul>
          <li>
              {description && (
                <p>
                  <strong><h3>description:</h3> </strong> {description}
                </p>
              )}
              <br/>
            </li>
            <li>
              {user && (
                <Fragment>
                  <strong>Website: </strong> {user.website_url}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Comments: {comments_count}</div>
        <div className='badge badge-success'>Up Votes: {votes_count}</div>
      </div>
      {comments && <Comments comments={comments} />}
    </Fragment>
  );
};

export default Product;
