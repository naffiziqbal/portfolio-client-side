import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const BestWork = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-works-naffiziqbal.vercel.app/works")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-5 container mx-auto">
      <h3 className="text-4xl font-semibold text-center  text-primary mb-12">
        My Best Work
      </h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {" "}
        {data.map((data) => (
          <SwiperSlide>
            <div key={data.id} className="card  bg-base-100 shadow-xl">
              <figure>
                <PhotoProvider>
                  <PhotoView src={data.Img}>
                    <img className="max-w-lg" src={data.Img} alt="" />
                  </PhotoView>
                </PhotoProvider>
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    {data.name}
                  </a>
                </h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                  <Link
                    to={"/allworks"}
                    className=" bg-primary rounded-full btn btn-xs"
                  >
                    See my All Works
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestWork;
