import { css } from "@linaria/core";

export const globals = css`
  :global() {
    @font-face {
      font-family: "Pretendard";
      font-weight: 700;
      font-display: swap;
      src: local("Pretendard"),
            url("../assets/fonts/Pretendard-Bold.woff2") format("woff2"), 
            url("../assets/fonts/Pretendard-Bold.woff") format("woff"),
            url("../assets/fonts/Pretendard-Bold.otf") format("opentype"); 
    }
    
    @font-face {
      font-family: "Pretendard";
      font-weight: 500;
      font-display: swap;
      src: local("Pretendard"),
            url("../assets/fonts/Pretendard-Medium.woff2") format("woff2"), 
            url("../assets/fonts/Pretendard-Medium.woff") format("woff"),
            url("../assets/fonts/Pretendard-Medium.otf") format("opentype"); 
    }
    
    @font-face {
      font-family: "Pretendard";
      font-weight: 400;
      font-display: swap;
      src: local("Pretendard"),
            url("../assets/fonts/Pretendard-Regular.woff2") format("woff2"), 
            url("../assets/fonts/Pretendard-Regular.woff") format("woff"),
            url("../assets/fonts/Pretendard-Regular.otf") format("opentype"); 
    }

    *,
    *:before,
    *:after {
      box-sizing: border-box;
      font-family: "Pretendard", "sans-serif";
    }
  }
`;
