import Button from "@/components/Button";
import ButtonCircle from "@/components/ButtonCircle";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const PortfolioShowcase: React.FC = () => {
  return (
    <section className="pt-[150px]">
      <Container>
        <div className="flex gap-[30px]">
          <div className="w-7/12 flex flex-col gap-[30px]">
            <div className="flex flex-0 gap-5 items-center h-[245px] rounded-3xl p-6 bg-accent ">
              <div>
                <h2 className="text-3xl mb-5 font-bold ">Our Services</h2>
                <Button bgColor="bg-transparent" border="white">
                  Services
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="w-2/3">
                    <h3 className="mb-3 text-2xl font-medium">Development</h3>
                    <p className="line-clamp-2">
                      Our strengths in web development include responsive
                      design, flexible customization, SEO optimization,
                      guaranteed security, seamless integration, and
                      comprehensive post-sales support.
                    </p>
                  </div>
                  <div>
                    <ButtonCircle
                      bgColor="bg-transparent"
                      icon={<GoArrowUpRight />}
                      border={true}
                    />
                  </div>
                </div>
                <hr className="border-2" />
                <div className="flex justify-between items-center">
                  <div className="w-2/3">
                    <h3 className="mb-3 text-2xl font-medium">
                      Maintenance Website
                    </h3>
                    <p className="line-clamp-2">
                      Our website maintenance services ensure your site stays
                      secure, up-to-date, and optimized, freeing you from
                      technical worries so you can focus on your business.
                    </p>
                  </div>
                  <div>
                    <ButtonCircle
                      bgColor="bg-transparent"
                      icon={<GoArrowUpRight />}
                      border={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-evenly h-full rounded-3xl bg-white">
              <div className="flex flex-col items-center justify-center">
                <h5 className="mb-2 text-accent font-bold text-3xl">99%</h5>
                <p className="text-secondary">Client Satisfaction</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="mb-2 text-accent font-bold text-3xl">500+</h5>
                <p className="text-secondary">SEO-Optimized Sites</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="mb-2 text-accent font-bold text-3xl">95%</h5>
                <p className="text-secondary">On-time Delivery</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="mb-2 text-accent font-bold text-3xl">10+</h5>
                <p className="text-secondary">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="w-5/12 h-[400px] relative rounded-3xl border-4 overflow-hidden">
            <Image
              src={"/images/portfolio-pic.jpg"}
              alt="Portfolio Showcase Picture"
              width={550}
              height={400}
              className="absolute inset-0 h-full"
            />
            <div className="absolute bottom-0 flex items-center justify-between gap-10 px-8 pb-6">
              <div>
                <h2 className="text-2xl mb-2 font-medium">Portfolio</h2>
                <p className="line-clamp-2">
                  We&apos;ve completed numerous website development projects for
                  a variety of clients, including businesses, non-profits, and
                  individuals.
                </p>
              </div>
              <div>
                <ButtonCircle
                  icon={<GoArrowUpRight />}
                  bgColor="bg-transparent"
                  border={true}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioShowcase;