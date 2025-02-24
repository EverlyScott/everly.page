import { NextPage } from "next";
import { redirect } from "next/navigation";

const Photo: NextPage = () => {
  return redirect("https://photos.everly.page");
};

export default Photo;
