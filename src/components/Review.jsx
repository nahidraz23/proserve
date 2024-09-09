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
import { useEffect, useState } from "react";


const Review = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://proserve-three.vercel.app/api/review`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

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
          {
            reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 z-0">
                <div className="p-7">
                  <Card className="relative rounded-xl overflow-hidden h-[500px] shadow-lg border-none">
                    <Image
                      src={review.image}
                      alt={`Review by ${review.user.name}`}
                      width={500}
                      height={500}
                      className="absolute  inset-0 w-full  h-full object-cover"
                    />
                    <CardContent className="flex aspect-square items-center  justify-center p-6 ">
                      <div className="absolute bottom-3 mx-auto ">
                        <Image
                          alt=""
                          width={60}
                          height={60}
                          className="border-[10px] border-white rounded-full overflow-hidden  mx-auto translate-y-7"
                          src={review.user.userImage}
                        />
                        <div className="bg-white rounded-xl max-w-[95%]  object-cover  mx-auto text-center px-4 py-7">
                          <h4 className="text-[18px] ">{review.user.name}</h4>
                          <p className="pb-2 text-[14px] ">{review.user.title}</p>
                          <p className="text-[16px]"> " {review.review} "</p>
                          <div className="py-2 flex justify-center item-center">
                            <Rating
                              style={{ maxWidth: 150 }}
                              value={review.rating}
                              className="flex  justify-center items-center "
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Review;

// const reviews = [
//   {
//     image: "https://i.ibb.co.com/MM6twT0/Review-2.jpg",
//     review:
//       " Similar service platforms are available abroad, and I've used them before. Thanks, ProServe!",
//     rating: 5,
//     user: {
//       name: "Zabeen Yusuf Nur",
//       title: "Teacher",
//       userImage: "https://i.ibb.co.com/Nxp28yN/customer-3.png",
//     },
//   },
//   {
//     image: "https://i.ibb.co.com/G2HTmXJ/Review-1.jpg",
//     review:
//       " During my wedding, I couldn't schedule with any beauty parlor. The ProServe app met all my needs.",
//     rating: 4,
//     user: {
//       name: "Zeba Fariba",
//       title: "Marketing Manager",
//       userImage: "https://i.ibb.co.com/wBF14s4/customer-4.png",
//     },
//   },
//   {
//     image: "https://i.ibb.co.com/YRdb3Gb/Review-3.jpg",
//     review:
//       " I was initially hesitant about online platforms, but ProServe exceeded my expectations.",
//     rating: 4,
//     user: {
//       name: "Arif Ur Rahman",
//       title: "Consultant",
//       userImage: "https://i.ibb.co.com/mq5srhv/customer-1.png",
//     },
//   },
//   {
//     image: "https://i.ibb.co.com/F3xKWb8/Review-4.jpg",
//     review:
//       " SSimilar service platforms are available abroad, and I've used them before. Thanks, ProServe!",
//     rating: 5,
//     user: {
//       name: "Saima Ahmad",
//       title: "Consultant",
//       userImage: "https://i.ibb.co.com/fFvRK9H/customer-2.png",
//     },
//   },
//   {
//     image: "https://i.ibb.co.com/dQgtrsk/Review-5.jpg",
//     review:
//       " During my wedding, I couldn't schedule with any beauty parlor. The ProServe app met all my needs.",
//     rating: 3,
//     user: {
//       name: "David Wilson",
//       title: "Entrepreneur",
//       userImage: "https://i.ibb.co.com/HryDhHt/customer-6.png",
//     },
//   },
//   {
//     image: "https://i.ibb.co.com/nPDjHmy/Review-6.jpg",
//     review:
//       " I was initially hesitant about online platforms, but ProServe exceeded my expectations.",
//     rating: 5,
//     user: {
//       name: "Sarah Lee",
//       title: "Designer",
//       userImage: "https://i.ibb.co.com/k99W3TP/customer-5.png.png",
//     },
//   },
// ];
