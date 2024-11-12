import React from "react";
import "./styles.css";
import Link from "next/link";

const navItems = [
  {
    label: "Documentação",
    path: "/doc",
  },
  {
    label: "Coleção",
    path: "/collection",
  },
  {
    label: "Ícones",
    path: "/icons",
  },
];

export const Header = () => {
  return (
    <header className="header ps-fixed top-00 left-00 w-100 pt-04 z-index-08">
      <div className="bv-container-lg">
        <nav className="p-inline-06 p-block-04 ds-flex flow-row-nw align-center justify-between shadow-md radius-sm">
          <div className="flex-bgs">
            <Link href="/" className="all-unset cursor-pointer">
              <svg
                width="74"
                height="32"
                viewBox="0 0 74 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.9656 7.53832C72.3138 7.53832 73.4067 6.4454 73.4067 5.09722C73.4067 3.74904 72.3138 2.65613 70.9656 2.65613C69.6174 2.65613 68.5245 3.74904 68.5245 5.09722C68.5245 6.4454 69.6174 7.53832 70.9656 7.53832Z"
                  fill="#25CBDB"
                />
                <path
                  d="M0.0549934 18.8625C0.078528 19.6388 0.201745 20.4089 0.421616 21.1539C1.17625 23.6194 3.85565 25.5533 6.34868 25.7611H6.41589C5.31392 25.0413 4.46965 23.9895 4.00535 22.7578C2.90854 19.7577 4.92191 15.8745 8.17568 14.5088C9.46786 13.9985 10.8797 13.8711 12.2423 14.142C13.605 14.4129 14.8608 15.0706 15.8595 16.0364C18.1111 18.2209 18.0317 21.1203 17.9981 21.5633C17.903 23.3099 17.203 24.969 16.0183 26.256C13.2045 29.2196 8.79588 28.5627 7.4241 28.358C6.00961 28.1308 4.64077 27.678 3.36987 27.0168C2.15363 26.3874 1.03669 25.5824 0.0549934 24.6276C0.204697 24.9698 3.03075 31.1291 9.42831 31.9234C10.189 32.0181 14.4144 32.455 17.9523 29.4304C19.6653 27.9614 20.8748 25.9924 21.4108 23.8003C21.9467 21.6083 21.7822 19.3033 20.9402 17.2096C20.4007 15.8555 19.5921 14.6249 18.5633 13.5923C16.5865 11.6806 13.9782 10.559 11.2309 10.4393C8.4676 10.3415 5.77567 11.3284 3.73038 13.189C3.73038 9.62462 3.72224 6.06023 3.70594 2.49585C3.40042 0.824663 1.26179 -0.253818 0 0.0517004C0.00916556 15.8042 0.0519382 9.94439 0.0244415 16.4672L0.0549934 18.8625Z"
                  fill="#222343"
                />
                <path
                  d="M35.6212 31.9609C32.2279 31.9609 29.5557 31.0066 27.6044 29.0981C25.6532 27.1897 24.6786 24.5816 24.6806 21.2738C24.6413 19.3223 25.0875 17.3917 25.9791 15.6553C26.7925 14.0795 28.0321 12.7637 29.5567 11.8577C31.153 10.9349 32.9712 10.4659 34.8147 10.5012C37.6662 10.5012 39.9138 11.4178 41.5575 13.2509C43.2012 15.084 44.022 17.5933 44.0199 20.7789C44.0199 21.7413 43.4517 22.2209 42.3213 22.2209H28.8357C29.1473 26.5186 31.4234 28.6674 35.664 28.6674C36.5627 28.6663 37.4585 28.5638 38.3342 28.3618C39.3036 28.1259 40.2233 27.7193 41.0503 27.1612C41.5014 26.8497 42.0539 26.7209 42.5962 26.8006C42.8003 26.8394 42.9926 26.9246 43.1585 27.0496C43.3243 27.1747 43.4591 27.3362 43.5525 27.5217C43.75 27.9159 43.7883 28.371 43.6594 28.7926C43.4944 29.3125 43.1371 29.7496 42.6604 30.0147C41.6337 30.694 40.4964 31.1892 39.2997 31.4781C38.0981 31.7901 36.8626 31.9523 35.6212 31.9609ZM34.9858 13.5136C33.2056 13.5136 31.7921 14.0646 30.7452 15.1665C29.6982 16.2684 29.0618 17.739 28.8357 19.5782H40.4148C40.3293 17.6534 39.8201 16.1615 38.8872 15.1023C37.9544 14.0432 36.6539 13.5136 34.9858 13.5136Z"
                  fill="#222343"
                />
                <path
                  d="M55.5523 31.8731C54.3669 31.8731 53.4911 31.2377 52.9248 29.9667L45.8368 13.5115C45.6704 13.1989 45.5801 12.8514 45.5732 12.4973C45.5663 12.1432 45.643 11.7925 45.7971 11.4737C46.1047 10.881 46.7401 10.5846 47.7035 10.5846C48.1525 10.5646 48.5947 10.6995 48.9562 10.9665C49.3513 11.3244 49.6498 11.7763 49.8238 12.2802L55.6287 26.6152L61.5771 12.2802C61.7512 11.7763 62.0497 11.3244 62.4448 10.9665C62.848 10.6876 63.3335 10.553 63.8227 10.5846C64.5865 10.5846 65.1099 10.881 65.3931 11.4737C65.5324 11.7891 65.6008 12.1312 65.5934 12.4759C65.586 12.8207 65.503 13.1596 65.3503 13.4687L58.1828 29.9667C57.6451 31.2377 56.7683 31.8731 55.5523 31.8731Z"
                  fill="#222343"
                />
                <path
                  d="M70.8609 31.8345C69.4494 31.8345 68.7427 31.0565 68.7406 29.5004V12.9596C68.7406 11.432 69.4474 10.6692 70.8609 10.6712C72.2745 10.6733 72.9965 11.4361 73.0271 12.9596V29.5004C73.0271 31.0565 72.305 31.8345 70.8609 31.8345Z"
                  fill="#222343"
                />
              </svg>
            </Link>
          </div>
          <div className="ds-flex flow-row-nw align-center gap-04">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="item ps-relative p-block-04 p-inline-06 text-decoration-none"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex-bgs ds-flex flow-row-nw justify-end align-center gap-02">
            <span className="version line-height-none">v1.2</span>
            <Link
              href="https://github.com/BeviProjects/BeviIcon-Doc"
              target="_blank"
              rel="noopener noreferrer"
              className="item ps-relative p-block-04 p-inline-04 text-decoration-none"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_356_48)">
                  <path
                    d="M6.68952 15.7016C6.68952 15.7823 6.59677 15.8468 6.47984 15.8468C6.34677 15.8589 6.25403 15.7944 6.25403 15.7016C6.25403 15.621 6.34677 15.5565 6.46371 15.5565C6.58468 15.5444 6.68952 15.6089 6.68952 15.7016ZM5.43548 15.5202C5.40726 15.6008 5.4879 15.6935 5.60887 15.7177C5.71371 15.7581 5.83468 15.7177 5.85887 15.6371C5.88306 15.5565 5.80645 15.4637 5.68548 15.4274C5.58064 15.3992 5.46371 15.4395 5.43548 15.5202ZM7.21774 15.4516C7.10081 15.4798 7.02016 15.5565 7.03226 15.6492C7.04435 15.7298 7.14919 15.7823 7.27016 15.754C7.3871 15.7258 7.46774 15.6492 7.45564 15.5685C7.44355 15.4919 7.33468 15.4395 7.21774 15.4516ZM9.87097 0C4.27823 0 0 4.24597 0 9.83871C0 14.3105 2.81452 18.1371 6.83468 19.4839C7.35081 19.5766 7.53226 19.2581 7.53226 18.996C7.53226 18.746 7.52016 17.3669 7.52016 16.5202C7.52016 16.5202 4.69758 17.125 4.10484 15.3185C4.10484 15.3185 3.64516 14.1452 2.98387 13.8427C2.98387 13.8427 2.06048 13.2097 3.04839 13.2218C3.04839 13.2218 4.05242 13.3024 4.60484 14.2621C5.4879 15.8185 6.96774 15.371 7.54435 15.1048C7.6371 14.4597 7.89919 14.0121 8.18952 13.746C5.93548 13.496 3.66129 13.1694 3.66129 9.29032C3.66129 8.18145 3.96774 7.625 4.6129 6.91532C4.50806 6.65323 4.16532 5.57258 4.71774 4.17742C5.56048 3.91532 7.5 5.26613 7.5 5.26613C8.30645 5.04032 9.17339 4.92339 10.0323 4.92339C10.8911 4.92339 11.7581 5.04032 12.5645 5.26613C12.5645 5.26613 14.504 3.91129 15.3468 4.17742C15.8992 5.57661 15.5565 6.65323 15.4516 6.91532C16.0968 7.62903 16.4919 8.18548 16.4919 9.29032C16.4919 13.1815 14.1169 13.4919 11.8629 13.746C12.2339 14.0645 12.5484 14.6694 12.5484 15.6169C12.5484 16.9758 12.5363 18.6573 12.5363 18.9879C12.5363 19.25 12.7218 19.5685 13.2339 19.4758C17.2661 18.1371 20 14.3105 20 9.83871C20 4.24597 15.4637 0 9.87097 0ZM3.91935 13.9073C3.86694 13.9476 3.87903 14.0403 3.94758 14.1169C4.0121 14.1815 4.10484 14.2097 4.15726 14.1573C4.20968 14.1169 4.19758 14.0242 4.12903 13.9476C4.06452 13.8831 3.97177 13.8548 3.91935 13.9073ZM3.48387 13.5806C3.45565 13.6331 3.49597 13.6976 3.57661 13.7379C3.64113 13.7782 3.72177 13.7661 3.75 13.7097C3.77823 13.6573 3.7379 13.5927 3.65726 13.5524C3.57661 13.5282 3.5121 13.5403 3.48387 13.5806ZM4.79032 15.0161C4.72581 15.0685 4.75 15.1895 4.84274 15.2661C4.93548 15.3589 5.05242 15.371 5.10484 15.3065C5.15726 15.254 5.13306 15.1331 5.05242 15.0565C4.96371 14.9637 4.84274 14.9516 4.79032 15.0161ZM4.33065 14.4234C4.26613 14.4637 4.26613 14.5685 4.33065 14.6613C4.39516 14.754 4.50403 14.7944 4.55645 14.754C4.62097 14.7016 4.62097 14.5968 4.55645 14.504C4.5 14.4113 4.39516 14.371 4.33065 14.4234Z"
                    fill="black"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_356_48">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};