import gql from "graphql-tag";

export const GET_Me = gql`
{
  me{
    _id 
    username 
    email
    bookCount 
    savedBooks {
      bookID 
      authors
      description
      title
      image 
      link
    }
  }
}
`;