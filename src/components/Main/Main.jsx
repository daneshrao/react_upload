import React from "react";
import { Container } from "./style"
import HeroCont from "../Hero/Hero";
import Particles from "react-tsparticles";
import dockerIcon from "../../assets/icons8-docker.svg";
import elkIcon from "../../assets/elastic.svg";
import kubeIcon from "../../assets/kube.png";
import jsIcon from "../../assets/js-icon.svg";
import grafanaIcon from "../../assets/grafana.svg";
import pythonIcon from "../../assets/python.svg";
import vsIcon from "../../assets/vscode-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import PrometheusIcon from "../../assets/prometheus.svg";
import gitHubIcon from "../../assets/github.png";

function Main() {
  return (
    <Container>

      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 2,
              },
              connect: {
                distance: 80,
                lineLinked: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 2,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            lineLinked: {
              blink: false,
              color: "#000",
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              limit: 20,
              value: 15,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 1,
            },
            rotate: {
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
              direction: "random",
              random: true,
              value: 0,
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              image: [
                {
                  src: dockerIcon,
                  width: 50,
                  height: 50,
                },
                {
                  src: PrometheusIcon,
                  width: 50,
                  height: 50,
                },

                {
                  src: elkIcon,
                  width: 50,
                  height: 50,
                },
                {
                  src: kubeIcon,
                  width: 50,
                  height: 50,
                },
                {
                  src: jsIcon,
                  width: 50,
                  height: 50,
                },
                {
                  src: grafanaIcon,
                  width: 50,
                  height: 50,
                },
                {
                  src: pythonIcon,
                  width: 50,
                  height: 50,
                },
                {
                  src: reactIcon,
                  width: 50,
                  height: 50,
                },
                {
                  src: htmlIcon,
                  width: 50,
                  height: 50,
                },
                {
                  src: vsIcon,
                  width: 50,
                  height: 50,
                },
                {
                  src: cssIcon,
                  width: 50,
                  height: 50,
                },
                {
                  src: gitHubIcon,
                  width: 50,
                  height: 50,
                },
              ],
              polygon: {
                sides: 5,
              },
              stroke: {
                color: "#000000",
                width: 0,
              },
              type: "image",
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false,
              },
              random: false,
              value: 16,
            },
          },
          polygon: {
            draw: {
              enable: false,
              lineColor: "#ffffff",
              lineWidth: 0.5,
            },
            move: {
              radius: 10,
            },
            scale: 1,
            url: "",
          },
          background: {
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
      
      <HeroCont/>
    </Container>
  );
}

export default Main;
