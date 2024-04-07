import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const BottomBar = () => {
  const router = useRouter();

  const isActive = (href) => {
    return router.pathname === href;
  };

  const getImageSrc = (src, isActive) => {
    return isActive ? src.replace("-light", "-dark") : src;
  };

  return (
    <div className="bottom-bar">
      <div className="bottom-bar-item">
        <Link href="/" className="link">
          <Image
            src={getImageSrc("/home-light.svg", isActive("/"))}
            alt="Home"
            width={20}
            height={20}
          />
          <h6>Home</h6>
        </Link>
      </div>
      <div className="bottom-bar-item">
        <Link href="/news" className="link">
          <Image src="/news-light.svg" alt="News" width={20} height={20} />
          <h6>News</h6>
        </Link>
      </div>
      <div className="bottom-bar-item">
        <Link href="/oncoChat" className="link">
          <Image
            src="/OncoChat-light.svg"
            alt="OncoChat"
            width={20}
            height={20}
          />
          <h6>OncoChat</h6>
        </Link>
      </div>
      <div className="bottom-bar-item">
        <Link href="/symptoms" className="link">
          <Image
            src="/symptoms-light.svg"
            alt="Symptoms"
            width={20}
            height={20}
          />
          <h6>Symptoms</h6>
        </Link>
      </div>
      <div className="bottom-bar-item">
        <Link href="/profile" className="link">
          <Image
            src={getImageSrc("/profile-light.svg", isActive("/profile"))}
            alt="Profile"
            width={20}
            height={20}
          />
          <h6>Profile</h6>
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
