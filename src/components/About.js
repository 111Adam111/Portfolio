import React from 'react'

const About = () => {
  return (
    <div className='about-box' id='about-anchor'>
      <div className='about'>
        <h1>About me</h1>
        <div className="photo-box">
          <div className="photo"></div>
        </div>
        <p>My name is Adam Duowski. I am 29 years old and live in Warszaw, Poland. 
          I am passionate about new technologies like AI and blockchain. 
          I also enjoy cars, gaming, football, Airsoft, and astronomy. 
          I come from a family of pilots and began preparing to become 
          a commercial pilot at the age of 15. However, after countless 
          hours of learning and training, I realized that it was not the 
          career path for me and decided to change my plans. The lack of 
          money for further training and the impact of Covid on pilot 
          layoffs also played a role in this decision. Now, after almost 
          two years of learning, I am finally ready to secure my first 
          software developer job. I am highly motivated to succeed in this 
          field and willing to put in a lot of effort to make it happen. 
          I understand that as a junior developer, I am an investment, so 
          I am committed to investing my free time to increase my development 
          pace and ensure my usefulness. I have already invested a lot and 
          see no reason to stop. In addition to being a great career path, 
          programming aligns with my interests, is quite satisfying, and is 
          a skill I desire to possess. </p>
        {/* <div className="skills"> */}
          <h1>skills: </h1>
          <p>Javascript • ReactJS • HTML • CSS • Git •
              Scrum • Problem solving • Creativity •
              Critical thinking • Team work • Flexibility •
              Communication • Attention to detail</p>
        {/* </div> */}
         <h1>Contact Info</h1>
        <p>+48 796 270 826</p>
        <p>adamdunowski@gmail.com</p>
        <p>warszaw, Poland</p>

      </div>
    </div>
  )
}

export default About