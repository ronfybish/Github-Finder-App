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
    comments,
    thumbnail
  } = product;
  
  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/devtools' className='btn btn-light'>
        Back To Search
      </Link>
      <div className='card grid-2'>
        {/* <div className='all-center'>
          {image_url && <img
            src={image_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />}
          <h1>{name}</h1>
          <p>Made by: {user.name}</p>
        </div> */}
        <div>
          {tagline && (
            <Fragment>
              <h3>Bio</h3>
              <p>{tagline}</p>
            </Fragment>
          )}
          <a href={discussion_url} target="_blank" rel="noopener noreferrer" className='btn btn-dark my-1'>
            Visit Tool 
          </a>
          {/* <ul>
            <li>
              {user.website_url && (
                <Fragment>
                  <strong>Website: </strong> {user.website_url}
                </Fragment>
              )}
            </li>
          </ul> */}
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Comments: {comments_count}</div>
        <div className='badge badge-success'>Up Votes: {votes_count}</div>
      </div>
      {/* <Comments comments={comments} /> */}
    </Fragment>
  );
};

export default Product;
