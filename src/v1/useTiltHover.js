import { useEffect } from "react";

const MAX_TILT = 8;

const applyTilt = (event) => {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;

  const rotateY = (x - 0.5) * MAX_TILT;
  const rotateX = (0.5 - y) * MAX_TILT;

  target.style.setProperty("--tilt-x", `${rotateX}deg`);
  target.style.setProperty("--tilt-y", `${rotateY}deg`);
  target.style.setProperty("--hover-x", `${x * 100}%`);
  target.style.setProperty("--hover-y", `${y * 100}%`);
};

const resetTilt = (event) => {
  const target = event.currentTarget;
  target.style.setProperty("--tilt-x", "0deg");
  target.style.setProperty("--tilt-y", "0deg");
  target.style.setProperty("--hover-x", "50%");
  target.style.setProperty("--hover-y", "50%");
};

const useTiltHover = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll(".v1-button");

    buttons.forEach((button) => {
      button.addEventListener("mousemove", applyTilt);
      button.addEventListener("mouseleave", resetTilt);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mousemove", applyTilt);
        button.removeEventListener("mouseleave", resetTilt);
      });
    };
  }, []);
};

export default useTiltHover;
