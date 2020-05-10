import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

const Portfolios = () => (

  

    <Query query={gql`
    {
        portfolios {
          edges {
            node {
              title
              slug
              portfolioMeta {
                image {
                  mediaDetails {
                    sizes {
                      name
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
      
    `
    }>
    {
        ({ loading, error, data }) => {
            if( loading ){
                return (<h1>loading...</h1>);
            }
            return (
                <div>
                    {
                        data.portfolios.edges.map((portfolio, key) => {
                            const images = portfolio.node.portfolioMeta.image.mediaDetails.sizes;
                            const imageThumbnail = images.find(element => element.name === 'medium');                        
                            return (
                                <div key={key}>                         
                                    <h2>{portfolio.node.title}</h2>
                                    <img alt="" src={imageThumbnail.sourceUrl} />
                                    <Link to={`/portfolio/${portfolio.node.slug}`}>
                                        Learn More.
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>

                
            );
        }
    }
    </Query>
)

export default Portfolios;