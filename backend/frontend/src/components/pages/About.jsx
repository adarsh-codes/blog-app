import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
        Welcome to Zeta Blog, the ultimate platform for passionate writers and avid readers. Zeta Blog allows users to seamlessly post their thoughts, ideas, and stories, creating a vibrant community of authors and readers. Whether you're an aspiring author looking to share your work or a reader searching for diverse content, Zeta Blog has something for everyone. Our user-friendly interface makes it easy to publish articles, engage with others, and explore a wide range of topics. Join Zeta Blog today and become part of a dynamic network where creativity meets curiosity.
        </p>
        <p>
         
        </p>
        <p>
        
        </p>
        
       
      </div>
    </article>
  );
};

export default About;
