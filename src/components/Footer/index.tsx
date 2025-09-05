import Link from "next/link";
import Image from "next/image";
const footerLinks = [
  ["Home", "Contact us", "Term of services", "About us"],
  ["Live", "FAQ", "Premium"],
  ["You must watch", "Recent release", "Top IMDB", "Privacy policy"],
];

const Footer = () => {
  return (
    <div className="bg-[url(/footer.jpg)] w-full bg-cover bg-center  relative  bg-no-repeat h-fit p-16 ">
      <div className=" mx-auto   justify-between max-w-4xl ">
        <div className="  gap-10 items-center width-full flex flex-col  ">
          <Link
            href={"/"}
            className="flex  w-full items-center justify-center  w-full"
          >
            {" "}
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain mr-4"
            />
            <h1 className="text-4xl font-bold">theMovies</h1>
          </Link>
          <div className="grid md:grid-cols-3  grid-cols-2 w-full md:text-2xl text-4 ">
            <div className="p-2">Home</div>
            <div className="p-2">Live</div>
            <div className="p-2">You must watch</div>
            <div className="p-2">Contact us</div>
            <div className="p-2">FAQ</div>
            <div className="p-2">Recent release</div>
            <div className="p-2">Term of services</div>
            <div className="p-2">Premium</div>
            <div className="p-2">Top IMDB</div>
            <div className="p-2">About us</div>
            <div className="p-2  md:col-start-3">Pravacy policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
