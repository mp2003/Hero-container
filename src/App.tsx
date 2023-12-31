import { FaApple } from "react-icons/fa";

import { MdArrowOutward } from "react-icons/md";
import user1 from "./assets/user1.webp";
import user2 from "./assets/user2.webp";
import user3 from "./assets/user3.webp";
import mobile from "./assets/1JFj3FwlaG94oqSBTQUOdyY6nHA.webp";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <nav className="navigation">
            <div className="logo-name">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="122"
                height="32"
                fill="none"
              >
                <path
                  fill="#8792F7"
                  d="M19.429 16h-6.857v13.715h6.857V16zm0-13.714h-6.857v6.857h6.857V2.286zm6.857 6.857H19.43V16h6.857V9.143zM12.572 16H5.715v6.858h6.857V16z"
                />
                <path
                  fill="#000"
                  d="M41.383 24V12.656h2.256v1.89h.043c.229-.608.648-1.113 1.256-1.514.61-.4 1.304-.601 2.084-.601.795 0 1.483.204 2.063.612.58.401.977.906 1.192 1.515h.043c.244-.595.684-1.096 1.322-1.504.637-.416 1.385-.623 2.245-.623.702 0 1.339.154 1.912.462a3.365 3.365 0 0 1 1.364 1.375c.337.601.505 1.357.505 2.266V24h-2.32v-7.251c0-.81-.226-1.393-.677-1.751-.444-.358-.97-.537-1.58-.537-.751 0-1.346.233-1.782.698-.43.458-.645 1.046-.645 1.762V24h-2.277v-7.401c0-.652-.208-1.171-.623-1.558-.416-.387-.942-.58-1.58-.58a2.51 2.51 0 0 0-1.224.312c-.38.2-.684.5-.913.902-.23.4-.344.899-.344 1.493V24h-2.32zm23.686.258c-1.124 0-2.09-.254-2.9-.763a5.051 5.051 0 0 1-1.87-2.095c-.429-.895-.644-1.912-.644-3.05 0-1.16.226-2.185.677-3.073.451-.895 1.074-1.597 1.87-2.105.794-.516 1.71-.774 2.75-.774.801 0 1.528.144 2.18.43.651.287 1.21.695 1.676 1.225.472.522.83 1.146 1.074 1.869.25.723.376 1.522.376 2.395v.634h-9.582v-1.719h8.379l-1.02.505c0-.694-.126-1.296-.377-1.804a2.782 2.782 0 0 0-1.063-1.193c-.459-.28-1-.419-1.622-.419-.616 0-1.153.14-1.612.42-.45.279-.802.676-1.052 1.192-.251.508-.376 1.11-.376 1.804v1c0 .708.121 1.335.365 1.88.25.536.612.959 1.085 1.267.472.3 1.045.451 1.719.451.494 0 .927-.075 1.3-.226.379-.15.69-.358.934-.623.25-.272.43-.587.537-.945h2.224a4.196 4.196 0 0 1-.924 1.944 4.835 4.835 0 0 1-1.762 1.3c-.702.315-1.482.473-2.342.473zM72.213 24V12.656h2.224v1.837h.043c.207-.623.533-1.106.977-1.45.451-.35 1.038-.526 1.762-.526.172 0 .33.007.472.021.15.007.272.018.366.032v2.149a19.305 19.305 0 0 0-.484-.065 5.739 5.739 0 0 0-.73-.043c-.423 0-.81.1-1.16.301-.351.193-.63.49-.838.892-.208.4-.312.91-.312 1.525V24h-2.32zm12.031.258c-1.081 0-2.03-.25-2.847-.752a5.1 5.1 0 0 1-1.9-2.084c-.452-.895-.678-1.92-.678-3.072 0-1.168.226-2.199.677-3.094.451-.895 1.085-1.594 1.901-2.095.817-.508 1.766-.763 2.847-.763.91 0 1.722.18 2.439.537a4.525 4.525 0 0 1 2.545 3.62H86.93a2.78 2.78 0 0 0-.462-1.117 2.284 2.284 0 0 0-.892-.773c-.372-.186-.813-.28-1.321-.28-.645 0-1.2.165-1.665.495-.459.322-.813.78-1.064 1.375-.243.594-.365 1.293-.365 2.095 0 .794.122 1.486.365 2.073.251.587.606 1.042 1.064 1.364.465.322 1.02.483 1.665.483.773 0 1.368-.196 1.783-.59.423-.401.71-.931.86-1.59h2.33a4.484 4.484 0 0 1-.794 2.137 4.682 4.682 0 0 1-1.751 1.494c-.717.358-1.53.537-2.439.537zm14.61-5.038v-6.564h2.32V24h-2.278v-1.89h-.043c-.25.587-.662 1.088-1.235 1.503-.566.409-1.292.613-2.18.613a4.512 4.512 0 0 1-2.138-.516 3.862 3.862 0 0 1-1.558-1.515c-.386-.673-.58-1.496-.58-2.47v-7.069h2.32v6.79c0 .902.237 1.586.71 2.051.472.466 1.102.698 1.89.698.509 0 .97-.104 1.386-.311a2.35 2.35 0 0 0 1.01-.967c.25-.444.376-1.01.376-1.697zM103.73 24V12.656h2.224v1.837h.043c.208-.623.534-1.106.978-1.45.451-.35 1.038-.526 1.761-.526.172 0 .33.007.473.021.15.007.272.018.365.032v2.149a19.266 19.266 0 0 0-.483-.065 5.747 5.747 0 0 0-.731-.043c-.422 0-.809.1-1.16.301-.351.193-.63.49-.838.892-.207.4-.311.91-.311 1.525V24h-2.321zm9.475 4.49h-1.461v-2.03h1.139c.401 0 .712-.125.934-.376.23-.25.412-.555.548-.913l.451-1.171-4.318-11.344h2.471l3.083 8.637h.043l3.04-8.637h2.427l-5.059 13.32a4.442 4.442 0 0 1-.784 1.365c-.323.38-.698.666-1.128.86a3.3 3.3 0 0 1-1.386.29z"
                />
              </svg>{" "}
            </div>
            <ul className="nav-list">
              <li>
                {" "}
                <a href="/">Product</a>
              </li>
              <li>
                {" "}
                <a href="/">Compare</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#0E0E11"
                    d="m12 15-4.243-4.243 1.415-1.414L12 12.172l2.828-2.83 1.415 1.415L12 15z"
                  />
                </svg>
              </li>
              <li>
                {" "}
                <a href="/">Pricing</a>
              </li>
              <li>
                {" "}
                <a href="/">Contact</a>
              </li>
            </ul>
            <div className="navigation-button">
              <button className="nav-button login"> Login</button>
              <button className="nav-button">
                <span className="button-text">Let's Talk</span> {"  "}
                <MdArrowOutward size={20} color={"white"} />{" "}
              </button>
            </div>
          </nav>
          <main className="main-container ">
            <div className="content fade-in-text">
              <button className="main-btn">Financial Management</button>
              <h1>
                A simpler, smarter basic credit{" "}
                <span className="bg-change">card.</span>
              </h1>
              <p>
                Your powerful companion on the road to financial success!
                Explore personal budget management, investment opportunities.
              </p>
            </div>
            <div className="user-svg fade-in-text">
              <button>
                <FaApple size={20} />
                <span
                  style={{
                    marginLeft: "5px",
                    top: "1.5px",
                    position: "relative",
                  }}
                >
                  App store
                </span>
              </button>

              <div className="user-img">
                <img src={user1} className="user-image one" alt="" />
                <img src={user2} className="user-image two" alt="" />
                <img src={user3} className="user-image three" alt="" />
              </div>

              <div className="count">
                <div className="number">24K+</div>
                <span>Active User</span>
              </div>
            </div>
            <div className="image-container slide-in-bottom">
              <img src={mobile} alt="" className="slide-in-bottom" />
            </div>
          </main>
          <aside className="aside-container fade-in"></aside>
        </div>
      </div>
    </>
  );
};

export default App;
