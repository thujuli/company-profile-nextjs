import Button from "@/components/Button";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="h-[600px]">
      <Container>
        <div className="flex gap-10">
          <div className="w-1/2 flex flex-col justify-center gap-4">
            <h1 className="leading-tight text-7xl font-medium ">
              Transforming Ideas into Digital{" "}
              <span className="text-accent underline underline-offset-8">
                Masterpieces
              </span>
            </h1>
            <p className="text-secondary">
              With us achieving dreams in building your products, together say
              &ldquo;Yes&rdquo; to extraordinary designs.
            </p>
            <div className="space-x-5">
              <Button bgColor="bg-accent">Start a Project</Button>
              <Button bgColor="bg-transparent" border="white">
                Our Services
              </Button>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src={"/images/hero-pic.png"}
              alt="Hero Picture"
              width={670}
              height={600}
            ></Image>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;