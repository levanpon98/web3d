import React, { useState } from "react";
import styled from "styled-components";
import Word from "./Word";
import { ReactComponent as UnstyledStar } from "../svg/star.svg";
import { ReactComponent as UnstyledTrustPilot } from "../svg/trustpilot.svg";

const WORDS = [
  { word: "Easy", num: "1,107", left: "37%", top: "38%", size: 5 },
  { word: "Simple", num: "908", left: "19%", top: "73%", size: 2.5 },
  { word: "Love", num: "991", left: "16%", top: "24%", size: 2.5 },
  { word: "Intuitive", num: "726", left: "72%", top: "46%", size: 2.5 },
  { word: "Exelente", num: "620", left: "12%", top: "52%", size: 2 },
  { word: "Amazing", num: "501", left: "37%", top: "69%", size: 2 },
  { word: "Perfect", num: "401", left: "62%", top: "22%", size: 2 },
  { word: "Cool", num: "337", left: "44%", top: "42%", size: 2 }
];

const Wrapper = styled.div`
  width: calc(100vw - 5rem);
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const RatingWrapper = styled.div`
  width: calc(100vw - 5rem);
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 300ms;
`;

const Rating = styled.div`
  font-size: 6rem;
  background: -webkit-linear-gradient(0deg, #ad58db 0%, #5a4cdb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-variation-settings: "wght" 700, "wdth" 150;
  position: relative;
  line-height: 110%;
`;

const Star = styled(UnstyledStar)`
  width: 3rem;
  height: auto;
  position: absolute;
  top: 0;
  left: calc(100% + 0.75rem);
`;

const LeadingText = styled.h2`
  color: #211e4f;
  line-height: 110%;
  font-size: 1rem;
  text-transform: uppercase;
  font-variation-settings: "wght" 500;
  padding-bottom: 2rem;
`;

const TrustPilot = styled(UnstyledTrustPilot)`
  width: 7rem;
  height: auto;
`;

const EasyToUse = styled.div`
  color: #211e4f;
  padding-top: 2.5rem;
  text-align: center;
  line-height: 100%;
  font-size: 2.25rem;
  font-variation-settings: "wght" 700, "wdth" 125;
`;

const EasyToUseSub = styled.div`
  color: #211e4f;
  opacity: 0.6;
  padding-top: 1rem;
  text-align: center;
  line-height: 120%;
  font-size: 1rem;
`;

const WordsWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export default function FooterLinks() {
  const [open, setOpen] = useState(-1);
  const toggle = () => setOpen(open > WORDS.length ? -1 : open + 1);
  return (
    <Wrapper onClick={toggle}>
      <RatingWrapper style={{ opacity: open !== -1 ? 0.3 : 1 }}>
        <LeadingText>Our customers love us</LeadingText>
        <Rating>
          4.7
          <Star />
        </Rating>
        <TrustPilot />
        <EasyToUse>And we’re pretty easy to use too!</EasyToUse>
        <EasyToUseSub>
          Here’s the top descriptive words (from 2,700+ reviews) used to
          describe Clipchamp
        </EasyToUseSub>
      </RatingWrapper>
      <WordsWrapper>
        {WORDS.map((x, i) => (
          <Word
            toggle={open >= i && open < i + 3}
            word={x.word}
            num={x.num}
            size={x.size}
            left={x.left}
            top={x.top}
            key={i}
          />
        ))}
      </WordsWrapper>
    </Wrapper>
  );
}
