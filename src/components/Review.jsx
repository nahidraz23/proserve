"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("https://proserve-three.vercel.app/api/review");
        const data = await res.json();
        setReviews(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto my-28 w-full">
      <div className="text-center mb-8">
        <h3 className="text-secondary text-[18px] tracking-[0.17em] font-normal ">
          TESTIMONIALS
        </h3>
        <p className="lg:text-[47px] text-[37px] pt-3 font-medium">
          Our Client Reviews
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 z-0">
              <div className="p-7 group">
                <Card className="relative rounded-xl overflow-hidden h-[500px] shadow-lg border-none group-hover:scale-[1.02] group-hover:shadow-md group-hover:transform transition-transform duration-300 ease-in-out">
                  <Image
                    src={review.image}
                    alt={`Review by ${review.user.name}`}
                    width={500}
                    height={500}
                    className="absolute inset-0 w-full h-full object-cover filter brightness-75 transition-all duration-300 ease-in-out group-hover:brightness-50"
                  />
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="absolute bottom-3 mx-auto">
                      <Image
                        alt=""
                        width={60}
                        height={60}
                        className="border-[8px] border-white rounded-full overflow-hidden  mx-auto transform transition-all duration-300 ease-in-out group-hover:scale-110 absolute -top-7 left-[50%] translate-x-[-50%]"
                        src={review.user.userImage}
                      />
                      <div className="bg-white rounded-xl max-w-[95%] object-cover mx-auto text-center px-4 py-7 shadow-lg transition-colors duration-300 ease-in-out">
                        <h4 className="text-[18px]">{review.user.name}</h4>
                        <p className="pb-2 text-[14px]">{review.user.title}</p>
                        <p className="text-[16px]">" {review.review} "</p>
                        <div className="py-2 flex justify-center item-center">
                          <Rating
                            style={{ maxWidth: 150 }}
                            value={review.rating}
                            className="flex justify-center items-center"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Review;
