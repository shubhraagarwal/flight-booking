import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function aboutUs() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="common_content marbuttom20">
          <div className="row">
            <div className="col-md-3 text-center">
              <div className="about_small">
                <img className="" src="/images/logo.png" alt="logo" />
              </div>
            </div>
            <div className="col-md-9">
              <h2>Welcome!</h2>
              <p>
                Rush my Flight, is one of World&apos;s leading online travel
                companies and operates the website rushmyflight.com . We provide
                a variety of travel services and products to make both business
                and leisure travel more enjoyable. You&apos;ll never be far from
                helpful planning and booking support with us, whether it&apos;s
                before or after your trip.
              </p>
            </div>
          </div>
        </div>
        <div className="common_content marbuttom20">
          <div className="row">
            <div className="col-md-3 about_mob text-center">
              <div className="about_small">
                <img src="/images/iata_color.png" alt="iata" />
              </div>
            </div>
            <div className="col-md-9">
              <h2>Trust Us, We&apos;re Experts</h2>
              <p>
                We are a certified member of the IATA (International Air
                Transport Association). One of the World’s biggest travel
                professional associations. IATA members include travel agents
                and organizations having similar products &amp; services, i.e.,
                tours, cruises, hotels, car rentals, etc. IATA is recognized
                around the world as a symbol of integrity and professionalism.
                The media most usually endorse IATA to recommend how to find an
                authentic and licit travel agent.
              </p>
            </div>
            <div className="col-md-3 text-center">
              <div className="about_small about_dest">
                <img src="/images/iata_color.png" alt="iata" />
              </div>
            </div>
          </div>
        </div>
        <div className="common_content marbuttom20">
          <div className="row">
            <div className="col-md-3 text-center">
              <div className="about_small about_dest">
                <img src="/images/pci_dss_color.png" alt="pci" />
              </div>
            </div>

            <div className="col-md-9">
              <h2>Payment Card Industry Data Security Standard(PCI DSS)</h2>
              <p>
                Rush my flight is also PCI DSS-approved (Payment Card Industry
                Data Security Standard). PCI DSS is a global security standard
                to prevent any theft of customers’ confidential payment card
                information. We take all the necessary measures to keep safe all
                the information provided by our customers and provide better
                &amp; secure payment services.
              </p>
            </div>
            <div className="col-md-3 about_mob text-center">
              <div className="about_small">
                <img src="/images/pci_dss_color.png" alt="pci" />
              </div>
            </div>
          </div>
        </div>
        <div className="common_content marbuttom20">
          <div className="row">
            <div className="col-md-9">
              <h2>Mission, Vision, and Values</h2>
              <p>
                We at Rush my Flight believe in providing our customers with the
                best and most comfortable flying services. Our customers are our
                representatives, and we believe in their guidance and views.
                With our guided values and work ethics, it has become possible
                and is visible in our past projects. We are inspired to give our
                best every day.
              </p>
            </div>
            <div className="col-md-3 text-center">
              <div className="about_small">
                <img
                  className=""
                  src="/images/vision-mission.png"
                  alt="vision"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="common_content marbuttom20">
          <div className="row">
            <div className="col-md-3 about_dest text-center">
              <div className="about_small">
                <img className="" src="/images/Cached.png" alt="cached" />
              </div>
            </div>

            <div className="col-md-9">
              <h2>No Cached Results</h2>
              <p>
                We display real time availability of fares and not cached
                results like most online travel booking systems. This means
                avoiding frustration of dealing with baloney of looking at good
                fares but finding out that there’s no availability at the time
                of booking. With us you are looking at real time flight
                availability and can finish whole searching and booking process
                in just a few minutes.
              </p>
            </div>
            <div className="col-md-3 about_mob text-center">
              <div className="about_small">
                <img className="" src="/images/Cached.png" alt="cached" />
              </div>
            </div>
          </div>
        </div>
        <div className="common_content marbuttom20">
          <div className="row">
            <div className="col-md-9">
              <h2>Cutting Edge Technology</h2>
              <p>
                As a full-service travel agency, we use cutting-edge technology
                to provide travel inventory at affordable prices to all areas of
                the online travel business. We also offer a very user friendly
                UI, giving you hard data about the all the available flight
                options, multiple tools to perform the search exactly to your
                specific needs and make better choices. Give us a chance and see
                what a difference we can make!
              </p>
            </div>
            <div className="col-md-3 text-center">
              <div className="about_small">
                <img src="/images/cutting_edge.png" alt="cutting edge" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default aboutUs;
