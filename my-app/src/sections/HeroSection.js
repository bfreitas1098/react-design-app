import React from "react";
import styled from "styled-components";
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
            and code React apps
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
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  );
}

export default HeroSection;

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 200px 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px auto;
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`;

const Title = styled(H1)`
  color: ${themes.dark.text1};
`;
const Description = styled(MediumText)``;
