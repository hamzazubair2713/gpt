import React from "react";
import { FooterItems, FooterSec } from "./Footer.styles";
import {
  FooterBrand,
  FooterClient,
  Footerlinks,
  FooterFreelancer,
  FooterContact,
} from "./Footer.styles";
import {footerBrands ,footerClients,footerfreelancers ,footerContacts} from "./FooterData"

const Footer = () => {
  return (
    <FooterSec>
      <h1>Do you want to step in to the future before others</h1>
      <button>Request Early Access</button>
      <FooterItems>
      <FooterBrand>
        {footerBrands.map((elem, ind) => (
          <>
            <img src={elem.image} alt="" key={ind} />
            <p>{elem.title}</p>
          </>
        ))}
      </FooterBrand>
      <FooterClient>
        <h4>Links</h4>
        {footerClients.map((elem, ind) => (
          <Footerlinks key={ind}> {elem}</Footerlinks>
        ))}
      </FooterClient>
      <FooterFreelancer>
        <h4>Company</h4>

        {footerfreelancers.map((elem, ind) => (
          <Footerlinks key={ind}> {elem}</Footerlinks>
        ))}
      </FooterFreelancer>
      <FooterContact>
        <h4>Get in touch</h4>

        {footerContacts.map((elem, ind) => (
          <Footerlinks key={ind}>{elem}</Footerlinks>
        ))}
      </FooterContact>
      </FooterItems>
      <p>© 2021 GPT-3. All rights reserved.</p>
    </FooterSec>
  );
};

export default Footer;
