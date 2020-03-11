/**
 * @name currentUser
 * @input none
 * @response currentUser: Object
 */
export const CURRENT_USER_QUERY = gql`
query currentUserQuery {
  currentUser {
    email
  }
}`;
