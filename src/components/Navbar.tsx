"use client";
import React from "react";
import Container from "./Container";
import { menuItems } from "@/utils/helper";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ButtonCircle from "./ButtonCircle";
import { MdMenu } from "react-icons/md";
import logo from "@/assets/images/logo.png";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="h-[100px] py-[25px]">
      <Container>
        <div className="flex justify-between items-center px-4 md:px-0">
          <div className="relative w-[200px] md:w-[340px] h-[50px]">
            <Image
              src={logo}
              alt="logo"
              fill
              sizes="100vw"
              priority
              className="object-contain"
            />
          </div>
          <div className="hidden lg:flex items-center h-[50px] gap-5 rounded-full bg-secondary/30">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                className={
                  item.url === pathname
                    ? "flex items-center h-[50px] px-5 rounded-full text-primary bg-white font-bold"
                    : "px-5"
                }
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          <Button bgColor="bg-secondary/30" className="hidden lg:inline-block">
            Let&apos;s talk
          </Button>
          <ButtonCircle
            bgColor="bg-accent"
            icon={<MdMenu />}
            className="inline-block lg:hidden"
          />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
