import { useState } from "react";

import logo from "./images/logo.svg";
import icon1 from "./images/icon-access-anywhere.svg";
import icon2 from "./images/icon-security.svg";
import icon3 from "./images/icon-collaboration.svg";
import icon4 from "./images/icon-any-file.svg";
import location from "./images/icon-location.svg";
import phone from "./images/icon-phone.svg";
import emailicon from "./images/icon-email.svg";
import facebook from "./images/logo-facebook (1).svg";
import twitter from "./images/logo-twitter.svg";
import instagram from "./images/logo-instagram.svg";

const testimonial =
  "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.";

const profiles = [
  {
    id: 1,
    picture: require("./images/profile-1.jpg"),
    name: "Satish Patel",
    job: "Founder & CEO, Huddle",
  },
  {
    id: 2,
    picture: require("./images/profile-2.jpg"),
    name: "Bruce Mckenzie",
    job: "Founder & CEO, Huddle",
  },
  {
    id: 3,
    picture: require("./images/profile-3.jpg"),
    name: "Iva Boyd",
    job: "Founder & CEO, Huddle",
  },
];

const ctosData = [
  {
    id: 1,
    icon: icon1,
    header: "Access your files, anywhere",
    paragraph:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    id: 2,
    icon: icon2,
    header: "Security you can trust",
    paragraph:
      " 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    id: 3,
    icon: icon3,
    header: "Real-time collaboration",
    paragraph:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    id: 4,
    icon: icon4,
    header: "Store any type of file",
    paragraph:
      " Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="app-intro">
        <Header>
          <Logo />
          <Nav />
        </Header>
        <Intro />
      </div>
      <div className="app-main">
        <Main>
          <CallToAction />
          <StayProduvtive />
          <Testimonials />
        </Main>
      </div>
      <SignUp />
      <Footer />
    </div>
  );
}

function Header({ children }) {
  return <header className="header">{children}</header>;
}

function Main({ children }) {
  return <div className="main">{children}</div>;
}

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="fylo logo" />
    </div>
  );
}

function Nav() {
  return (
    <ul className="nav-bar">
      <li>Features</li>
      <li>Team</li>
      <li>Sign in</li>
    </ul>
  );
}

function Intro() {
  return (
    <div className="intro">
      <img src={require("./images/illustration-intro.png")} alt="" />
      <h2> All your files in one secure location, accessible anywhere.</h2>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button>Get Started</button>
    </div>
  );
}

function CallToAction() {
  return (
    <ul className="call-to-action">
      {ctosData.map((cto) => (
        <Cto
          key={cto.id}
          icon={cto.icon}
          header={cto.header}
          paragraph={cto.paragraph}
        />
      ))}
    </ul>
  );
}

function Cto({ icon, header, paragraph }) {
  return (
    <li>
      <img src={icon} alt={header} />
      <h3>{header}</h3>
      <p>{paragraph}</p>
    </li>
  );
}

function StayProduvtive() {
  return (
    <div className="stay-productive">
      <img src={require("./images/illustration-stay-productive.png")} alt="" />
      <div className="stay-productive-text">
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          {" "}
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <span>See how Fylo works &rarr; </span>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div>
      <img
        className="quotes"
        src={require("./images/bg-quotes.png")}
        alt="quotes"
      />
      <ul className="testimonials">
        {profiles.map((profile) => (
          <Profile
            testimonial={testimonial}
            profile={profile}
            key={profile.id}
            name={profile.name}
            job={profile.job}
            picture={profile.picture}
          />
        ))}
      </ul>
    </div>
  );
}

function Profile({ testimonial, job, picture, name }) {
  return (
    <li>
      <p>{testimonial}</p>
      <div className="profile">
        <img src={picture} alt={name} />
        <h4>{name}</h4>
        <span>{job}</span>
      </div>
    </li>
  );
}

function SignUp() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      setError(true);
    } else {
      setError(false);
      setEmail("");
    }
  }

  return (
    <div className="sign-up">
      <h2>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form className="form">
        <input
          type="text"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!email.includes("@", ".com") && error && (
          <span className="error">Please enter a valid email address</span>
        )}
        <button onClick={handleSubmit}>Get started For Free</button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <img className="footer-logo" src={logo} alt="fylo logo" />
      <div className="footer">
        <div className="pin">
          <img src={location} alt="pin" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <ul className="footer-items">
          <li className="contacts">
            <img src={phone} alt="phone" />
            <span>+1-543-123-4567</span>
          </li>
          <li className="contacts">
            <img src={emailicon} alt="email" />
            <span>example@fylo.com</span>
          </li>
        </ul>
        <ul className="footer-items">
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
        <ul className="footer-items">
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>

        <ul className="socials">
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
          <li>
            <img src={instagram} alt="instagram" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
