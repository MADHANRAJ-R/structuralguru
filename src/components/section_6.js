import React, { useEffect, useRef } from "react";
import starLogo from "../assets/star-logo.png";
import "./section_6.css";

const Section6 = () => {

  const sectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          const iframe = sectionRef.current.querySelector("iframe");
          iframe.src = iframe.src.replace("autoplay=0", "autoplay=1");
        } else {
          
          const iframe = sectionRef.current.querySelector("iframe");
          iframe.src = iframe.src.replace("autoplay=1", "autoplay=0");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(sectionRef.current);

    
    return () => observer.disconnect();
  }, []);
 
  
  return (
    <section className="sec-6 show-animate" ref={sectionRef}>
      <div className="google-review-div">
        <h1 className="google-review-title">
          VIEW GOOGLE REVIEWS OF THE TRAINING
        </h1>
        <div className="google-div animate">
          <iframe
            
            src="https://www.youtube.com/embed/vFX1HXxcDKA?autoplay=0&si=2u_EgvxoMBjL5ViR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="reviews-upper-div">
        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "If you are looking to learn structural designing, then the content
            of the webinars which contains both theory and practical in software
            will enhance you to start designing independently. It's not
            necessary to have any knowledge on design, they shall start from
            basics and explain with very good practical examples. And the best
            thing is that, they will clarify your doubts even after the
            completion of course and very supportive."
          </p>
          <h2 className="reviewer-name">Aditya Kumar Paturi</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "From basic to top current industry knowledge explained in very easy
            to understand way. Best part is Mr. Raghu sir is very kind and down
            to earth person who adjusts and doesn't complaint regarding missing
            classes or postponing them due to your working schedule if you miss
            few of them. With my case he has already adjusted and changed even
            my batches twice according to my convince, as my working schedule is
            a mess. Thank you sir so much!"
          </p>
          <h2 className="reviewer-name">Anudatta Kulkarni</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Best course for all civil engineers/ structuralengineers (Freshers
            as well as Practicing engineers). Gururayar associates has highly
            qualified and experienced professionals having in-depth knowledge of
            structural engg subjects, softwares, codes and also consulting
            industry practices. I recommend to join this practical structure
            design course."
          </p>
          <h2 className="reviewer-name">Anushree</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I got an opportunity to get trained from a highly professional
            instructor. I got a clear view about the structure design both
            theoretically and practically. I am fully satisfied with the way
            they delivered the course content. It will be an honor to get
            enrolled in more courses in the future. Also, I strongly recommend
            anyone willing to join the course without any hesitation no matter
            whether you are professional or beginners."
          </p>
          <h2 className="reviewer-name">Basanta Khadka</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "The way the contents are arranged is so easy to understand, the
            concepts are definetly comprehensive. The team and lectures are
            super responsive which makes good environment to pick up the
            structural design skill. I wish to see more from Structural Guru."
          </p>
          <h2 className="reviewer-name">Elijah Banda M</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "A great place to gain structural engineering and software
            knowledge. You have set very high standards of service and great
            efforts are highly appreciated. I recommend this institute for civil
            engineers/designers. Good luck to Gururayar Associates and team."
          </p>
          <h2 className="reviewer-name">G Prakash</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Decades over I never found this type of guidence, with your
            guidance I boost myself. Being an M.Tech I was never confident to
            start my own career, but after your guidence I will soon start my
            own company definitely."
          </p>
          <h2 className="reviewer-name">Santosh Kumar Singh</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "It's one of the best institute for civil engineers. This institute
            covers many topics in course no other institute covers. All
            relevant, realistic, real time approach of topics embedded in due
            course. Online teachong facility is really helpful. I recommend this
            institute for enthusiastic civil engineers."
          </p>
          <h2 className="reviewer-name">Hari Prasanth</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Great! One can easily understand the concepts because of the close
            contact with the students, and can clarify the doubts. A very well
            experienced tutor with more than 20 years of experience. The courses
            offered are worth paying and are reasonable."
          </p>
          <h2 className="reviewer-name">Harini Sridhar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I got an interview from one of the companies in Bangalore for
            structural engineer role and have got selected which has been done
            with the help of you and Structural Guru. Thank you so much for the
            opportunity to join in Structural Guru."
          </p>
          <h2 className="reviewer-name">Karuppiah T</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Hi to all. I am mahesh from Oman. I joined the course on March 2021
            and completed successfully. Even though I completed course before 9
            month, as on today if I get any doubts I will call guruvayur
            associates for professional help. Ragu sir and madhu madam aways
            happy to help us. They are like our own family members. We can clear
            any doubt at any time. Syllabus what they are teaching during the
            course is perfectly fit to become an successful structural engineer.
            I highly recommend this course to all the upcoming enthusiasts
            Engineers. All the very best to guruvayur associates and keep the
            good work."
          </p>
          <h2 className="reviewer-name">Magesh G</h2>
        </div>

        

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "A best place to gain structural engineering knowledge and very
            useful to learn software. Classes of Mr.Ragothaman was very
            interactive which provides clear and easy way to understand the
            topics."
          </p>
          <h2 className="reviewer-name">Mahima Shivkumar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "A remarkable teacher indeed. He has helped in learning the subject
            to the core, with thorough pragmatic approach he makes his student
            understand the subject so well. Words are less to define his way of
            teaching. An outstanding approach to make people learn in a
            practical way, not just those who are from industrial background but
            also the students who are pursuing their graduate course in civil
            engineering.Thank you sir."
          </p>
          <h2 className="reviewer-name">Mamta Tewari</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Very good place to refresh the structural engineering knowledge and
            to learn softwares. I would highly recommend my tutor Mr.Ragothaman
            who gave me the confidence to get in track of civil engineering
            after a long gap of 4 years."
          </p>
          <h2 className="reviewer-name">Mercy Varghese</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Highly appreciated. It is better practical structural analysis and
            designing classes to learn basic and in depth concept of structures
            at all. I have got clarity on the structural engineering concepts
            with industrial standards and procedures and the added benefit is
            that the training is given by an industrial professionals. Thank you
            so much sir."
          </p>
          <h2 className="reviewer-name">Milan Kumar Dhar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "This course is very helpful to every civil engineers. I have gained
            lot of knowledge from this course and this is more than the my whole
            college period and i am now full of confident to design all
            structural even concrete or steel. Sir you have very good teaching
            talent to explain deep concepts from a simple examples. Your
            payments schedules & class times are so flexible. I am so lucky to
            have done this course. Thanks a lot. Please all civil engineers do
            this course and be a professional engineer."
          </p>
          <h2 className="reviewer-name">Mohamed Nazir</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "It is really helpful for upgrading our knowledge in structural
            engineering and i'm looking for more advanced course like dynamic
            analysis. Hope it will be organized soon."
          </p>
          <h2 className="reviewer-name">Mohammed Jamsheed</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "It is really very best scratch course which revises your all design
            concepts and regains confidence in structural design. Ultimately it
            helps you a lot in your profession. I suggest kindly enroll
            immediately."
          </p>
          <h2 className="reviewer-name">Muralidhar Desai</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Hi, I really appreciate the Structural Guru team and the founder
            who created this to educate me in structural design domain. I am
            still learning the course and building confidence on this domain."
          </p>
          <h2 className="reviewer-name">Naveen</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I'm a student in 4th semester of MTech in structural engineering,
            where i did not have much knowledge how to connect my technical idea
            in real life project. After attending the online training now i am
            so confident to do all the structural related designs."
          </p>
          <h2 className="reviewer-name">Prashanth Naidu</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Excellent live classes on Practical structural designing classes
            with practical working concepts. Only one person who is sharing
            utmost inportmat knowledge & skills with his vast experience. I have
            learned many things by attending the courses provided by Gururayar
            Associates."
          </p>
          <h2 className="reviewer-name">Rajakumar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Mr. Ragothaman class that conquered my fear of Structural analysis
            & design. I really appreciate Mr. Ragothaman being so patient with
            me and working so hard to boost my confidence. The additional
            instruction he gave me beyond the theory is very helpful to
            understand structural concepts."
          </p>
          <h2 className="reviewer-name">Rifai Nawas</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I joined this class to upgrade my structural knowledge because I
            have so many structural issuing problems during my job. All the
            instructors are kind and patient. They are very experienced in the
            design field they are teaching. They explained about the structural
            issues such a practical and understandable way. I highly recommend
            this class who are seeking about structural design."
          </p>
          <h2 className="reviewer-name">Sneha</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Gururayar Associates offers the best platform for all the
            interested candidates to study and learn structural designs and
            software like etabs at the very reasonable fee. Tutors are
            explicitly amazing to make every candidate a very confident
            structure engineer.I am sure no one would regret for taking up this
            course. Thanks."
          </p>
          <h2 className="reviewer-name">Sonam Choki</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Best course for all civil engineers (Freshers as well as Practicing
            engineers). Gururayar associates has highly qualified and
            experienced professionals having in-depth knowledge of structural
            engg subjects, softwares, codes and also consulting industry
            practices being led by Raghu Sir who is expert Residential,
            commercial, industrial, oil and gas projects. I recommend to join
            this practical structure design course."
          </p>
          <h2 className="reviewer-name">Tanveer Khan</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Used to think how designing of structure is done and used to think
            why different type of reinforcement are used in construction of a
            building. Approaching Gururayar associates and learning from skilled
            structural engineer made me realised that I am into right place,time
            and person to learn structural engineering from basic to advance
            level. Thank you for sharing your knowledge and it was awesome
            journey of 4 plus month with you sir. Best wishes ahead for letting
            me learn new things which I was not aware of."
          </p>
          <h2 className="reviewer-name">Tenzin Lhop</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Gururayar Associates provided excellent webinar courses, classes
            are helpful to refresh with subject. I got a confidence to restart
            my carrier after a long gap. Thank you sir for providing such good
            courses. I'm suggesting to every student who is looking for civil
            software courses, can join and attain great opportunities."
          </p>
          <h2 className="reviewer-name">Vijai P</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I am a Mechanical Engineer with more than forty years of
            experience. After retirement I wanted to learn Structural Design
            covering both theoretical and software. I approached Raghu of
            Gururayar Associates. He adopted special techniques in teaching me
            the theory as I have completely lost my touch with the Engineering
            basics. Now I have mastered not only Structural Design but also
            softwares like Etabs, StaadPro, RCDC. I am now able to work
            independently as Structural Engineer for both RCC and Steel
            Structures. I thank Gururayar Associates and recommend to anyone who
            wants to become Professional Structural Consultant. K.Dhayanidhi."
          </p>
          <h2 className="reviewer-name">Kathiresan Dhayanidhi</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "If you are looking to learn structural designing, then the content
            of the webinars which contains both theory and practical in software
            will enhance you to start designing independently. It's not
            necessary to have any knowledge on design, they shall start from
            basics and explain with very good practical examples. And the best
            thing is that, they will clarify your doubts even after the
            completion of course and very supportive."
          </p>
          <h2 className="reviewer-name">Aditya Kumar Paturi</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "From basic to top current industry knowledge explained in very easy
            to understand way. Best part is Mr. Raghu sir is very kind and down
            to earth person who adjusts and doesn't complaint regarding missing
            classes or postponing them due to your working schedule if you miss
            few of them. With my case he has already adjusted and changed even
            my batches twice according to my convince, as my working schedule is
            a mess. Thank you sir so much!"
          </p>
          <h2 className="reviewer-name">Anudatta Kulkarni</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Best course for all civil engineers/ structuralengineers (Freshers
            as well as Practicing engineers). Gururayar associates has highly
            qualified and experienced professionals having in-depth knowledge of
            structural engg subjects, softwares, codes and also consulting
            industry practices. I recommend to join this practical structure
            design course."
          </p>
          <h2 className="reviewer-name">Anushree</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I got an opportunity to get trained from a highly professional
            instructor. I got a clear view about the structure design both
            theoretically and practically. I am fully satisfied with the way
            they delivered the course content. It will be an honor to get
            enrolled in more courses in the future. Also, I strongly recommend
            anyone willing to join the course without any hesitation no matter
            whether you are professional or beginners."
          </p>
          <h2 className="reviewer-name">Basanta Khadka</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "The way the contents are arranged is so easy to understand, the
            concepts are definetly comprehensive. The team and lectures are
            super responsive which makes good environment to pick up the
            structural design skill. I wish to see more from Structural Guru."
          </p>
          <h2 className="reviewer-name">Elijah Banda M</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "A great place to gain structural engineering and software
            knowledge. You have set very high standards of service and great
            efforts are highly appreciated. I recommend this institute for civil
            engineers/designers. Good luck to Gururayar Associates and team."
          </p>
          <h2 className="reviewer-name">G Prakash</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Decades over I never found this type of guidence, with your
            guidance I boost myself. Being an M.Tech I was never confident to
            start my own career, but after your guidence I will soon start my
            own company definitely."
          </p>
          <h2 className="reviewer-name">Santosh Kumar Singh</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "It's one of the best institute for civil engineers. This institute
            covers many topics in course no other institute covers. All
            relevant, realistic, real time approach of topics embedded in due
            course. Online teachong facility is really helpful. I recommend this
            institute for enthusiastic civil engineers."
          </p>
          <h2 className="reviewer-name">Hari Prasanth</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Great! One can easily understand the concepts because of the close
            contact with the students, and can clarify the doubts. A very well
            experienced tutor with more than 20 years of experience. The courses
            offered are worth paying and are reasonable."
          </p>
          <h2 className="reviewer-name">Harini Sridhar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I got an interview from one of the companies in Bangalore for
            structural engineer role and have got selected which has been done
            with the help of you and Structural Guru. Thank you so much for the
            opportunity to join in Structural Guru."
          </p>
          <h2 className="reviewer-name">Karuppiah T</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Hi to all. I am mahesh from Oman. I joined the course on March 2021
            and completed successfully. Even though I completed course before 9
            month, as on today if I get any doubts I will call guruvayur
            associates for professional help. Ragu sir and madhu madam aways
            happy to help us. They are like our own family members. We can clear
            any doubt at any time. Syllabus what they are teaching during the
            course is perfectly fit to become an successful structural engineer.
            I highly recommend this course to all the upcoming enthusiasts
            Engineers. All the very best to guruvayur associates and keep the
            good work."
          </p>
          <h2 className="reviewer-name">Magesh G</h2>
        </div>

        {/* 20 completed above */}

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "A best place to gain structural engineering knowledge and very
            useful to learn software. Classes of Mr.Ragothaman was very
            interactive which provides clear and easy way to understand the
            topics."
          </p>
          <h2 className="reviewer-name">Mahima Shivkumar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "A remarkable teacher indeed. He has helped in learning the subject
            to the core, with thorough pragmatic approach he makes his student
            understand the subject so well. Words are less to define his way of
            teaching. An outstanding approach to make people learn in a
            practical way, not just those who are from industrial background but
            also the students who are pursuing their graduate course in civil
            engineering.Thank you sir."
          </p>
          <h2 className="reviewer-name">Mamta Tewari</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Very good place to refresh the structural engineering knowledge and
            to learn softwares. I would highly recommend my tutor Mr.Ragothaman
            who gave me the confidence to get in track of civil engineering
            after a long gap of 4 years."
          </p>
          <h2 className="reviewer-name">Mercy Varghese</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Highly appreciated. It is better practical structural analysis and
            designing classes to learn basic and in depth concept of structures
            at all. I have got clarity on the structural engineering concepts
            with industrial standards and procedures and the added benefit is
            that the training is given by an industrial professionals. Thank you
            so much sir."
          </p>
          <h2 className="reviewer-name">Milan Kumar Dhar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "This course is very helpful to every civil engineers. I have gained
            lot of knowledge from this course and this is more than the my whole
            college period and i am now full of confident to design all
            structural even concrete or steel. Sir you have very good teaching
            talent to explain deep concepts from a simple examples. Your
            payments schedules & class times are so flexible. I am so lucky to
            have done this course. Thanks a lot. Please all civil engineers do
            this course and be a professional engineer."
          </p>
          <h2 className="reviewer-name">Mohamed Nazir</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "It is really helpful for upgrading our knowledge in structural
            engineering and i'm looking for more advanced course like dynamic
            analysis. Hope it will be organized soon."
          </p>
          <h2 className="reviewer-name">Mohammed Jamsheed</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "It is really very best scratch course which revises your all design
            concepts and regains confidence in structural design. Ultimately it
            helps you a lot in your profession. I suggest kindly enroll
            immediately."
          </p>
          <h2 className="reviewer-name">Muralidhar Desai</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Hi, I really appreciate the Structural Guru team and the founder
            who created this to educate me in structural design domain. I am
            still learning the course and building confidence on this domain."
          </p>
          <h2 className="reviewer-name">Naveen</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I'm a student in 4th semester of MTech in structural engineering,
            where i did not have much knowledge how to connect my technical idea
            in real life project. After attending the online training now i am
            so confident to do all the structural related designs."
          </p>
          <h2 className="reviewer-name">Prashanth Naidu</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Excellent live classes on Practical structural designing classes
            with practical working concepts. Only one person who is sharing
            utmost inportmat knowledge & skills with his vast experience. I have
            learned many things by attending the courses provided by Gururayar
            Associates."
          </p>
          <h2 className="reviewer-name">Rajakumar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Mr. Ragothaman class that conquered my fear of Structural analysis
            & design. I really appreciate Mr. Ragothaman being so patient with
            me and working so hard to boost my confidence. The additional
            instruction he gave me beyond the theory is very helpful to
            understand structural concepts."
          </p>
          <h2 className="reviewer-name">Rifai Nawas</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I joined this class to upgrade my structural knowledge because I
            have so many structural issuing problems during my job. All the
            instructors are kind and patient. They are very experienced in the
            design field they are teaching. They explained about the structural
            issues such a practical and understandable way. I highly recommend
            this class who are seeking about structural design."
          </p>
          <h2 className="reviewer-name">Sneha</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Gururayar Associates offers the best platform for all the
            interested candidates to study and learn structural designs and
            software like etabs at the very reasonable fee. Tutors are
            explicitly amazing to make every candidate a very confident
            structure engineer.I am sure no one would regret for taking up this
            course. Thanks."
          </p>
          <h2 className="reviewer-name">Sonam Choki</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Best course for all civil engineers (Freshers as well as Practicing
            engineers). Gururayar associates has highly qualified and
            experienced professionals having in-depth knowledge of structural
            engg subjects, softwares, codes and also consulting industry
            practices being led by Raghu Sir who is expert Residential,
            commercial, industrial, oil and gas projects. I recommend to join
            this practical structure design course."
          </p>
          <h2 className="reviewer-name">Tanveer Khan</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Used to think how designing of structure is done and used to think
            why different type of reinforcement are used in construction of a
            building. Approaching Gururayar associates and learning from skilled
            structural engineer made me realised that I am into right place,time
            and person to learn structural engineering from basic to advance
            level. Thank you for sharing your knowledge and it was awesome
            journey of 4 plus month with you sir. Best wishes ahead for letting
            me learn new things which I was not aware of."
          </p>
          <h2 className="reviewer-name">Tenzin Lhop</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Gururayar Associates provided excellent webinar courses, classes
            are helpful to refresh with subject. I got a confidence to restart
            my carrier after a long gap. Thank you sir for providing such good
            courses. I'm suggesting to every student who is looking for civil
            software courses, can join and attain great opportunities."
          </p>
          <h2 className="reviewer-name">Vijai P</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I am a Mechanical Engineer with more than forty years of
            experience. After retirement I wanted to learn Structural Design
            covering both theoretical and software. I approached Raghu of
            Gururayar Associates. He adopted special techniques in teaching me
            the theory as I have completely lost my touch with the Engineering
            basics. Now I have mastered not only Structural Design but also
            softwares like Etabs, StaadPro, RCDC. I am now able to work
            independently as Structural Engineer for both RCC and Steel
            Structures. I thank Gururayar Associates and recommend to anyone who
            wants to become Professional Structural Consultant. K.Dhayanidhi."
          </p>
          <h2 className="reviewer-name">Kathiresan Dhayanidhi</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "If you are looking to learn structural designing, then the content
            of the webinars which contains both theory and practical in software
            will enhance you to start designing independently. It's not
            necessary to have any knowledge on design, they shall start from
            basics and explain with very good practical examples. And the best
            thing is that, they will clarify your doubts even after the
            completion of course and very supportive."
          </p>
          <h2 className="reviewer-name">Aditya Kumar Paturi</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "From basic to top current industry knowledge explained in very easy
            to understand way. Best part is Mr. Raghu sir is very kind and down
            to earth person who adjusts and doesn't complaint regarding missing
            classes or postponing them due to your working schedule if you miss
            few of them. With my case he has already adjusted and changed even
            my batches twice according to my convince, as my working schedule is
            a mess. Thank you sir so much!"
          </p>
          <h2 className="reviewer-name">Anudatta Kulkarni</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Best course for all civil engineers/ structuralengineers (Freshers
            as well as Practicing engineers). Gururayar associates has highly
            qualified and experienced professionals having in-depth knowledge of
            structural engg subjects, softwares, codes and also consulting
            industry practices. I recommend to join this practical structure
            design course."
          </p>
          <h2 className="reviewer-name">Anushree</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I got an opportunity to get trained from a highly professional
            instructor. I got a clear view about the structure design both
            theoretically and practically. I am fully satisfied with the way
            they delivered the course content. It will be an honor to get
            enrolled in more courses in the future. Also, I strongly recommend
            anyone willing to join the course without any hesitation no matter
            whether you are professional or beginners."
          </p>
          <h2 className="reviewer-name">Basanta Khadka</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "The way the contents are arranged is so easy to understand, the
            concepts are definetly comprehensive. The team and lectures are
            super responsive which makes good environment to pick up the
            structural design skill. I wish to see more from Structural Guru."
          </p>
          <h2 className="reviewer-name">Elijah Banda M</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "A great place to gain structural engineering and software
            knowledge. You have set very high standards of service and great
            efforts are highly appreciated. I recommend this institute for civil
            engineers/designers. Good luck to Gururayar Associates and team."
          </p>
          <h2 className="reviewer-name">G Prakash</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "First of all I'm very glad that I attended the course. It offers
            knowledge from very basic fundamental concepts to high level. Also,
            the tutor is very experienced and explains the concepts clearly.
            Being a fresher I found it very useful."
          </p>
          <h2 className="reviewer-name">Keerthy Nagarajan</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Decades over I never found this type of guidence, with your
            guidance I boost myself. Being an M.Tech I was never confident to
            start my own career, but after your guidence I will soon start my
            own company definitely."
          </p>
          <h2 className="reviewer-name">Santosh Kumar Singh</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "It's one of the best institute for civil engineers. This institute
            covers many topics in course no other institute covers. All
            relevant, realistic, real time approach of topics embedded in due
            course. Online teachong facility is really helpful. I recommend this
            institute for enthusiastic civil engineers."
          </p>
          <h2 className="reviewer-name">Hari Prasanth</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Great! One can easily understand the concepts because of the close
            contact with the students, and can clarify the doubts. A very well
            experienced tutor with more than 20 years of experience. The courses
            offered are worth paying and are reasonable."
          </p>
          <h2 className="reviewer-name">Harini Sridhar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I got an interview from one of the companies in Bangalore for
            structural engineer role and have got selected which has been done
            with the help of you and Structural Guru. Thank you so much for the
            opportunity to join in Structural Guru."
          </p>
          <h2 className="reviewer-name">Karuppiah T</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Hi to all. I am mahesh from Oman. I joined the course on March 2021
            and completed successfully. Even though I completed course before 9
            month, as on today if I get any doubts I will call guruvayur
            associates for professional help. Ragu sir and madhu madam aways
            happy to help us. They are like our own family members. We can clear
            any doubt at any time. Syllabus what they are teaching during the
            course is perfectly fit to become an successful structural engineer.
            I highly recommend this course to all the upcoming enthusiasts
            Engineers. All the very best to guruvayur associates and keep the
            good work."
          </p>
          <h2 className="reviewer-name">Magesh G</h2>
        </div>

        {/* 20 completed above */}

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "A best place to gain structural engineering knowledge and very
            useful to learn software. Classes of Mr.Ragothaman was very
            interactive which provides clear and easy way to understand the
            topics."
          </p>
          <h2 className="reviewer-name">Mahima Shivkumar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "A remarkable teacher indeed. He has helped in learning the subject
            to the core, with thorough pragmatic approach he makes his student
            understand the subject so well. Words are less to define his way of
            teaching. An outstanding approach to make people learn in a
            practical way, not just those who are from industrial background but
            also the students who are pursuing their graduate course in civil
            engineering.Thank you sir."
          </p>
          <h2 className="reviewer-name">Mamta Tewari</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Very good place to refresh the structural engineering knowledge and
            to learn softwares. I would highly recommend my tutor Mr.Ragothaman
            who gave me the confidence to get in track of civil engineering
            after a long gap of 4 years."
          </p>
          <h2 className="reviewer-name">Mercy Varghese</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Highly appreciated. It is better practical structural analysis and
            designing classes to learn basic and in depth concept of structures
            at all. I have got clarity on the structural engineering concepts
            with industrial standards and procedures and the added benefit is
            that the training is given by an industrial professionals. Thank you
            so much sir."
          </p>
          <h2 className="reviewer-name">Milan Kumar Dhar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "This course is very helpful to every civil engineers. I have gained
            lot of knowledge from this course and this is more than the my whole
            college period and i am now full of confident to design all
            structural even concrete or steel. Sir you have very good teaching
            talent to explain deep concepts from a simple examples. Your
            payments schedules & class times are so flexible. I am so lucky to
            have done this course. Thanks a lot. Please all civil engineers do
            this course and be a professional engineer."
          </p>
          <h2 className="reviewer-name">Mohamed Nazir</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "It is really helpful for upgrading our knowledge in structural
            engineering and i'm looking for more advanced course like dynamic
            analysis. Hope it will be organized soon."
          </p>
          <h2 className="reviewer-name">Mohammed Jamsheed</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "It is really very best scratch course which revises your all design
            concepts and regains confidence in structural design. Ultimately it
            helps you a lot in your profession. I suggest kindly enroll
            immediately."
          </p>
          <h2 className="reviewer-name">Muralidhar Desai</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Hi, I really appreciate the Structural Guru team and the founder
            who created this to educate me in structural design domain. I am
            still learning the course and building confidence on this domain."
          </p>
          <h2 className="reviewer-name">Naveen</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I'm a student in 4th semester of MTech in structural engineering,
            where i did not have much knowledge how to connect my technical idea
            in real life project. After attending the online training now i am
            so confident to do all the structural related designs."
          </p>
          <h2 className="reviewer-name">Prashanth Naidu</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Excellent live classes on Practical structural designing classes
            with practical working concepts. Only one person who is sharing
            utmost inportmat knowledge & skills with his vast experience. I have
            learned many things by attending the courses provided by Gururayar
            Associates."
          </p>
          <h2 className="reviewer-name">Rajakumar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Mr. Ragothaman class that conquered my fear of Structural analysis
            & design. I really appreciate Mr. Ragothaman being so patient with
            me and working so hard to boost my confidence. The additional
            instruction he gave me beyond the theory is very helpful to
            understand structural concepts."
          </p>
          <h2 className="reviewer-name">Rifai Nawas</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I joined this class to upgrade my structural knowledge because I
            have so many structural issuing problems during my job. All the
            instructors are kind and patient. They are very experienced in the
            design field they are teaching. They explained about the structural
            issues such a practical and understandable way. I highly recommend
            this class who are seeking about structural design."
          </p>
          <h2 className="reviewer-name">Sneha</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Gururayar Associates offers the best platform for all the
            interested candidates to study and learn structural designs and
            software like etabs at the very reasonable fee. Tutors are
            explicitly amazing to make every candidate a very confident
            structure engineer.I am sure no one would regret for taking up this
            course. Thanks."
          </p>
          <h2 className="reviewer-name">Sonam Choki</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Best course for all civil engineers (Freshers as well as Practicing
            engineers). Gururayar associates has highly qualified and
            experienced professionals having in-depth knowledge of structural
            engg subjects, softwares, codes and also consulting industry
            practices being led by Raghu Sir who is expert Residential,
            commercial, industrial, oil and gas projects. I recommend to join
            this practical structure design course."
          </p>
          <h2 className="reviewer-name">Tanveer Khan</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Used to think how designing of structure is done and used to think
            why different type of reinforcement are used in construction of a
            building. Approaching Gururayar associates and learning from skilled
            structural engineer made me realised that I am into right place,time
            and person to learn structural engineering from basic to advance
            level. Thank you for sharing your knowledge and it was awesome
            journey of 4 plus month with you sir. Best wishes ahead for letting
            me learn new things which I was not aware of."
          </p>
          <h2 className="reviewer-name">Tenzin Lhop</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Gururayar Associates provided excellent webinar courses, classes
            are helpful to refresh with subject. I got a confidence to restart
            my carrier after a long gap. Thank you sir for providing such good
            courses. I'm suggesting to every student who is looking for civil
            software courses, can join and attain great opportunities."
          </p>
          <h2 className="reviewer-name">Vijai P</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I am a Mechanical Engineer with more than forty years of
            experience. After retirement I wanted to learn Structural Design
            covering both theoretical and software. I approached Raghu of
            Gururayar Associates. He adopted special techniques in teaching me
            the theory as I have completely lost my touch with the Engineering
            basics. Now I have mastered not only Structural Design but also
            softwares like Etabs, StaadPro, RCDC. I am now able to work
            independently as Structural Engineer for both RCC and Steel
            Structures. I thank Gururayar Associates and recommend to anyone who
            wants to become Professional Structural Consultant. K.Dhayanidhi."
          </p>
          <h2 className="reviewer-name">Kathiresan Dhayanidhi</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "If you are looking to learn structural designing, then the content
            of the webinars which contains both theory and practical in software
            will enhance you to start designing independently. It's not
            necessary to have any knowledge on design, they shall start from
            basics and explain with very good practical examples. And the best
            thing is that, they will clarify your doubts even after the
            completion of course and very supportive."
          </p>
          <h2 className="reviewer-name">Aditya Kumar Paturi</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "From basic to top current industry knowledge explained in very easy
            to understand way. Best part is Mr. Raghu sir is very kind and down
            to earth person who adjusts and doesn't complaint regarding missing
            classes or postponing them due to your working schedule if you miss
            few of them. With my case he has already adjusted and changed even
            my batches twice according to my convince, as my working schedule is
            a mess. Thank you sir so much!"
          </p>
          <h2 className="reviewer-name">Anudatta Kulkarni</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Best course for all civil engineers/ structuralengineers (Freshers
            as well as Practicing engineers). Gururayar associates has highly
            qualified and experienced professionals having in-depth knowledge of
            structural engg subjects, softwares, codes and also consulting
            industry practices. I recommend to join this practical structure
            design course."
          </p>
          <h2 className="reviewer-name">Anushree</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I got an opportunity to get trained from a highly professional
            instructor. I got a clear view about the structure design both
            theoretically and practically. I am fully satisfied with the way
            they delivered the course content. It will be an honor to get
            enrolled in more courses in the future. Also, I strongly recommend
            anyone willing to join the course without any hesitation no matter
            whether you are professional or beginners."
          </p>
          <h2 className="reviewer-name">Basanta Khadka</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "The way the contents are arranged is so easy to understand, the
            concepts are definetly comprehensive. The team and lectures are
            super responsive which makes good environment to pick up the
            structural design skill. I wish to see more from Structural Guru."
          </p>
          <h2 className="reviewer-name">Elijah Banda M</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "A great place to gain structural engineering and software
            knowledge. You have set very high standards of service and great
            efforts are highly appreciated. I recommend this institute for civil
            engineers/designers. Good luck to Gururayar Associates and team."
          </p>
          <h2 className="reviewer-name">G Prakash</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Decades over I never found this type of guidence, with your
            guidance I boost myself. Being an M.Tech I was never confident to
            start my own career, but after your guidence I will soon start my
            own company definitely."
          </p>
          <h2 className="reviewer-name">Santosh Kumar Singh</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "It's one of the best institute for civil engineers. This institute
            covers many topics in course no other institute covers. All
            relevant, realistic, real time approach of topics embedded in due
            course. Online teachong facility is really helpful. I recommend this
            institute for enthusiastic civil engineers."
          </p>
          <h2 className="reviewer-name">Hari Prasanth</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Great! One can easily understand the concepts because of the close
            contact with the students, and can clarify the doubts. A very well
            experienced tutor with more than 20 years of experience. The courses
            offered are worth paying and are reasonable."
          </p>
          <h2 className="reviewer-name">Harini Sridhar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I got an interview from one of the companies in Bangalore for
            structural engineer role and have got selected which has been done
            with the help of you and Structural Guru. Thank you so much for the
            opportunity to join in Structural Guru."
          </p>
          <h2 className="reviewer-name">Karuppiah T</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Hi to all. I am mahesh from Oman. I joined the course on March 2021
            and completed successfully. Even though I completed course before 9
            month, as on today if I get any doubts I will call guruvayur
            associates for professional help. Ragu sir and madhu madam aways
            happy to help us. They are like our own family members. We can clear
            any doubt at any time. Syllabus what they are teaching during the
            course is perfectly fit to become an successful structural engineer.
            I highly recommend this course to all the upcoming enthusiasts
            Engineers. All the very best to guruvayur associates and keep the
            good work."
          </p>
          <h2 className="reviewer-name">Magesh G</h2>
        </div>

        {/* 20 completed above */}

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "A best place to gain structural engineering knowledge and very
            useful to learn software. Classes of Mr.Ragothaman was very
            interactive which provides clear and easy way to understand the
            topics."
          </p>
          <h2 className="reviewer-name">Mahima Shivkumar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "A remarkable teacher indeed. He has helped in learning the subject
            to the core, with thorough pragmatic approach he makes his student
            understand the subject so well. Words are less to define his way of
            teaching. An outstanding approach to make people learn in a
            practical way, not just those who are from industrial background but
            also the students who are pursuing their graduate course in civil
            engineering.Thank you sir."
          </p>
          <h2 className="reviewer-name">Mamta Tewari</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Very good place to refresh the structural engineering knowledge and
            to learn softwares. I would highly recommend my tutor Mr.Ragothaman
            who gave me the confidence to get in track of civil engineering
            after a long gap of 4 years."
          </p>
          <h2 className="reviewer-name">Mercy Varghese</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Highly appreciated. It is better practical structural analysis and
            designing classes to learn basic and in depth concept of structures
            at all. I have got clarity on the structural engineering concepts
            with industrial standards and procedures and the added benefit is
            that the training is given by an industrial professionals. Thank you
            so much sir."
          </p>
          <h2 className="reviewer-name">Milan Kumar Dhar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "This course is very helpful to every civil engineers. I have gained
            lot of knowledge from this course and this is more than the my whole
            college period and i am now full of confident to design all
            structural even concrete or steel. Sir you have very good teaching
            talent to explain deep concepts from a simple examples. Your
            payments schedules & class times are so flexible. I am so lucky to
            have done this course. Thanks a lot. Please all civil engineers do
            this course and be a professional engineer."
          </p>
          <h2 className="reviewer-name">Mohamed Nazir</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "It is really helpful for upgrading our knowledge in structural
            engineering and i'm looking for more advanced course like dynamic
            analysis. Hope it will be organized soon."
          </p>
          <h2 className="reviewer-name">Mohammed Jamsheed</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "It is really very best scratch course which revises your all design
            concepts and regains confidence in structural design. Ultimately it
            helps you a lot in your profession. I suggest kindly enroll
            immediately."
          </p>
          <h2 className="reviewer-name">Muralidhar Desai</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Hi, I really appreciate the Structural Guru team and the founder
            who created this to educate me in structural design domain. I am
            still learning the course and building confidence on this domain."
          </p>
          <h2 className="reviewer-name">Naveen</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I'm a student in 4th semester of MTech in structural engineering,
            where i did not have much knowledge how to connect my technical idea
            in real life project. After attending the online training now i am
            so confident to do all the structural related designs."
          </p>
          <h2 className="reviewer-name">Prashanth Naidu</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Excellent live classes on Practical structural designing classes
            with practical working concepts. Only one person who is sharing
            utmost inportmat knowledge & skills with his vast experience. I have
            learned many things by attending the courses provided by Gururayar
            Associates."
          </p>
          <h2 className="reviewer-name">Rajakumar</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Mr. Ragothaman class that conquered my fear of Structural analysis
            & design. I really appreciate Mr. Ragothaman being so patient with
            me and working so hard to boost my confidence. The additional
            instruction he gave me beyond the theory is very helpful to
            understand structural concepts."
          </p>
          <h2 className="reviewer-name">Rifai Nawas</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I joined this class to upgrade my structural knowledge because I
            have so many structural issuing problems during my job. All the
            instructors are kind and patient. They are very experienced in the
            design field they are teaching. They explained about the structural
            issues such a practical and understandable way. I highly recommend
            this class who are seeking about structural design."
          </p>
          <h2 className="reviewer-name">Sneha</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Gururayar Associates offers the best platform for all the
            interested candidates to study and learn structural designs and
            software like etabs at the very reasonable fee. Tutors are
            explicitly amazing to make every candidate a very confident
            structure engineer.I am sure no one would regret for taking up this
            course. Thanks."
          </p>
          <h2 className="reviewer-name">Sonam Choki</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Best course for all civil engineers (Freshers as well as Practicing
            engineers). Gururayar associates has highly qualified and
            experienced professionals having in-depth knowledge of structural
            engg subjects, softwares, codes and also consulting industry
            practices being led by Raghu Sir who is expert Residential,
            commercial, industrial, oil and gas projects. I recommend to join
            this practical structure design course."
          </p>
          <h2 className="reviewer-name">Tanveer Khan</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Used to think how designing of structure is done and used to think
            why different type of reinforcement are used in construction of a
            building. Approaching Gururayar associates and learning from skilled
            structural engineer made me realised that I am into right place,time
            and person to learn structural engineering from basic to advance
            level. Thank you for sharing your knowledge and it was awesome
            journey of 4 plus month with you sir. Best wishes ahead for letting
            me learn new things which I was not aware of."
          </p>
          <h2 className="reviewer-name">Tenzin Lhop</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Gururayar Associates provided excellent webinar courses, classes
            are helpful to refresh with subject. I got a confidence to restart
            my carrier after a long gap. Thank you sir for providing such good
            courses. I'm suggesting to every student who is looking for civil
            software courses, can join and attain great opportunities."
          </p>
          <h2 className="reviewer-name">Vijai P</h2>
        </div>

        <div className="text-review">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I am a Mechanical Engineer with more than forty years of
            experience. After retirement I wanted to learn Structural Design
            covering both theoretical and software. I approached Raghu of
            Gururayar Associates. He adopted special techniques in teaching me
            the theory as I have completely lost my touch with the Engineering
            basics. Now I have mastered not only Structural Design but also
            softwares like Etabs, StaadPro, RCDC. I am now able to work
            independently as Structural Engineer for both RCC and Steel
            Structures. I thank Gururayar Associates and recommend to anyone who
            wants to become Professional Structural Consultant. K.Dhayanidhi."
          </p>
          <h2 className="reviewer-name">Kathiresan Dhayanidhi</h2>
        </div>

        {/* 35 completed above */}
      </div>

      <div className="reviews-lower-div">
        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Great course."</p>
          <h2 className="reviewer-name">Sanjay Kakade</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Good technical team and simple teaching. Any doubt about the topic
            is clarified immediately."
          </p>
          <h2 className="reviewer-name">Rekha Rao</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Professionalism, Responsiveness"</p>
          <h2 className="reviewer-name">Abdul Shukoor P</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "According to me, it's the best practical civil structural
            engineering training institute i had ever seen."
          </p>
          <h2 className="reviewer-name">Protik Mondal</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "If you want to be structural artist, this is the best platform."
          </p>
          <h2 className="reviewer-name">Shashi Shekhar Singh</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"More Informative"</p>
          <h2 className="reviewer-name">Padmasri Mahesh</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "It was wonderful experience to take this course. Easy, specific and
            valuable. Appreciated Mr.Raghu, wish you all the best."
          </p>
          <h2 className="reviewer-name">Parshuram Poudel</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Best coaching. One can be confident enough to be a full fledeged
            practical/professional structural engineer after completion of the
            course. Highly useful."
          </p>
          <h2 className="reviewer-name">Sridhar Balakrishnan</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Teaching is very good."</p>
          <h2 className="reviewer-name">Pradeep Vignesh</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Professionalism, Quality, Responsiveness, Value."
          </p>
          <h2 className="reviewer-name">Natarajan</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "At affordable price and in simple language sir will teach us.
            Excellent work, excellent teacher."
          </p>
          <h2 className="reviewer-name">Vijay Badi</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I am so much interested in structural design but I don't know how
            can design structure. When I met structural guru training I could
            learn such unknown things in structure. Thank you Gururayar
            Associates."
          </p>
          <h2 className="reviewer-name">Lokesh Satya</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Course was very useful for structural engineers. You can learn
            practically from basics. Madhu was very good at explaining."
          </p>
          <h2 className="reviewer-name">Maruthi Chand</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Excellent faculties teaching from basic Structural Engineering. All
            staff are cordial and always ready to co-operate."
          </p>
          <h2 className="reviewer-name">Kishor Behera</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Quality, Professionalism, Value, Responsiveness."
          </p>
          <h2 className="reviewer-name">Md.Ahasanul Kabir</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Impressive syllabus setting, proper teachings. Practical examples
            of the concepts."
          </p>
          <h2 className="reviewer-name">Kaustubh Patil</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "This associate is best manual and softwear training and supporting
            technically problem solutions."
          </p>
          <h2 className="reviewer-name">Tekram Bais</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Had a good knowledge on structural design. Their teaching is really
            awesome. Thank you."
          </p>
          <h2 className="reviewer-name">Kaviya R</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Great"</p>
          <h2 className="reviewer-name">Lavanya BN</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Professionalism"</p>
          <h2 className="reviewer-name">Vijay Kalimuthu TR</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Excellent teaching with affordable price especially in our mother
            tongue."
          </p>
          <h2 className="reviewer-name">Gopal Sangeetha</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Very helpful for me. Got great exposure for structural engineering
            here. Great response for any quarry by their side."
          </p>
          <h2 className="reviewer-name">VK Mishra</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Very well structured design course, the way he connects the theory
            to field is just awesome. This course is totally worth it."
          </p>
          <h2 className="reviewer-name">Ahamed Jaslan</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Really good experience. We had design with practical experience
            also. Now we got confidence to do design for building. Thanks
            Gururayar Associates."
          </p>
          <h2 className="reviewer-name">Hari Hara Sudan</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Excellent ! Extremely resourceful training. Was immensly
            benefited."
          </p>
          <h2 className="reviewer-name">Girish P Mirji</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Quality, Professionalism, Value, Responsiveness."
          </p>
          <h2 className="reviewer-name">Shashi Singh</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Dear Sir, you have set very high standards being a teacher. Your
            great efforts are highly appreciated. I have no words to thank you.
            Still I will give you standing ovation."
          </p>
          <h2 className="reviewer-name">Akhilesh Dubey</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I will highly recommend the courses offered by "Gururayar
            Associates". I get all my doubts cleared about structural design,
            even after session they helped me regarding my doubts"
          </p>
          <h2 className="reviewer-name">Akhilesh Singh Shahi</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "This is one of the finest place to learn any kind of structural
            analysis in detail."
          </p>
          <h2 className="reviewer-name">Rabi Dhakal</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Professionalism"</p>
          <h2 className="reviewer-name">Vishal Shinde</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Realistic coaching, nice communication, good subject assistance."
          </p>
          <h2 className="reviewer-name">Vivek Kancharla</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Professionalism, Quality, Responsiveness, Value."
          </p>
          <h2 className="reviewer-name">Rahul Varghese</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Very well structured course. If you want to learn structural
            engineering from the scratch and doesn't want to invest too much of
            money, this course is best."
          </p>
          <h2 className="reviewer-name">Shrish Mishra</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "You are playing a major role in making real engineers by your
            wonderful coaching. Thank you sir."
          </p>
          <h2 className="reviewer-name">Silvanus J</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Very good explanation about concrete design and real time design.
            Guided me for real time construction and own buisness."
          </p>
          <h2 className="reviewer-name">Chinna Mani</h2>
        </div>

        {/* 35 completed above */}

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "This course that includes industrial structural engineering and
            softwares is beneficial for students as well as working
            professionals. Staffs are friendly and are always open to share
            their views and suggestions."
          </p>
          <h2 className="reviewer-name">Namitha Mohan</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Structural course is very well in basic knowledge in design easily
            understandable. Very useful for beginners in this course."
          </p>
          <h2 className="reviewer-name">Veerashobana R</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Best ever tutor, everything they are covering and explain in
            detail, low budget with high return."
          </p>
          <h2 className="reviewer-name">Pravin Savani</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Good."</p>
          <h2 className="reviewer-name">S.Shamshu SSA</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Excellent Technical Guidance."</p>
          <h2 className="reviewer-name">Sureshkumar Yalangi</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Civil engineering structural design course is of high quality and
            affordable."
          </p>
          <h2 className="reviewer-name">Suraj Gain</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"It's a good platform to start from basics."</p>
          <h2 className="reviewer-name">Manik Reddy</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Very good experienced training provided."</p>
          <h2 className="reviewer-name">Swetha Ranganath</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Great course."</p>
          <h2 className="reviewer-name">Sanjay Kakade</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Good technical team and simple teaching. Any doubt about the topic
            is clarified immediately."
          </p>
          <h2 className="reviewer-name">Rekha Rao</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Professionalism, Responsiveness"</p>
          <h2 className="reviewer-name">Abdul Shukoor P</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "According to me, it's the best practical civil structural
            engineering training institute i had ever seen."
          </p>
          <h2 className="reviewer-name">Protik Mondal</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "If you want to be structural artist, this is the best platform."
          </p>
          <h2 className="reviewer-name">Shashi Shekhar Singh</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"More Informative"</p>
          <h2 className="reviewer-name">Padmasri Mahesh</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "It was wonderful experience to take this course. Easy, specific and
            valuable. Appreciated Mr.Raghu, wish you all the best."
          </p>
          <h2 className="reviewer-name">Parshuram Poudel</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Best coaching. One can be confident enough to be a full fledeged
            practical/professional structural engineer after completion of the
            course. Highly useful."
          </p>
          <h2 className="reviewer-name">Sridhar Balakrishnan</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Teaching is very good."</p>
          <h2 className="reviewer-name">Pradeep Vignesh</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Professionalism, Quality, Responsiveness, Value."
          </p>
          <h2 className="reviewer-name">Natarajan</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "At affordable price and in simple language sir will teach us.
            Excellent work, excellent teacher."
          </p>
          <h2 className="reviewer-name">Vijay Badi</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I am so much interested in structural design but I don't know how
            can design structure. When I met structural guru training I could
            learn such unknown things in structure. Thank you Gururayar
            Associates."
          </p>
          <h2 className="reviewer-name">Lokesh Satya</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Course was very useful for structural engineers. You can learn
            practically from basics. Madhu was very good at explaining."
          </p>
          <h2 className="reviewer-name">Maruthi Chand</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Excellent faculties teaching from basic Structural Engineering. All
            staff are cordial and always ready to co-operate."
          </p>
          <h2 className="reviewer-name">Kishor Behera</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Quality, Professionalism, Value, Responsiveness."
          </p>
          <h2 className="reviewer-name">Md.Ahasanul Kabir</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Impressive syllabus setting, proper teachings. Practical examples
            of the concepts."
          </p>
          <h2 className="reviewer-name">Kaustubh Patil</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "This associate is best manual and softwear training and supporting
            technically problem solutions."
          </p>
          <h2 className="reviewer-name">Tekram Bais</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Had a good knowledge on structural design. Their teaching is really
            awesome. Thank you."
          </p>
          <h2 className="reviewer-name">Kaviya R</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Great"</p>
          <h2 className="reviewer-name">Lavanya BN</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Professionalism"</p>
          <h2 className="reviewer-name">Vijay Kalimuthu TR</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Excellent teaching with affordable price especially in our mother
            tongue."
          </p>
          <h2 className="reviewer-name">Gopal Sangeetha</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Very helpful for me. Got great exposure for structural engineering
            here. Great response for any quarry by their side."
          </p>
          <h2 className="reviewer-name">VK Mishra</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Very well structured design course, the way he connects the theory
            to field is just awesome. This course is totally worth it."
          </p>
          <h2 className="reviewer-name">Ahamed Jaslan</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Really good experience. We had design with practical experience
            also. Now we got confidence to do design for building. Thanks
            Gururayar Associates."
          </p>
          <h2 className="reviewer-name">Hari Hara Sudan</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Excellent ! Extremely resourceful training. Was immensly
            benefited."
          </p>
          <h2 className="reviewer-name">Girish P Mirji</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Quality, Professionalism, Value, Responsiveness."
          </p>
          <h2 className="reviewer-name">Shashi Singh</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Dear Sir, you have set very high standards being a teacher. Your
            great efforts are highly appreciated. I have no words to thank you.
            Still I will give you standing ovation."
          </p>
          <h2 className="reviewer-name">Akhilesh Dubey</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "I will highly recommend the courses offered by "Gururayar
            Associates". I get all my doubts cleared about structural design,
            even after session they helped me regarding my doubts"
          </p>
          <h2 className="reviewer-name">Akhilesh Singh Shahi</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "This is one of the finest place to learn any kind of structural
            analysis in detail."
          </p>
          <h2 className="reviewer-name">Rabi Dhakal</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Professionalism"</p>
          <h2 className="reviewer-name">Vishal Shinde</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Realistic coaching, nice communication, good subject assistance."
          </p>
          <h2 className="reviewer-name">Vivek Kancharla</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Professionalism, Quality, Responsiveness, Value."
          </p>
          <h2 className="reviewer-name">Rahul Varghese</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Very well structured course. If you want to learn structural
            engineering from the scratch and doesn't want to invest too much of
            money, this course is best."
          </p>
          <h2 className="reviewer-name">Shrish Mishra</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "You are playing a major role in making real engineers by your
            wonderful coaching. Thank you sir."
          </p>
          <h2 className="reviewer-name">Silvanus J</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Very good explanation about concrete design and real time design.
            Guided me for real time construction and own buisness."
          </p>
          <h2 className="reviewer-name">Chinna Mani</h2>
        </div>

        {/* 35 completed above */}

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "This course that includes industrial structural engineering and
            softwares is beneficial for students as well as working
            professionals. Staffs are friendly and are always open to share
            their views and suggestions."
          </p>
          <h2 className="reviewer-name">Namitha Mohan</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Structural course is very well in basic knowledge in design easily
            understandable. Very useful for beginners in this course."
          </p>
          <h2 className="reviewer-name">Veerashobana R</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Best ever tutor, everything they are covering and explain in
            detail, low budget with high return."
          </p>
          <h2 className="reviewer-name">Pravin Savani</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Good."</p>
          <h2 className="reviewer-name">S.Shamshu SSA</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Excellent Technical Guidance."</p>
          <h2 className="reviewer-name">Sureshkumar Yalangi</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Civil engineering structural design course is of high quality and
            affordable."
          </p>
          <h2 className="reviewer-name">Suraj Gain</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"It's a good platform to start from basics."</p>
          <h2 className="reviewer-name">Manik Reddy</h2>
        </div>

        <div className="text-review-2">
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Very good experienced training provided."</p>
          <h2 className="reviewer-name">Swetha Ranganath</h2>
        </div>
      </div>
    </section>
  );
};

export default Section6;
