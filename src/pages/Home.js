import * as React from 'react';
import {Link } from "react-router-dom"
import sandImage from "../img/sand.jpg"


export default function Home() {

  return (
    <div>
      <header>
        <link href='https://fonts.googleapis.com/css?family=Jura' rel='stylesheet'/>
        <nav class="navbar justify-content-center">
          <div>
          <svg width="331" height="43" viewBox="0 0 331 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_22_2)">
          <path d="M14.649 32C14.0663 32 13.6753 31.6857 13.476 31.057L4.66701 3.963C4.54434 3.61033 4.59034 3.25766 4.80501 2.905C5.01967 2.537 5.35701 2.353 5.81701 2.353C6.07767 2.353 6.30767 2.42967 6.50701 2.583C6.72167 2.721 6.86734 2.93566 6.94401 3.227L15.132 28.389H14.465L22.216 3.296C22.3233 2.95867 22.5073 2.71333 22.768 2.56C23.044 2.40666 23.3277 2.33 23.619 2.33C23.9257 2.33 24.217 2.40666 24.493 2.56C24.769 2.71333 24.9453 2.95867 25.022 3.296L32.773 28.389H32.106L40.294 3.227C40.4013 2.93566 40.547 2.721 40.731 2.583C40.9303 2.42967 41.1603 2.353 41.421 2.353C41.9423 2.353 42.295 2.52933 42.479 2.882C42.6783 3.23467 42.7167 3.595 42.594 3.963L33.762 31.057C33.5627 31.6857 33.141 32 32.497 32H32.405C31.7457 32 31.324 31.6857 31.14 31.057L23.251 5.711H23.918L16.029 31.057C15.9217 31.4403 15.753 31.6933 15.523 31.816C15.293 31.9387 15.0017 32 14.649 32Z" fill="#25B3E0"/>
          <path d="M51.3304 32C48.9384 32 47.1827 31.448 46.0634 30.344C44.9594 29.2247 44.4074 27.469 44.4074 25.077C44.4074 22.685 44.9671 20.9293 46.0864 19.81C47.2057 18.6907 48.9537 18.131 51.3304 18.131H61.7954C61.7647 16.107 61.3047 14.6963 60.4154 13.899C59.5414 13.0863 58.0464 12.68 55.9304 12.68H53.2624C51.3151 12.68 49.8891 12.887 48.9844 13.301C48.0797 13.715 47.5201 14.4203 47.3054 15.417C47.1981 15.8003 47.0524 16.084 46.8684 16.268C46.6997 16.4367 46.4237 16.521 46.0404 16.521C45.6417 16.521 45.3274 16.4137 45.0974 16.199C44.8827 15.969 44.8061 15.6623 44.8674 15.279C45.0667 13.531 45.8564 12.2583 47.2364 11.461C48.6317 10.6637 50.6404 10.265 53.2624 10.265H55.9304C58.7977 10.265 60.8907 10.932 62.2094 12.266C63.5434 13.5847 64.2104 15.6777 64.2104 18.545V30.781C64.2104 31.5937 63.8117 32 63.0144 32C62.2017 32 61.7954 31.5937 61.7954 30.781V28.504C60.3234 30.8347 57.6937 32 53.9064 32H51.3304ZM51.3304 29.585H53.9064C55.3937 29.585 56.6971 29.424 57.8164 29.102C58.9511 28.7647 59.8634 28.228 60.5534 27.492C61.2434 26.756 61.6574 25.7747 61.7954 24.548V20.546H51.3304C49.6284 20.546 48.4477 20.8757 47.7884 21.535C47.1444 22.179 46.8224 23.3597 46.8224 25.077C46.8224 26.779 47.1444 27.9597 47.7884 28.619C48.4477 29.263 49.6284 29.585 51.3304 29.585Z" fill="#25B3E0"/>
          <path d="M81.2825 32C78.4612 32 76.3989 31.3483 75.0955 30.045C73.7922 28.7417 73.1405 26.687 73.1405 23.881V12.68H70.4035C69.5909 12.68 69.1845 12.2737 69.1845 11.461C69.1845 10.6637 69.5909 10.265 70.4035 10.265H73.1405V5.32C73.1405 4.50733 73.5392 4.101 74.3365 4.101C75.1492 4.101 75.5555 4.50733 75.5555 5.32V10.265H81.3285C82.1259 10.265 82.5245 10.6637 82.5245 11.461C82.5245 12.2737 82.1259 12.68 81.3285 12.68H75.5555V23.881C75.5555 26.0277 75.9695 27.515 76.7975 28.343C77.6409 29.171 79.1359 29.585 81.2825 29.585C81.7272 29.585 82.0415 29.6847 82.2255 29.884C82.4249 30.0833 82.5245 30.3823 82.5245 30.781C82.5245 31.5937 82.1105 32 81.2825 32Z" fill="#25B3E0"/>
          <path d="M88.8431 22.064V23.743C88.8431 25.905 89.2724 27.423 90.1311 28.297C91.0051 29.1557 92.5384 29.585 94.7311 29.585H98.5031C100.435 29.585 101.838 29.3397 102.712 28.849C103.601 28.343 104.13 27.4767 104.299 26.25C104.36 25.8667 104.483 25.5753 104.667 25.376C104.866 25.1767 105.165 25.077 105.564 25.077C105.963 25.077 106.262 25.192 106.461 25.422C106.676 25.6367 106.76 25.9433 106.714 26.342C106.515 28.274 105.74 29.7 104.391 30.62C103.042 31.54 101.079 32 98.5031 32H94.7311C91.8637 32 89.7631 31.3407 88.4291 30.022C87.0951 28.688 86.4281 26.595 86.4281 23.743V18.545C86.4281 15.647 87.0951 13.5387 88.4291 12.22C89.7631 10.886 91.8637 10.2343 94.7311 10.265H98.5031C101.37 10.265 103.463 10.932 104.782 12.266C106.116 13.5847 106.783 15.6777 106.783 18.545V20.845C106.783 21.6577 106.384 22.064 105.587 22.064H88.8431ZM94.7311 12.68C92.5384 12.6493 91.0051 13.071 90.1311 13.945C89.2724 14.8037 88.8431 16.337 88.8431 18.545V19.649H104.368V18.545C104.368 16.3523 103.939 14.8267 103.08 13.968C102.221 13.1093 100.696 12.68 98.5031 12.68H94.7311Z" fill="#25B3E0"/>
          <path d="M115.985 32C115.172 32 114.766 31.5937 114.766 30.781V11.461C114.766 10.6637 115.172 10.265 115.985 10.265C116.782 10.265 117.181 10.6637 117.181 11.461V15.003C117.978 13.4697 119.128 12.2967 120.631 11.484C122.149 10.6713 123.943 10.265 126.013 10.265C126.826 10.265 127.232 10.6637 127.232 11.461C127.232 12.2737 126.826 12.68 126.013 12.68C123.284 12.68 121.168 13.301 119.665 14.543C118.162 15.7697 117.334 17.5253 117.181 19.81V30.781C117.181 31.5937 116.782 32 115.985 32Z" fill="#25B3E0"/>
          <path d="M185.898 31.954C183.154 31.954 181.114 31.3483 179.78 30.137C178.462 28.9103 177.756 26.986 177.664 24.364C177.649 23.996 177.749 23.7047 177.963 23.49C178.193 23.26 178.492 23.145 178.86 23.145C179.228 23.145 179.52 23.2523 179.734 23.467C179.949 23.6817 180.072 23.973 180.102 24.341C180.164 26.273 180.624 27.6223 181.482 28.389C182.341 29.1557 183.813 29.539 185.898 29.539H192.522C194.7 29.539 196.21 29.1173 197.053 28.274C197.912 27.4153 198.341 25.9127 198.341 23.766C198.341 21.5887 197.912 20.0783 197.053 19.235C196.21 18.3763 194.7 17.947 192.522 17.947H186.22C183.522 17.947 181.544 17.3183 180.286 16.061C179.029 14.8037 178.4 12.8333 178.4 10.15C178.4 7.46667 179.021 5.49633 180.263 4.239C181.521 2.98167 183.491 2.353 186.174 2.353H192.614C195.19 2.353 197.099 2.928 198.341 4.078C199.599 5.228 200.273 7.03733 200.365 9.506C200.396 9.874 200.296 10.173 200.066 10.403C199.852 10.6177 199.553 10.725 199.169 10.725C198.817 10.725 198.533 10.6177 198.318 10.403C198.104 10.1883 197.981 9.897 197.95 9.529C197.889 7.76567 197.46 6.53133 196.662 5.826C195.865 5.12067 194.516 4.768 192.614 4.768H186.174C184.166 4.768 182.77 5.16667 181.988 5.964C181.206 6.746 180.815 8.14133 180.815 10.15C180.815 12.1587 181.206 13.5617 181.988 14.359C182.786 15.141 184.196 15.532 186.22 15.532H192.522C195.374 15.532 197.46 16.199 198.778 17.533C200.097 18.8517 200.756 20.9293 200.756 23.766C200.756 26.6027 200.097 28.6803 198.778 29.999C197.46 31.3023 195.374 31.954 192.522 31.954H185.898Z" fill="#25B3E0"/>
          <path d="M216.424 32C213.557 32 211.456 31.3407 210.122 30.022C208.788 28.688 208.121 26.595 208.121 23.743V18.545C208.121 15.647 208.788 13.5387 210.122 12.22C211.456 10.886 213.557 10.2343 216.424 10.265H220.196C223.064 10.265 225.157 10.932 226.475 12.266C227.809 13.5847 228.476 15.6777 228.476 18.545V23.697C228.476 26.5643 227.809 28.665 226.475 29.999C225.157 31.333 223.064 32 220.196 32H216.424ZM210.536 23.743C210.536 25.905 210.966 27.423 211.824 28.297C212.698 29.1557 214.232 29.585 216.424 29.585H220.196C222.389 29.585 223.915 29.1557 224.773 28.297C225.632 27.423 226.061 25.8897 226.061 23.697V18.545C226.061 16.3523 225.632 14.8267 224.773 13.968C223.915 13.1093 222.389 12.68 220.196 12.68H216.424C214.952 12.6647 213.787 12.841 212.928 13.209C212.07 13.577 211.456 14.1903 211.088 15.049C210.72 15.9077 210.536 17.073 210.536 18.545V23.743Z" fill="#25B3E0"/>
          <path d="M254.721 10.265C255.534 10.265 255.94 10.6637 255.94 11.461V30.781C255.94 31.5937 255.534 32 254.721 32C253.924 32 253.525 31.5937 253.525 30.781V28.596C252.069 30.8653 249.431 32 245.613 32H244.325C241.458 32 239.357 31.333 238.023 29.999C236.705 28.665 236.045 26.5643 236.045 23.697V11.461C236.045 10.6637 236.444 10.265 237.241 10.265C238.054 10.265 238.46 10.6637 238.46 11.461V23.697C238.46 25.8897 238.89 27.423 239.748 28.297C240.622 29.1557 242.148 29.585 244.325 29.585H245.613C247.99 29.585 249.861 29.2017 251.225 28.435C252.59 27.6683 253.357 26.4953 253.525 24.916V11.461C253.525 10.6637 253.924 10.265 254.721 10.265Z" fill="#25B3E0"/>
          <path d="M265.754 32C264.942 32 264.535 31.5937 264.535 30.781V11.461C264.535 10.6637 264.942 10.265 265.754 10.265C266.552 10.265 266.95 10.6637 266.95 11.461V15.003C267.748 13.4697 268.898 12.2967 270.4 11.484C271.918 10.6713 273.712 10.265 275.782 10.265C276.595 10.265 277.001 10.6637 277.001 11.461C277.001 12.2737 276.595 12.68 275.782 12.68C273.053 12.68 270.937 13.301 269.434 14.543C267.932 15.7697 267.104 17.5253 266.95 19.81V30.781C266.95 31.5937 266.552 32 265.754 32Z" fill="#25B3E0"/>
          <path d="M288.659 32C285.791 32 283.691 31.333 282.357 29.999C281.023 28.665 280.356 26.5643 280.356 23.697V18.499C280.356 15.6317 281.015 13.5387 282.334 12.22C283.668 10.886 285.776 10.2343 288.659 10.265H292.431C294.685 10.265 296.402 10.6483 297.583 11.415C298.779 12.1663 299.492 13.3547 299.722 14.98C299.768 15.394 299.676 15.7083 299.446 15.923C299.231 16.1377 298.924 16.245 298.526 16.245C298.158 16.245 297.882 16.153 297.698 15.969C297.514 15.7697 297.376 15.486 297.284 15.118C297.115 14.2287 296.663 13.6 295.927 13.232C295.191 12.864 294.025 12.68 292.431 12.68H288.659C286.466 12.6493 284.933 13.0633 284.059 13.922C283.2 14.7653 282.771 16.291 282.771 18.499V23.697C282.771 25.8897 283.2 27.423 284.059 28.297C284.933 29.1557 286.466 29.585 288.659 29.585H292.431C294.025 29.585 295.191 29.401 295.927 29.033C296.663 28.665 297.115 28.0287 297.284 27.124C297.376 26.756 297.514 26.48 297.698 26.296C297.882 26.0967 298.158 25.997 298.526 25.997C298.924 25.997 299.231 26.112 299.446 26.342C299.676 26.5567 299.768 26.8633 299.722 27.262C299.492 28.8873 298.779 30.0833 297.583 30.85C296.402 31.6167 294.685 32 292.431 32H288.659Z" fill="#25B3E0"/>
          <path d="M309.05 22.064V23.743C309.05 25.905 309.479 27.423 310.338 28.297C311.212 29.1557 312.745 29.585 314.938 29.585H318.71C320.642 29.585 322.045 29.3397 322.919 28.849C323.808 28.343 324.337 27.4767 324.506 26.25C324.567 25.8667 324.69 25.5753 324.874 25.376C325.073 25.1767 325.372 25.077 325.771 25.077C326.17 25.077 326.469 25.192 326.668 25.422C326.883 25.6367 326.967 25.9433 326.921 26.342C326.722 28.274 325.947 29.7 324.598 30.62C323.249 31.54 321.286 32 318.71 32H314.938C312.071 32 309.97 31.3407 308.636 30.022C307.302 28.688 306.635 26.595 306.635 23.743V18.545C306.635 15.647 307.302 13.5387 308.636 12.22C309.97 10.886 312.071 10.2343 314.938 10.265H318.71C321.577 10.265 323.67 10.932 324.989 12.266C326.323 13.5847 326.99 15.6777 326.99 18.545V20.845C326.99 21.6577 326.591 22.064 325.794 22.064H309.05ZM314.938 12.68C312.745 12.6493 311.212 13.071 310.338 13.945C309.479 14.8037 309.05 16.337 309.05 18.545V19.649H324.575V18.545C324.575 16.3523 324.146 14.8267 323.287 13.968C322.428 13.1093 320.903 12.68 318.71 12.68H314.938Z" fill="#25B3E0"/>
          <path d="M151.409 0.833313L150.002 2.22161C149.547 2.67076 139 13.2055 139 22.1477C139 28.8851 144.584 34.3974 151.409 34.3974C158.234 34.3974 163.818 28.8851 163.818 22.1477C163.818 13.2463 153.27 2.67076 152.815 2.22161L151.409 0.833313ZM145.204 20.1061C146.363 20.1061 147.273 21.0044 147.273 22.1477C147.273 24.3935 149.134 26.231 151.409 26.231C152.567 26.231 153.477 27.1293 153.477 28.2726C153.477 29.4159 152.567 30.3142 151.409 30.3142C146.859 30.3142 143.136 26.6393 143.136 22.1477C143.136 21.0044 144.046 20.1061 145.204 20.1061Z" fill="#25B3E0"/>
          </g>
          <defs>
          <filter id="filter0_d_22_2" x="0.600098" y="0.833313" width="330.39" height="41.5641" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_2"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_2" result="shape"/>
          </filter>
          </defs>
          </svg>

          </div>
        </nav>
      </header>
      <body  style={{ backgroundImage:`url(${sandImage})`,backgroundRepeat:"no-repeat", backgroundSize:"cover", height: '100vh'}}>
        <div class="d-flex justify-content-center">
          <h1 style={{
            color: '#25B3E0',
            marginTop: '15vh',
            fontSize: '10vmin',
            fontWeight: 'bold',
            fontFamily: 'Jura',
            paddingTop: '2vh',
          }} class="text-center">
            Clean water in the Palm of Your Hands
          </h1>
          
        </div>
        <div class="d-flex justify-content-center" style={{marginTop: '10vh'}}>
            <Link to="/map">
              <svg width="218" height="259" viewBox="0 0 218 259" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_22_5)">
                <path d="M108.938 6L178.981 76.0425C192.832 89.8853 202.268 107.525 206.093 126.731C209.918 145.937 207.961 165.846 200.47 183.94C192.979 202.033 180.29 217.499 164.008 228.38C147.726 239.261 128.583 245.069 109 245.069C89.4169 245.069 70.2737 239.261 53.9918 228.38C37.71 217.499 25.0209 202.033 17.5298 183.94C10.0386 165.846 8.08186 145.937 11.9071 126.731C15.7322 107.525 25.1675 89.8853 39.0194 76.0425L108.938 6Z" stroke="#25B3E0" stroke-width="10.0531" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M71.8054 170C64.8614 170 59.7894 168.4 56.5894 165.2C53.3894 162 51.7894 156.928 51.7894 149.984V128.144C51.7894 121.136 53.3734 116.048 56.5414 112.88C59.7414 109.712 64.7974 108.128 71.7094 108.128H83.3254C89.2134 108.128 93.5974 109.36 96.4774 111.824C99.3574 114.256 100.941 118.176 101.229 123.584C101.325 124.448 101.149 125.104 100.701 125.552C100.285 126 99.6614 126.224 98.8294 126.224C97.2294 126.224 96.3494 125.376 96.1894 123.68C95.9654 119.712 94.8774 116.976 92.9254 115.472C90.9734 113.936 87.7734 113.168 83.3254 113.168H71.7094C68.0294 113.168 65.1014 113.648 62.9254 114.608C60.7494 115.536 59.1814 117.104 58.2214 119.312C57.2934 121.488 56.8294 124.432 56.8294 128.144V149.984C56.8294 153.696 57.3094 156.64 58.2694 158.816C59.2294 160.992 60.7974 162.56 62.9734 163.52C65.1494 164.48 68.0934 164.96 71.8054 164.96H83.3254C86.5894 164.96 89.1654 164.56 91.0534 163.76C92.9734 162.96 94.3334 161.616 95.1334 159.728C95.9334 157.84 96.3334 155.232 96.3334 151.904V145.904L85.8214 145.808C84.1574 145.808 83.3254 144.96 83.3254 143.264C83.3254 141.6 84.1574 140.768 85.8214 140.768L98.8774 140.864C100.541 140.864 101.373 141.696 101.373 143.36V151.904C101.373 158.24 99.9494 162.848 97.1014 165.728C94.2534 168.576 89.6614 170 83.3254 170H71.8054ZM135.743 170C128.799 170 123.727 168.4 120.527 165.2C117.327 162 115.727 156.928 115.727 149.984V128.096C115.727 121.088 117.327 116 120.527 112.832C123.727 109.632 128.767 108.064 135.647 108.128H147.263C154.207 108.128 159.263 109.728 162.431 112.928C165.631 116.128 167.231 121.2 167.231 128.144V149.984C167.231 156.928 165.631 162 162.431 165.2C159.263 168.4 154.207 170 147.263 170H135.743ZM135.743 164.96H147.263C150.943 164.96 153.871 164.48 156.047 163.52C158.223 162.56 159.791 160.992 160.751 158.816C161.711 156.64 162.191 153.696 162.191 149.984V128.144C162.191 124.464 161.711 121.536 160.751 119.36C159.791 117.184 158.223 115.616 156.047 114.656C153.871 113.664 150.943 113.168 147.263 113.168H135.647C131.967 113.136 129.039 113.6 126.863 114.56C124.719 115.488 123.167 117.056 122.207 119.264C121.247 121.44 120.767 124.384 120.767 128.096V149.984C120.767 153.696 121.247 156.64 122.207 158.816C123.167 160.992 124.735 162.56 126.911 163.52C129.087 164.48 132.031 164.96 135.743 164.96Z" fill="#25B3E0"/>
                </g>
                <defs>
                <filter id="filter0_d_22_5" x="0.97345" y="0.97345" width="216.053" height="257.122" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_5"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_5" result="shape"/>
                </filter>
                </defs>
              </svg>
            </Link>
          </div>
      </body>
    </div>
  );
}