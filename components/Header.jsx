import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Content } from "../config/links";

const Header = () => {
  const router = useRouter();
  const [definitions, setDefinitions] = useState({});
  const getSiuxStudioDefinitions = async () => {
    const res = await fetch("/api/siux-studio");
    const defs = await res.json();
    setDefinitions(defs);
  };

  useEffect(() => {
    getSiuxStudioDefinitions();
  }, []);

  return (
    <div className="animation-fade-in animation-faster">
      <Head>
        {/* Load Google fonts dinamically */}
        <link
          href={`https://fonts.googleapis.com/css?family=${definitions.font?.variations
            ?.map(
              (current) =>
                `${current.value.replace(/ /g, "+")}:${current.variants
                  .filter((va) => va.length === 3)
                  .join(",")}`
            )
            .join("|")}`}
          type="text/css"
          rel="stylesheet"
        />
      </Head>
      {/* Header */}
      <header className="container-mobile display-flex justify-content-space-between align-items-center padding-m tablet:padding-xl margin-top-s tablet:margin-top-xl">
        {/* <div>{definitions.font?.length}</div> */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            width="100"
            height="100"
            alt="Marcos Sanchez portfolio"
            className="width-2xxl height-2xxl border-radius-full background-neutral-2"
          />
        </Link>
        <div className="display-flex align-items-center justify-content-center">
          {Content.socialMedia.map((social) => {
            return (
              <a
                title={social.title}
                href={social.url}
                key={social.icon}
                target="_blank"
              >
                <div className="transition-fast background-neutral-1 hover:color-primary-7 hover:background-primary-1 border-radius-xxl padding-xxs height-xxl width-xxl display-flex align-items-center justify-content-center margin-left-xs">
                  <i className={`font-size-l ${social.icon}`} />
                </div>
              </a>
            );
          })}
        </div>
      </header>
      {/* Introduction */}
      <h1 className="container-mobile font-size-m tablet:font-size-l color-neutral-5 line-height-m margin-top-l padding-left-l padding-right-l">
        I'm{" "}
        <a href="https://www.linkedin.com/in/sanchezmarcosme/" target="_blank">
          <span className="transition-fast hover:color-primary-7 color-primary-7 font-weight-600">
            Marcos Sanchez
          </span>
        </a>
        , director and founder at{" "}
        <a href="https://siux.studio" target="_blank">
          <span className="transition-fast hover:color-primary-7 font-weight-600 color-black">
            SIUX Studio
          </span>
        </a>
        . Previously I worked as UX Sr Manager at{" "}
        <a href="https://despegar.com/" target="_blank">
          <span className="transition-fast hover:color-primary-7 font-weight-600 color-black">
            Despegar.com
          </span>
        </a>
        , leading the planning and development of{" "}
        <a href="https://despegar.design/eva/" target="_blank">
          <span className="transition-fast hover:color-primary-7 font-weight-600 color-black">
            {" "}
            EVA design system
          </span>
        </a>
        .
      </h1>
      {/* Navigation */}
      <div className="display-flex justify-content-center">
        <div
          className="width-auto background-neutral-1 margin-top-xxl display-flex padding-xs overflow-hidden position-relative border-radius-xl margin-bottom-xl"
          style={{ maxWidth: "268px" }}
        >
          {Content.tabs.map((tab) => {
            return (
              <Link key={tab.id} href={tab.id} className="margin-right-xs">
                <div
                  className={`${
                    router.asPath === tab.id
                      ? "background-white box-shadow-xs color-black"
                      : "color-neutral-6 hover:background-opacity-neutral-3 hover:color-neutral-9"
                  } transition-fast font-size-s padding-l padding-top-xs padding-bottom-xs border-radius-xl`}
                >
                  {tab.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
