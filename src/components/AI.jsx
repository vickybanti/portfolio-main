import React, { useState } from "react";
import styled from "styled-components";

const projects = [
  {
    id: 1,
    image: "./images/foodapp/1.PNG",
  },
  {
    id: 2,
    image: "./images/foodapp/2.PNG",
  },
  {
    id: 3,
    image: "./images/foodapp/3.PNG",
  },
  {
    id: 4,
    image: "./images/foodapp/4.PNG",
  },
  {
    id: 5,
    image: "./images/foodapp/5.PNG",
  },
  {
    id: 6,
    image: "./images/foodapp/6.PNG",
  },
  {
    id: 7,
    image: "./images/foodapp/7.PNG",
  },
];

portfolio-main/src/components/Store.jsx
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
    margin-top:-200px;
    color:white;
  }
  @media only screen and (max-width: 768px) and (min-width: 422px) {
    font-size: 0.8rem;
    padding: 0 1rem;
    
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 1em;
  }
`;

function AI() {
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
            href="https://threejs-ai-react.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", textTransform: "uppercase" }}
          >
            <CardTitle>Food App</CardTitle>
          </a>
          <Desc>
          Foodie Delight is a sleek food ordering app built with Next.js, Tailwind CSS, and MongoDB. 
          It offers a responsive design, fast navigation, real-time order tracking, 
          and secure user authentication.
           Perfect for seamless browsing, ordering, and managing food deliveries.
          </Desc>
          <ProjectLinks>
            <a
              href="https://github.com/vickybanti/Food-app.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link src="./images/github.png" />
            </a>
            <a
              href="https://food-app-nine-lilac.vercel.app/"
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

export default AI;
