import React, { useEffect, useId, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const BestWork = () => {
  const id = useId();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-side-naffiziqbal.vercel.app/works")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-5 container mx-auto">
      <div className="mb-12 uppercase line-through">
        <h1 className="lg:text-8xl text-6xl font-bold opacity-20  text-center">Works</h1>
        <hr className="mt-5 border-gray-700" />
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {data.map((data) => (
          <div
            key={id}
            className="card  bg-base-100 shadow-2xl hover:shadow-[#3c83f6] duration-500 h-[500px] overflow-auto"
          >
            <figure className=" ">
              <PhotoProvider>
                <PhotoView src={data.Img}>
                  <img className="h-[400px] w-[400px]" src={data.Img} alt="" />
                </PhotoView>
              </PhotoProvider>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary hover:text-[#3C83F6] duration-500">
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  {data.name}
                </a>
              </h2>
              <p>{data?.description}</p>
              <div className="card-actions justify-end">
                {/* <Link
                    to={"/allworks"}
                    className=" bg-primary rounded-full btn btn-xs"
                  >
                    See my All Works
                  </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestWork;
