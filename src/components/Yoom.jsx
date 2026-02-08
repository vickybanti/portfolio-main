import React, { useState } from "react";
import styled from "styled-components";

const projects = [
    {
        id: 1,
        image: "./images/yoom/4.PNG",
    },
    {
        id: 2,
        image: "./images/yoom/1.PNG",
    },
    {
        id: 3,
        image: "./images/yoom/2.PNG",
    },
    {
        id: 4,
        image: "./images/yoom/3.PNG",
    },
    {
        id: 5,
        image: "./images/yoom/5.PNG",
    },
    {
        id: 6,
        image: "./images/yoom/6.PNG",
    },


];
const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  width: 33rem;
  position: absolute;
  background-color: inherit;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  overflow: hidden;

  // Mobile-first responsive design
  @media (max-width: 480px) {
    height: 15rem;
    width: 21rem;
    top: -50px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 22rem;
    width: 31rem;
    top: -50px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 17rem;
    width: 30rem;
    top: -800px;
  }

  @media (min-width: 1025px) {
    height: 20rem;
    width: 33rem;
    top: 0; // Reset to center for larger screens
  }
`;

const CarouselWrapper = styled.div`
display: flex;
height: 100%;
transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
transition: transform 0.5s ease;
`;

const CarouselCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  border-radius: 20px;
  margin: auto;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1.25rem;
`;
const CardTitle = styled.h3`
  font-size: 1.4rem;
  color: #da4ea2;
  cursor: pointer;
  @media only screen and (max-width: 420px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 768px) and (min-width: 422px) {
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 1.2rem;
  }
`;

const NextButton = styled.button`
  position: absolute;
  right: 10px;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: inherit;
  z-index: 1;
`;

const PrevButton = styled.button`
  position: absolute;
  left: 10px;
  border: none;
  cursor: pointer;
  background-color: inherit;
  z-index: 1;
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    height: 15rem;
    justify-content: flex-start;
    z-index: 0;
  }
`;

const ArrowImg = styled.img`
  width: 2em;
  height: 2em;
  padding: 0;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media only screen and (max-width: 768px) and (min-width: 422px) {
    width: 70%;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 80%;
  }
`;

const Link = styled.img`
  width: 3rem;
  height: 3rem;

  @media only screen and (max-width: 420px) {
    width: 1.5rem;
    height: 1.5rem;
  }
  @media only screen and (max-width: 768px) and (min-width: 422px) {
    width: 1.7rem;
    height: 1.7rem;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 2rem;
    height: 2rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
  padding-top: 2rem;
  align-items: center;

  @media only screen and (max-width: 320px) {
    top: -40px;
  }

  @media only screen and (min-width: 360px) and (max-width: 360px) and (min-height: 640px) and (max-height: 640px) {
    top: 0;
  }

  @media only screen and (min-width: 360px) and (max-width: 360px) and (min-height: 740px) and (max-height: 740px) {
    top: -60px;
  }

  @media only screen and (max-width: 375px) and (min-width: 361px) {
    top: 10px;
  }
  @media only screen and (max-width: 393px) and (min-width: 376px) {
    top: -10px;
  }
  @media only screen and (max-width: 420px) and (min-width: 394px) {
    top: -80px;
  }
  @media only screen and (max-width: 540px) and (min-width: 422px) {
    top: 50px;
  }
  @media only screen and (max-width: 768px) and (min-width: 541px) {
    top: -65px;
  }
  @media only screen and (max-width: 820px) and (min-width: 769px) {
    top: -140px;
  }
  @media only screen and (max-width: 912px) and (min-width: 821px) {
    top: -185px;
  }
  @media only screen and (max-width: 1026px) and (min-width: 1024px) {
    top: -220px;
  }
`;

const Desc = styled.p`
  font-size: 1.2em;
  line-height: 1.2;
  color: lightgray;
  text-align: center;
  padding: 0.3rem 0;
  @media only screen and (max-width: 420px) {
    font-size: 0.8rem;
    padding: 0 1rem;
    margin-top:-145px;
    color:white;
    z-index:10;
  }
  @media only screen and (max-width: 768px) and (min-width: 422px) {
    font-size: 0.8rem;
    padding: 0 1rem;
    
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 1em;
  }
`;

function Yoom() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <div>
                <CarouselContainer>
                    <CarouselWrapper activeIndex={activeIndex}>
                        {projects.map((project) => (
                            <CarouselCard key={project.id}>
                                <CardImage src={project.image} />
                            </CarouselCard>
                        ))}
                    </CarouselWrapper>
                    <PrevButton onClick={handlePrevClick}>
                        <ArrowImg src="./images/left.png" />
                    </PrevButton>
                    <NextButton onClick={handleNextClick}>
                        <ArrowImg src="./images/right.png" />
                    </NextButton>
                </CarouselContainer>
                <Details>
                    <a
                        href="https://meetings-amber.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", textTransform: "uppercase" }}
                    >
                        <CardTitle>Zoom Clone</CardTitle>
                    </a>
                    <Desc>
                        A Video Conferencing app for setting and joining meeting, private chat room included.
                    </Desc>
                    <ProjectLinks>
                        <a
                            href="https://github.com/vickybanti/Meetings.git"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Link src="./images/github.png" />
                        </a>
                        <a
                            href="https://meetings-amber.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Link src="./images/link.png" />
                        </a>
                    </ProjectLinks>
                </Details>
            </div>
        </>
    );
}

export default Yoom;
