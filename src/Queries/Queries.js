import gql from "graphql-tag";

const listProducts = gql`
      {
        listProducts{
            name
            price
            weight
          }
      }
    `

export {
    listProducts
}