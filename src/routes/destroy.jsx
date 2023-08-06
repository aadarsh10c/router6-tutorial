
import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ params }) {
//   throw new Error( "Oh! Dang ")
  await deleteContact(params.contactId);
  return redirect("/");
}


