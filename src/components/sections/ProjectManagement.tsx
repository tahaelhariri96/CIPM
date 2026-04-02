import './ProjectManagement.css';
import image0 from '../../assets/04. SMAC Badge Logo.svg';
import image1 from '../../assets/05. SMCC Badge Logo.svg';
import image2 from '../../assets/06. SMFC Badge Logog.svg';

function AboutProjectManagement() {
  return (
    <h1 style={{ alignSelf: 'stretch', width: '100%', maxWidth: '858px', color: 'rgba(55, 56, 55, 1)', fontSize: '36px', fontWeight: '600', textAlign: 'left', lineHeight: '120.00000476837158%', margin: 0 }}>About Project Management</h1>
  );
}

function ProjectDescription() {
  return (
    <h3 style={{ alignSelf: 'stretch', width: '100%', maxWidth: '858px', color: 'rgba(83, 84, 83, 1)', fontSize: '18px', fontWeight: '300', textAlign: 'left', lineHeight: '139.9999976158142%', margin: 0 }}>Project management is the practice of planning, organizing, and guiding work from start to finish — ensuring the right things get done, on time, and within budget. In a world where businesses juggle competing priorities at every turn, it has become one of the most essential disciplines driving efficiency, innovation, and results across every industry.</h3>
  );
}

const projectReasonsList = [
  "Organizations lose an average of 11.4% of their investment due to poor project performance. That's not just a statistic — it translates to missed deadlines, blown budgets, and unrealized goals. Structured project management directly addresses these challenges by providing clear frameworks for decision-making, resource allocation, and risk management.",
  "The applications span far beyond traditional industries. Healthcare systems use it to roll out new patient care protocols. Technology firms rely on it to ship software on schedule. Nonprofits apply it to coordinate large-scale community initiatives.",
  "Whether the goal is launching a product, implementing a new system, or managing an organizational change, project management provides the structure that turns ambition into measurable outcomes."
];

