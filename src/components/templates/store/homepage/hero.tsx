// import Heading from "#/components/base/common/heading";
// import Tags from "#/components/base/common/tags";
// import CounterBox from "#/components/containers/store/counter-box";
// import { Button } from "#/components/ui/button";
// import { ArrowRight } from "lucide-react";

// export default function Hero() {
//   const counters = [
//     {value: '1,500+', label: 'Fashion Products'},
//     {value: '30+', label: 'New Arrivals Monthly'},
//     {value: '50%', label: 'Up to 50% OFF Select Items'},
//     {value: '90%', label: 'Customer Satisfaction Rate'},
//   ];

//   return (
//     <section className="@container container mx-auto space-y-8 px-4 pt-[60px]">
//       <div className="relative rounded-2xl border border-dashed">

//         <div className="relative">
//         <img src="/X_makenzi.png" alt="Hero" className="h-[420px] w-full rounded-2xl rounded-b-none object-cover" />

//         <div className="-translate-x-1/2 -bottom-12 absolute left-1/2">
//         <div className="relative flex h-[94px] w-[198px] items-center justify-center rounded-2xl bg-background">
//           <div className="flex items-center justify-center">
//             <Button variant="secondary" size="lg" type="button" className="h-16 gap-0.5 px-7! text-lg">Shop Now
//               <ArrowRight className="size-5"/>
//             </Button>
//           </div>
//         </div>
//         </div>
//         </div>

//         <div className="grid @4xl:grid-cols-2 grid-cols-1 gap-8">
//           <div className="space-y-8 @4xl:p-12 @6xl:p-[60px] @7xl:p-20 p-3 pt-14">
//             <Tags items={['All', 'Men’s', 'Women’s', 'Kids']}/>
//             <Heading
//               title="CartSmart. Style Smarter."
//               subtitle="Where smart shopping meets effortless style—CartSmart helps you look sharp without breaking the bank."
//             />
//           </div>
//         <CounterBox items={counters}/>
//         </div>

//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import Heading from "#/components/base/common/heading";
import Tags from "#/components/base/common/tags";
import CounterBox from "#/components/containers/store/counter-box";
import { Button } from "#/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const counters = [
    { value: "1,500+", label: "Fashion Products" },
    { value: "30+", label: "New Arrivals Monthly" },
    { value: "50%", label: "Up to 50% OFF Select Items" },
    { value: "90%", label: "Customer Satisfaction Rate" },
  ];

  const images = [
    "/X_makenzi.png",
    "/world-champions.webp",
    "/Caleb Designs.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // slower = smoother feel

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="@container container mx-auto space-y-8 px-4 pt-[60px]">
      <div className="relative rounded-2xl border border-dashed">
        {/* 🔥 SLIDER */}
        <div className="relative">
          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl rounded-b-none">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`slide-${index}`}
                className={`absolute h-full w-full object-cover transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  index === current
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110"
                }`}
              />
            ))}
          </div>

          {/* 🔥 Shop Button Overlay */}
          <div className="-translate-x-1/2 -bottom-12 absolute left-1/2">
            <div className="relative flex h-[94px] w-[198px] items-center justify-center rounded-2xl bg-background">
              <div className="flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  type="button"
                  className="h-16 gap-1 px-7 text-lg transition-all duration-300 hover:scale-105"
                >
                  Shop Now
                  <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 Bottom Content */}
        <div className="grid @4xl:grid-cols-2 grid-cols-1 gap-8">
          <div className="space-y-8 @4xl:p-12 @6xl:p-[60px] @7xl:p-20 p-3 pt-14">
            <Tags items={["All", "Men’s", "Women’s", "Kids"]} />
            <Heading
              title="CartSmart. Style Smarter."
              subtitle="Where smart shopping meets effortless style—CartSmart helps you look sharp without breaking the bank."
            />
          </div>

          <CounterBox items={counters} />
        </div>
      </div>
    </section>
  );
}
