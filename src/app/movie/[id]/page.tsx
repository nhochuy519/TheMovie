"use client";

import { usePathname, useSearchParams } from "next/navigation";

import FilmInfor from "@/components/FilmInfo";
interface Props {
  params: { id: string };
}
const MoviePage = () => {
  const pathname = usePathname();
  const paths = pathname.split("/");
  const id = paths[paths.length - 1];
  console.log("id la", id);

  return <FilmInfor id={+id} type={"movie"} />;
};
export default MoviePage;
