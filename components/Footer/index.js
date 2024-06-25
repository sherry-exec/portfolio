import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold mb-4">
              Let&apos;s Work Together
            </h1>
            {/* <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold mb-4">
              Together
            </h1> */}
            <Button type="primary">Schedule a call</Button>
            <Button type="primary">Send an email</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
