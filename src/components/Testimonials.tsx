import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Emily Carter',
    testimonial: 'They did an amazing job on our living room. The wallpaper was installed perfectly, and the paint job is flawless. Highly recommend!',
    position: 'Homeowner, Dublin',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    name: 'Michael Chen',
    testimonial: 'From the initial quote to the final walkthrough, the process was seamless. Professional, clean, and the results exceeded our expectations.',
    position: 'Interior Designer',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Jessica Patel',
    testimonial: 'Working with this team has been a game-changer for our business. From the first consultation, they showed professionalism, creativity, and genuine care for our goals. They didn’t just deliver a service — they provided an experience that made us feel supported at every step. Their attention to detail, responsiveness, and quality were beyond expectations. We’ve already seen measurable improvements in customer engagement and brand presence. I’d recommend them to anyone seeking value, reliability, and long-term growth',
    position: 'Homeowner, Cork',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    name: 'David Rodriguez',
    testimonial: "This team exceeded every expectation we had. They listened carefully, understood our vision, and delivered results that were both creative and practical. The process was smooth, communication was clear, and their dedication was obvious at every stage. We’ve already noticed stronger customer engagement and growth. I’d confidently recommend them to any business.",
    position: 'Real Estate Agent',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
  },
  {
    name: 'Sophia Williams',
    testimonial: 'I was so impressed with the color consultation. They helped me pick the perfect shades for my home office. The result is stunning!',
    position: 'Freelance Graphic Designer',
    image: 'https://randomuser.me/api/portraits/women/58.jpg',
  },
  {
    name: 'Sophia Williams',
    testimonial: 'I was so impressed with the color consultation. They helped me pick the perfect shades for my home office. The result is stunning!',
    position: 'Freelance Graphic Designer',
    image: 'https://randomuser.me/api/portraits/women/58.jpg',
  },
  {
    name: 'Sophia Williams',
    testimonial: 'I was so impressed with the color consultation. They helped me pick the perfect shades for my home office. The result is stunning!',
    position: 'Freelance Graphic Designer',
    image: 'https://randomuser.me/api/portraits/women/58.jpg',
  },
];
  
export default function Testimonials() {
  return (
    <div className='primary-color section-container-top'> 
        <div className='bg-purple-800 rounded-xl p-20'>
            <h2 className='text-5xl font-semibold text-white text-center'>Testimonials</h2>
            <p className='mt-4 text-lg text-gray-300 text-center'>What our clients say about us</p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between ${index === 2 ? "row-span-2" : ""} ${index === 3 ? "row-span-2" : ""}`}>
                  <p className="text-lg mb-6">{testimonial.testimonial}</p>
                  <div className="flex items-center">
                    <Image src={testimonial.image} alt={testimonial.name} width={56} height={56} className="rounded-full mr-4" />
                    <div>
                      <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

        </div>
    </div>
  )
}
