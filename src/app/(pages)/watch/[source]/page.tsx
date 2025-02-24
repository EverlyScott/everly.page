import { NextPage } from "next";
import { notFound, redirect } from "next/navigation";

interface IProps {
  params: {
    source: string;
  };
}

const map = new Map();
map.set("confluence", "/performing/confluence/#videos");
map.set("show-choir", "/performing/show-choir/");

const Watch: NextPage<IProps> = ({ params }) => {
  const redirectPath = map.get(params.source);

  if (redirectPath) {
    return redirect(redirectPath);
  }

  return notFound();
};

export default Watch;
