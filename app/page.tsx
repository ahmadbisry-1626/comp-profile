import About from "@/components/About";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import RecentBlog from "@/components/RecentBlog";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <main className="">
      <Hero className="pt-32 pb-0 lg:pb-10"/>
      <About className="py-16 lg:py-32 overflow-hidden" />
      <HowItWorks className="py-16 !pt-32 lg:py-32"/>
      <Testimonial className="py-16 lg:py-32"/>
      <RecentBlog className="pt-14 pb-15 lg:pb-32"/>
      <Subscribe className="py-16 !pt-64 -mt-48 lg:py-32 bg-blue-500"/>
    </main>
  )
}
