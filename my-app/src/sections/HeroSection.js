import React from "react";
import styled, { keyframes } from "styled-components";
import { H1, MediumText } from "../components/styles/TextStyles";
import { themes } from "../components/styles/ColorStyles";
import PurchaseButton from "../components/buttons/PurchaseButton";
import MockupAnimation from "../components/animations/MockupAnimation";
import WaveBackground from "../backgrounds/WaveBackground";

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design <br />
            and code <span>React</span> apps
          </Title>
          <Description>
            Don’t skip design. Learn design and code by building real apps with
            React and Swift. Complete courses about the best tools.
          </Description>
          <PurchaseButton
            title="START LEARNING"
            subtitle="120+ hours of video"
          />
        </TextWrapper>
        <AnimationSection>
          <MockupAnimation />
        </AnimationSection>
      </ContentWrapper>
    </Wrapper>
  );
}

export default HeroSection;

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 200px 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 150px 20px 250px;
    gap: 60px;
  }

  @media (max-width: 768px) {
    margin: 0 0 0 -20px;
  }
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    :nth-child(1) {
      animation: ${animation} 1s 0s forwards;
    }
    :nth-child(2) {
      animation: ${animation} 1s 0.2s forwards;
    }
    :nth-child(3) {
      animation: ${animation} 1s 0.4s forwards;
    }
  }

  @media (max-width: 450px) {
    margin: 0 0 0 10px;
  }
`;

const Title = styled(H1)`
  color: ${themes.dark.text1};
  opacity: 0;
  animation: ${animation} 1s 0.1s forwards;
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 55px;
  }
`;

const Description = styled(MediumText)`
  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const AnimationSection = styled.div`
  @media (min-width: 768px) and (max-width: 800px) {
    margin: 0 0 0 -20px;
  }
`;
