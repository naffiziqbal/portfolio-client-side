import React from "react";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
import { useEffect } from "react";

const AllWorks = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(`https://portfolio-works-naffiziqbal.vercel.app/allworks`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
      <div className="myWorks">
        <p className="text-8xl opacity-10 text-primary font-bold uppercase text-center underline mb-24">
          My Works
        </p>
        <div>
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
            {projects.map((project) => (
              <SwiperSlide>
                <div key={project.id} className="card  bg-base-100 shadow-xl">
                  <figure>
                    <PhotoProvider>
                      <PhotoView src={project.Img}>
                        <img className="max-w-lg" src={project.Img} alt="" />
                      </PhotoView>
                    </PhotoProvider>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.name}
                      </a>
                    </h2>
                    <p>{project.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-xs btn-primary text-white">
                        <a target={"_blank"} href={project.link}>
                          visit
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AllWorks;
