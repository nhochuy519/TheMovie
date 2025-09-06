"use client";

import { usePathname, useSearchParams } from "next/navigation";

import FilmInfor from "@/components/FilmInfo";
interface Props {
  params: { id: string };
}
const TvPage = () => {
  const pathname = usePathname();
  const paths = pathname.split("/");
  const id = paths[paths.length - 1];

  return <FilmInfor id={+id} type={"tv"} />;
};
export default TvPage;
