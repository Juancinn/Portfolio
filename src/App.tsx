import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import AboutMe from "./components/About/AboutMe/AboutMe";
import NavBubbles from "./components/NavBubbles/NavBubbles";
import Arrow from "./components/Hero/Arrow";
import SettingsIcon from "./components/Hero/SettingsIcon/SettingsIcon";
import ColorPicker from "./components/Hero/ColorPicker/ColorPicker";
import LandingAnimation from "./components/LandingAnimation/LandingAnimation";
import "./App.css";

const gradients = [
  {
    name: "Default",
    colors: ["#f3ec78", "#af4261"],
    rgb: ["243, 236, 120", "175, 66, 97"],
  },
  {
    name: "Mint Green to Blue",
    colors: ["#1fdb70", "#48d3e8"],
    rgb: ["31, 219, 112", "72, 211, 232"],
  },
  {
    name: "Purple to Pink",
    colors: ["#d34edd", "#f29bff"],
    rgb: ["211, 78, 221", "242, 155, 255"],
  },
  {
    name: "White to Grey",
    colors: ["#e0eafc", "#a1a4a8"],
    rgb: ["224, 234, 252", "161, 164, 168"],
  },
];

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [showNavBubbles, setShowNavBubbles] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [gradient, setGradient] = useState<string[]>(["#f3ec78", "#af4261"]);
  const [rgb, setRgb] = useState<string[]>(["243, 236, 120", "175, 66, 97"]);
  const [visibleSection, setVisibleSection] = useState<string>("Hero");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 6000); // Total duration of the landing animation

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    if (!showNavBubbles && window.scrollY > 0) {
      setShowNavBubbles(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showNavBubbles]);

  const handleSelectGradient = (colors: string[], rgb: string[]) => {
    setGradient(colors);
    setRgb(rgb);
    document.documentElement.style.setProperty("--gradient-start", colors[0]);
    document.documentElement.style.setProperty("--gradient-end", colors[1]);
    document.documentElement.style.setProperty("--gradient-start-rgb", rgb[0]);
    document.documentElement.style.setProperty("--gradient-end-rgb", rgb[1]);
    document.documentElement.style.setProperty(
      "--default-gradient",
      `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`
    );
    setShowSettings(false);
  };

  const renderSection = () => {
    switch (visibleSection) {
      case "AboutMe":
        return <AboutMe />;
      default:
        return (
          <>
            <div className="hero-section">
              <Hero />
              <Arrow />
            </div>
            <About />
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#24222e]">
      {!showContent && <LandingAnimation />}
      {showContent && (
        <>
          <div className="relative min-h-screen">{renderSection()}</div>
          <NavBubbles
            show={showNavBubbles}
            setVisibleSection={setVisibleSection}
          />
          <SettingsIcon
            show={showNavBubbles}
            onClick={() => setShowSettings(true)}
          />
          <ColorPicker
            show={showSettings}
            onClose={() => setShowSettings(false)}
            onSelect={(colors) =>
              handleSelectGradient(
                colors,
                gradients.find((g) => g.colors[0] === colors[0])?.rgb || [
                  "243, 236, 120",
                  "175, 66, 97",
                ]
              )
            }
          />
        </>
      )}
    </div>
  );
};

export default App;
