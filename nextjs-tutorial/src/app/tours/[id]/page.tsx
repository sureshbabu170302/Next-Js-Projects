import React from "react";
import mapsImg from "@/images/tours.jpg";
import Image from "next/image";

const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
      <section className="flex gap-x-4 m-4">
        {/* local image */}
        <div>
          <Image
            src={mapsImg}
            alt="maps"
            width={192}
            height={192}
            priority
            className="w-48 h-48 object-cover rounded"
          />
          <p>local image </p>
        </div>
        {/* remote image */}
        <div>
          <Image
            src={url}
            alt="tour"
            width={192}
            height={192}
            priority
            className="w-48 h-48 object-cover rounded"
          />
          <p>remote image </p>
        </div>
      </section>
    </div>
  );
}

export default page;
