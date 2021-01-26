import { gql } from "@apollo/client";

export const SEND_CONTACTUS_EMAIL = gql`
  mutation sendContactUsEmail(
    $email: String!
    $name: String!
    $subject: String!
    $detail: String!
  ) {
    sendContactUsEmail(
      input: {
        email: $email
        name: $name
        subject: $subject
        detail: $detail
        to: MAHENDRA
      }
    ) {
      status
    }
  }
`;