export default function ProjectManagement() { 
  return (
    <section className="project-wrapper" style={{ marginTop: '550px' }}>
      <SideDecorativeGraphics />

      <div className="project-content"> 
        <header className="project-header">
          <AboutProjectManagement />
          <ProjectDescription />
        </header>

        <div className="project-body">
          <ClipboardGraphic />

          <div className="project-reasons-section">
            <h2>Why Project Management Matters</h2>
            
            <div className="project-list">
              <div className="project-list-line"></div>
              
              {projectReasonsList.map((text, index) => (
                <div key={index} className="project-list-item">
                  <div className="project-list-bullet"></div>
                  <p className="project-list-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BackgroundEllipse = () => (
  <svg className="project-bg-ellipse" width="1926" height="115" viewBox="0 0 1926 115" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="963" cy="57.5" rx="963" ry="57.5" fill="white" />
  </svg>
);

const ClipboardGraphic = () => (
  <svg style={{ flexShrink: 0, width: '203px', height: '284px' }} viewBox="0 0 203 284" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_15505_15549)">
      <path d="M136.538 126.473H152.286V183.563H136.538V126.473Z" fill="#9B94AD" />
      <path d="M123.415 126.473H141.787V183.563H123.415V126.473Z" fill="#CDCBD9" />
      <path d="M29.9372 94.9773C21.2399 94.9773 14.1895 102.028 14.1895 110.725V183.563H53.5589L37.8111 126.473V97.6019C37.8111 96.1524 36.636 94.9773 35.1865 94.9773H29.9372Z" fill="#CDCBD9" />
      <path d="M141.788 168.715L126.04 199.311H136.539C145.236 199.311 152.286 192.26 152.286 183.563C152.286 176.707 147.903 170.877 141.788 168.715Z" fill="#CDCBD9" />
      <path d="M141.787 183.563V168.715C140.145 168.135 138.379 167.815 136.538 167.815H131.289C129.839 167.815 128.664 166.64 128.664 165.191V126.473H37.8109V165.191C37.8109 166.64 36.6358 167.815 35.1863 167.815H30.1963C21.5606 167.815 14.3359 174.659 14.1917 183.294C14.0444 192.114 21.1501 199.311 29.937 199.311H126.039C134.736 199.311 141.787 192.26 141.787 183.563Z" fill="white" />
      <path d="M94.5436 157.968L91.9189 173.39L94.5436 188.812H115.541C116.99 188.812 118.165 187.637 118.165 186.188V160.593C118.165 159.143 116.99 157.968 115.541 157.968L94.5436 157.968Z" fill="#CB26CB" />
      <path d="M48.3096 160.593V186.188C48.3096 187.637 49.4847 188.813 50.9342 188.813H94.544C95.9935 188.813 97.1686 187.637 97.1686 186.188V160.593C97.1686 159.143 95.9935 157.968 94.544 157.968H50.9342C49.4847 157.968 48.3096 159.143 48.3096 160.593Z" fill="#CDCBD9" />
      <path d="M178.007 84.8364C178.004 81.5794 179.33 78.4285 181.604 76.0968L187.066 70.4965C187.727 69.819 187.969 68.8388 187.709 67.9289C186.413 63.395 184.606 59.0766 182.359 55.0371C181.9 54.2112 181.036 53.6915 180.091 53.6796L172.278 53.5817C169.016 53.5407 165.859 52.2543 163.555 49.9453C161.25 47.6444 159.959 44.4791 159.918 41.2225L159.821 33.4004C159.809 32.4541 159.287 31.5894 158.46 31.1299C154.337 28.8409 150.006 27.0645 145.561 25.797C144.652 25.538 143.673 25.7812 142.997 26.4412L137.403 31.897C135.068 34.1744 131.926 35.4969 128.664 35.4934L160.16 84.8364L128.664 134.179C131.921 134.176 135.072 135.502 137.404 137.776L143.004 143.238C143.681 143.899 144.662 144.141 145.572 143.881C150.106 142.585 154.424 140.779 158.463 138.532C159.289 138.072 159.809 137.208 159.821 136.263L159.919 128.45C159.96 125.189 161.246 122.032 163.555 119.728C165.856 117.422 169.021 116.132 172.278 116.091L180.1 115.993C181.046 115.981 181.911 115.46 182.371 114.632C184.66 110.509 186.436 106.179 187.704 101.733C187.963 100.825 187.72 99.8462 187.06 99.1697L181.604 93.5757C179.326 91.2402 178.004 88.0983 178.007 84.8364Z" fill="#AFAABC" />
      <path d="M163.555 49.9459C154.625 41.0162 142.289 35.4936 128.664 35.4933C125.406 35.4964 122.256 34.1708 119.924 31.8969L114.324 26.4348C113.646 25.7741 112.666 25.5316 111.756 25.7916C107.222 27.0878 102.904 28.8943 98.8641 31.1413C98.0382 31.6008 97.5185 32.4648 97.5066 33.4097L97.4087 41.223C97.3677 44.4846 96.0813 47.6415 93.7723 49.9456C91.4714 52.2507 88.3061 53.5413 85.0495 53.5822L77.2274 53.6802C76.2811 53.6921 75.4164 54.2139 74.9569 55.0412C72.6675 59.1639 70.8912 63.4946 69.6236 67.94C69.3647 68.8488 69.6079 69.8273 70.2679 70.5037L75.7236 76.0977C78.0011 78.4329 79.3236 81.5748 79.3201 84.8367C79.3232 88.0936 77.9976 91.2446 75.7233 93.5763L70.2612 99.1766C69.6005 99.8541 69.358 100.834 69.618 101.744C70.9143 106.278 72.7207 110.597 74.9677 114.636C75.4272 115.462 76.2912 115.982 77.2361 115.993L85.0495 116.091C88.311 116.132 91.4679 117.419 93.772 119.728C96.0771 122.029 97.3677 125.194 97.4087 128.451L97.5066 136.273C97.5185 137.219 98.0403 138.084 98.8676 138.543C102.99 140.833 107.321 142.609 111.766 143.876C112.675 144.135 113.654 143.892 114.33 143.232L119.924 137.776C122.259 135.499 125.401 134.177 128.663 134.18C155.914 134.18 178.006 112.088 178.006 84.837C178.006 71.2106 172.484 58.8752 163.555 49.9459ZM128.663 107.933C115.907 107.933 105.567 97.5924 105.567 84.8363C105.567 72.0803 115.907 61.7396 128.663 61.7396C141.419 61.7396 151.76 72.0803 151.76 84.8363C151.76 97.5924 141.419 107.933 128.663 107.933Z" fill="#CFCBD9" />
      <path d="M65.6727 150.094H48.3092C46.8597 150.094 45.6846 148.919 45.6846 147.47C45.6846 146.02 46.8597 144.845 48.3092 144.845H65.6727C67.1222 144.845 68.2973 146.02 68.2973 147.47C68.2973 148.919 67.1222 150.094 65.6727 150.094Z" fill="#C5C6CE" />
      <path d="M65.6727 139.596H48.3092C46.8597 139.596 45.6846 138.421 45.6846 136.971C45.6846 135.522 46.8597 134.347 48.3092 134.347H65.6727C67.1222 134.347 68.2973 135.522 68.2973 136.971C68.2973 138.421 67.1222 139.596 65.6727 139.596Z" fill="#C5C6CE" />
      <path d="M128.664 45.9917C141.42 45.9917 151.761 63.3828 151.761 84.8362C151.761 106.29 141.42 123.681 128.664 123.681C150.117 123.681 167.509 106.29 167.509 84.8362C167.509 63.3828 150.117 45.9917 128.664 45.9917Z" fill="#9B94AD" />
      <path d="M128.664 45.9917C107.21 45.9917 89.8193 63.3828 89.8193 84.8362C89.8193 106.29 107.21 123.681 128.664 123.681C144.319 123.681 157.01 106.29 157.01 84.8362C157.01 63.3828 144.319 45.9917 128.664 45.9917ZM128.664 100.059C120.257 100.059 113.441 93.2434 113.441 84.8362C113.441 76.429 120.257 69.6134 128.664 69.6134C137.071 69.6134 143.887 76.429 143.887 84.8362C143.887 93.2434 137.071 100.059 128.664 100.059Z" fill="#AFAABC" />
      <path d="M128.664 66.9888C118.807 66.9888 110.816 74.9792 110.816 84.8362C110.816 94.6933 118.807 102.684 128.664 102.684C138.521 102.684 146.511 94.6933 146.511 84.8362C146.511 74.9792 138.521 66.9888 128.664 66.9888ZM128.664 92.1852C124.605 92.1852 121.315 88.895 121.315 84.8362C121.315 80.7775 124.605 77.4873 128.664 77.4873C132.723 77.4873 136.013 80.7775 136.013 84.8362C136.013 88.895 132.723 92.1852 128.664 92.1852Z" fill="#9B94AD" />
    </g>
    <defs>
      <clipPath id="clip0_15505_15549">
        <rect width="173.622" height="173.622" fill="white" transform="translate(14.1895 25.6892)" />
      </clipPath>
    </defs>
  </svg>
);

const SideDecorativeGraphics = () => (
  <svg className="project-side-cards" viewBox="0 0 451 486" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g filter="url(#filter0_d_15505_15571)">
      <rect x="197.747" y="248" width="197" height="182" transform="rotate(7.87511 197.747 248)" fill="url(#pattern0_15505_15571)" shapeRendering="crispEdges" />
    </g>
    <g filter="url(#filter1_d_15505_15571)">
      <rect x="30" y="118.686" width="165" height="198" transform="rotate(-14.4903 30 118.686)" fill="url(#pattern1_15505_15571)" shapeRendering="crispEdges" />
    </g>
    <g filter="url(#filter2_d_15505_15571)">
      <rect x="264.609" y="30" width="159" height="194" transform="rotate(12.14 264.609 30)" fill="url(#pattern2_15505_15571)" shapeRendering="crispEdges" />
    </g>
    <defs>
      <filter id="filter0_d_15505_15571" x="142.811" y="218" width="280.079" height="267.275" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="15" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.407251 0 0 0 0 0.0908618 0 0 0 0 0.639269 0 0 0 0.3 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15505_15571" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15505_15571" result="shape" />
      </filter>
      <pattern id="pattern0_15505_15571" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_15505_15571" transform="matrix(0.00207143 0 0 0.00224215 -0.000250393 0)" />
      </pattern>
      
      <filter id="filter1_d_15505_15571" x="0" y="47.4004" width="269.294" height="292.987" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="15" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.407251 0 0 0 0 0.0908618 0 0 0 0 0.639269 0 0 0 0.3 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15505_15571" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15505_15571" result="shape" />
      </filter>
      <pattern id="pattern1_15505_15571" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image1_15505_15571" transform="matrix(0.00313617 0 0 0.00261485 -0.00178716 0.0188679)" />
      </pattern>
      
      <filter id="filter2_d_15505_15571" x="193.811" y="0" width="256.243" height="283.099" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="15" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.407251 0 0 0 0 0.0908618 0 0 0 0 0.639269 0 0 0 0.3 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15505_15571" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15505_15571" result="shape" />
      </filter>
      <pattern id="pattern2_15505_15571" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image2_15505_15571" transform="matrix(0.00319489 0 0 0.00261849 0 -0.00144099)" />
      </pattern>
      
      <image id="image0_15505_15571" width="483" height="446" preserveAspectRatio="none" href={image0} />
      <image id="image1_15505_15571" width="320" height="368" preserveAspectRatio="none" href={image1} />
      <image id="image2_15505_15571" width="313" height="383" preserveAspectRatio="none" href={image2} />
    </defs>
  </svg>
);
