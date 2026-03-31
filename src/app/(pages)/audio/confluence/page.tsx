import { NextPage } from "next";
import { redirect } from "next/navigation";

const Confluence: NextPage = () => {
  return redirect("https://confluenceband.com/player");
};

export default Confluence;
