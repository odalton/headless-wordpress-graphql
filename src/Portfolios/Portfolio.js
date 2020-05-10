import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class Portfolio extends Component {
  render() {
    const props = this.props;

    if (!props.data.portfolio) {
      return <p>Loading...</p>;
    }

    console.log({ props });

    return (
      <div>
        <h2>{props.data.portfolio.title}</h2>
        <span>{props.data.portfolio.portfolioMeta.languages}</span>
        <span>{props.data.portfolio.portfolioMeta.type}</span>
      </div>
    );
  }
}

const GetPortfolioBySlug = gql`
  query getPortfolioBySlug($slug: String) {
    portfolio: portfolioBy(uri: $slug) {
      title
      portfolioMeta {
        languages
        type
      }
    }
  }
`;

export default graphql(GetPortfolioBySlug, {
  options: (props) => {
    const slug = props.match.params.slug;
    return {
      variables: {
        slug,
      },
    };
  },
})(Portfolio);
