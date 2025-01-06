import React, { useState } from "react";
import styled from "styled-components";

const projects = [
    {
        id: 1,
        image: "./images/store/M1.PNG",
    },
    {
        id: 2,
        image: "./images/store/M2.PNG",
    },
    {
        id: 3,
        image: "./images/store/M3.PNG",
    },
    {
        id: 4,
        image: "./images/store/M4.PNG",
    },
    {
        id: 5,
        image: "./images/store/M5.PNG",
    },
    {
        id: 6,
        image: "./images/store/M6.PNG",
    },
    {
        id: 7,
        image: "./images/store/M7.PNG",
    },
    {
        id: 8,
        image: "./images/store/M8.PNG",
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
  }
  @media only screen and (max-width: 768px) and (min-width: 422px) {
    font-size: 0.8rem;
    padding: 0 1rem;
    margn-top:-150px;
    font-size:white;
    
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 1em;
  }
`;

function Store() {
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
                        href="https://pern-ecommerce-app.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                    >
                        <CardTitle> ONLINE STORE</CardTitle>
                    </a>
                    <Desc>
                        The PERN app for  shoes store uses PostgreSQL as its database, Redux, Stripe Payment, JWT,
                        Firebase for Google Sign-In, Mui, Axios, React Router-DOM, and
                        Animate.css. These packages enable seamless ordering, saving items,
                        leaving reviews, and secure payments, providing an enhanced user
                        experience.
                    </Desc>
                    <ProjectLinks>
                        <a
                            href="https://github.com/vickybanti/PERN_ecommerce_app.git"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Link src="./images/github.png" />
                        </a>
                        <a
                            href="https://pern-ecommerce-app.onrender.com/"
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

export default Store;
