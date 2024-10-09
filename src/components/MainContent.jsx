import React from 'react';
import propertiesData from '../data/properties.json';
import regionsData from '../data/regions.json';
import articlesData from '../data/articles.json';

const MainContent = () => {
  return (
    <div className="main col-sm-8">
      <h1 className="section-title">Featured Properties</h1>

      <div className="grid-style1 clearfix">
        {propertiesData.map((property, index) => (
          <div className="item col-md-4" key={index}>
            <div className="image">
              <a href={property.link}>
                <h3>{property.title}</h3>
                <span className="location">{property.location}</span>
              </a>
              <img src={property.image} alt="" />
            </div>
            <div className="price">
              <span>{property.price}</span>
              <p>per night</p>
            </div>
            <ul className="amenities">
              <li><i className="icon-bedrooms"></i> {property.bedrooms}</li>
              <li><i className="icon-bathrooms"></i> {property.bathrooms}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-sm-12">
          <h1 className="section-title">Popular Regions</h1>
          <div id="regions">
            {regionsData.map((region, index) => (
              <div className="item" key={index}>
                <a href={region.link}>
                  <img src={region.image} alt="" />
                  <h3>{region.name}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h1 className="section-title">Recent Articles</h1>
      <div className="grid-style1">
        {articlesData.map((article, index) => (
          <div className="item col-md-4" key={index}>
            <div className="image">
              <a href={article.link}>
                <span className="btn btn-default">
                  <i className="fa fa-file-o"></i> Read More
                </span>
              </a>
              <img src={article.image} alt="" />
            </div>
            <div className="tag">
              <i className={article.tagIcon}></i>
            </div>
            <div className="info-blog">
              <ul className="top-info">
                <li><i className="fa fa-calendar"></i> {article.date}</li>
                <li><i className="fa fa-comments-o"></i> {article.comments}</li>
                <li><i className="fa fa-tags"></i> {article.tags}</li>
              </ul>
              <h3>
                <a href={article.link}>{article.title}</a>
              </h3>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="center">
        <a href="#" className="btn btn-default-color">View All News</a>
      </div>
    </div>
  );
};

export default MainContent;
