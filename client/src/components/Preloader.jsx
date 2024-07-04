import { useEffect } from "react";
import "../styles/Preloader.scss";

const Preloader = ({ onLoadComplete }) => {
  useEffect(() => {
    const pre = document.querySelector(".donut-container");
    let totalCharacters = 2000,
      angleZ = 0,
      angleY = 0;

    const interval = setInterval(() => {
      angleZ += 0.05;
      angleY += 0.03;

      const outputArray = [...new Array(totalCharacters)].map((_, index) =>
          index % 80 === 79 ? "\n" : " "
        ),
        depthBuffer = new Array(totalCharacters).fill(0),
        cosZ = Math.cos(angleZ),
        sinZ = Math.sin(angleZ),
        cosY = Math.cos(angleY),
        sinY = Math.sin(angleY);

      for (let theta = 0; theta < 6.28; theta += 0.03) {
        const cosTheta = Math.cos(theta),
          sinTheta = Math.sin(theta);

        for (let phi = 0; phi < 6.28; phi += 0.01) {
          const sinPhi = Math.sin(phi),
            cosPhi = Math.cos(phi),
            circleX = cosTheta + 2,
            reciprocalDepth =
              1 / (sinPhi * circleX * sinZ + sinTheta * cosZ + 5),
            circleY = sinPhi * circleX * cosZ - sinTheta * sinZ,
            xPos =
              0 |
              (40 +
                30 *
                  reciprocalDepth *
                  (cosPhi * circleX * cosY - circleY * sinY)),
            yPos =
              0 |
              (12 +
                15 *
                  reciprocalDepth *
                  (cosPhi * circleX * sinY + circleY * cosY)),
            luminanceIndex =
              0 |
              (8 *
                ((sinTheta * sinZ - sinPhi * cosTheta * cosZ) * cosY -
                  sinPhi * cosTheta * sinZ -
                  sinTheta * cosZ -
                  cosPhi * cosTheta * sinY)),
            outputIndex = xPos + 80 * yPos;

          if (
            yPos < 30 &&
            yPos >= 0 &&
            xPos >= 0 &&
            xPos < 79 &&
            reciprocalDepth > depthBuffer[outputIndex]
          ) {
            depthBuffer[outputIndex] = reciprocalDepth;
            outputArray[outputIndex] = ".,-~:;=!*#$@"[
              luminanceIndex > 0 ? luminanceIndex : 0
            ];
          }
        }
      }

      pre.innerHTML = outputArray.join("");
    }, 50);

    function AsciiProgress(parentId, options) {
      this.options = Object.assign(
        {
          openCharacter: "",
          loadedCharacter: " ",
          backgroundCharacter: " ",
          closeCharacter: "",
          length: 20,
          value: 0,
          completeAt: 100,
          showComment: true,
          commentLocation: "bottom",
          startingComment: "Loading hardik.exe",
          showPercent: true,
          percentLocation: "middle",
          percentDecimalPlaces: 2,
          onComplete: function () {
            setTimeout(() => {
              setTimeout(() => {
                onLoadComplete();
              }, 700);
            }, 500);
          },
        },
        options
      );

      if (this.options.onStart) this.options.onStart();

      this.parent = document.getElementById(parentId);
      this.parent.innerHTML = "";

      this.progressElement = this.parent.appendChild(
        document.createElement("div")
      );

      if (this.options.showComment) {
        this.commentElement = document.createElement("div");
        if (this.options.commentLocation === "top") {
          this.parent.prepend(this.commentElement);
        } else {
          this.parent.appendChild(this.commentElement);
        }
      }

      this.percent = 0;
      this.value = this.options.value;

      this.init();
    }

    AsciiProgress.prototype.setComment = function (comment) {
      if (this.options.showComment) {
        this.commentElement.innerHTML = comment;
      }
    };

    AsciiProgress.prototype.setValue = function (amount) {
      if (this.value > this.options.completeAt) return;

      this.value = amount;
      this.percent = (this.value / this.options.completeAt) * 100;

      if (this.options.onUpdate)
        this.options.onUpdate(
          this.value,
          this.options.completeAt,
          this.percent
        );

      this.redraw(amount);

      if (this.percent >= 100 && this.options.onComplete) {
        this.options.onComplete();
      }
    };

    AsciiProgress.prototype.init = function () {
      this.parent.style.display = "inline-block";
      this.progressElement.style.whiteSpace = "pre-wrap";
      if (this.options.showComment) {
        this.commentElement.style.textAlign = "center";
      }

      this.setComment(this.options.startingComment);
      this.setValue(this.options.value);
    };

    AsciiProgress.prototype.redraw = function (amount) {
      const amountPerBlock = this.options.completeAt / this.options.length;
      const blocks = Math.min(
        Math.ceil(this.value / amountPerBlock),
        this.options.length
      );

      let str = this.options.openCharacter;
      str += this.options.loadedCharacter.repeat(blocks);
      str += this.options.backgroundCharacter.repeat(
        this.options.length - blocks
      );
      str += this.options.closeCharacter;

      if (this.options.showPercent) {
        const middle = Math.floor(str.length / 2);
        const formattedPercent = this.percent
          .toFixed(this.options.percentDecimalPlaces)
          .toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          });

        str = `${str.slice(0, middle)} ${formattedPercent}% ${str.slice(
          middle
        )}`;
      }

      this.progressElement.innerText = str;
    };

    var progressbar = new AsciiProgress("progressbar", {});

    let value = 0;
    const progressInterval = setInterval(() => {
      if (value >= 100) {
        clearInterval(progressInterval);
        progressbar.setValue(100);
      } else {
        value += 1;
        progressbar.setValue(value);
      }
    }, 120);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [onLoadComplete]);

  return (
    <div id="preloader" className="wrapper">
      <div className="container">
        <pre className="donut-container"></pre>
        <div className="progress-bar">
          <div id="progressbar"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;