import { useRef, useState } from "react";
import styles from "./Scroll.module.css";

export const Scroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  // const { current: scrollContainer } = scrollRef;
  const [trackLeft, setTrackLeft] = useState(false);
  const [trackRight, setTrackRight] = useState(true);

  const manageArrows = () => {
    if (scrollRef.current) {
      const leftArrowVisible = scrollRef.current.scrollLeft >= 20;
      const rightArrowVisble =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 20;
      if (leftArrowVisible) {
        setTrackLeft(true);
      } else {
        setTrackLeft(false);
      }

      if (scrollRef.current.scrollLeft >= rightArrowVisble) {
        setTrackRight(false);
      } else {
        setTrackRight(true);
      }
    }
  };

  const handleArrows = (direction: string) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -150 : 150;
      scrollRef.current.scrollLeft += scrollAmount;
      manageArrows();
    }
  };

  const handleScroll = () => {
    manageArrows();
  };

  return (
    <div className={styles.full_container}>
      <div className={styles.scroll_container} onScroll={() => handleScroll()}>
        <div
          className={styles.left_arrow}
          style={{ display: trackLeft ? "flex" : "none" }}
          onClick={() => {
            handleArrows("left");
          }}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_6075_122965)">
              <g clipPath="url(#clip0_6075_122965)">
                <rect
                  width="36"
                  height="32"
                  rx="8"
                  transform="matrix(1 0 0 -1 10 41)"
                  fill="#EDF2F7"
                />
                <rect
                  width="24"
                  height="24"
                  transform="translate(16 13)"
                  fill="#EDF2F7"
                />
                <path
                  d="M31 19L25 25L31 31"
                  stroke="#232B38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_6075_122965"
                x="0"
                y="0"
                width="56"
                height="56"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="6" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_6075_122965"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_6075_122965"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_6075_122965">
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  transform="matrix(1 0 0 -1 12 41)"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          ref={scrollRef}
            onScroll={() => handleScroll()}
          className={styles.scrollable_container}
        >
          <div className={styles.card}>Hello</div>
          <div className={styles.card}>Hello</div>
          <div className={styles.card}>Hello</div>
          <div className={styles.card}>Hello</div>
          <div className={styles.card}>Hello</div>
          <div className={styles.card}>Hello</div>
          <div className={styles.card}>Hello</div>
          <div className={styles.card}>Hello</div>
          <div className={styles.card}>Hello</div>
          <div className={styles.card}>Hello</div>
          <div className={styles.card}>Hello</div>
          <div className={styles.card}>Hello</div>
        </div>
        <div
          className={styles.right_arrow}
          style={{ display: trackRight ? "flex" : "none" }}
          onClick={() => {
            handleArrows("right");
          }}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_6075_122961)">
              <g clipPath="url(#clip0_6075_122961)">
                <rect
                  x="10"
                  y="9"
                  width="36"
                  height="32"
                  rx="8"
                  fill="#EDF2F7"
                />
                <rect
                  width="24"
                  height="24"
                  transform="matrix(1 0 0 -1 16 37)"
                  fill="#EDF2F7"
                />
                <path
                  d="M25 31L31 25L25 19"
                  stroke="#232B38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_6075_122961"
                x="0"
                y="0"
                width="56"
                height="56"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="6" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_6075_122961"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_6075_122961"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_6075_122961">
                <rect
                  x="12"
                  y="9"
                  width="32"
                  height="32"
                  rx="16"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
