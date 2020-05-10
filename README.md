# Headless Wordpress and GraphQL React Application.

1. Install wordpress & these plugins.

```
Advanced Custom Fields: Version 5.8.9 | By Elliot Condon
WP GraphiQL: Version 1.0.1 | By WPGraphQL, Digital First Media, Jason Bahl
WP GraphQL: Version 0.8.4 | By WPGraphQL
WPGraphQL for Advanced Custom Fields: Version 0.3.2 | By WPGraphQL, Jason Bahl
Wordpress Version : wordpress-5.4.1
```

2. Confirm the graphql endpoint is resolving and serving JSON.

```
http://domain.com/graphql
http://localhost:8888/wordpress/graphql
```

3. Setup a React Application with the following dependecies.

```
npx create-react-app headless-graphql && 
cd headless-graphql && 
npm install --save graphql graphql-tag react-apollo apollo-boost react-router-dom
```