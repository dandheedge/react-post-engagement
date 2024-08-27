interface MenuItem {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface DropdownMenuProps {
  items: MenuItem[];
  className?: string;
  buttonClassName?: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  className = "",
  buttonClassName = "",
  icon,
  ariaLabel,
}) => {
  return (
    <div role="listbox" className={`dropdown dropdown-end ${className}`}>
      <label>
        <button
          type="button"
          className={buttonClassName}
          aria-label={ariaLabel}
        >
          {icon}
        </button>
      </label>
      <ul
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-3 w-52"
        role="menu"
      >
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.icon}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

function NavBar() {
  return (
    <div className="navbar fixed z-20 border-b border-b-base-300 bg-base-100">
      <div className="lg:px-2">
        <a href="/" className="hidden lg:block">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://graph.facebook.com/237352949662793/picture?type=normal"
                alt="Page Name"
              />
            </div>
          </div>
        </a>
      </div>
      <div className="flex-1 pl-3">
        <div className="breadcrumbs text-base">
          <ul className="rounded-md border border-base-300 bg-base-100 px-2 py-[.32rem]">
            <li className="w-15 truncate md:w-auto">
              <a
                href="https://m.me/hitunezofficial"
                target="_blank"
                rel="noreferrer"
              >
                @hitunezofficial
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden md:inline-flex">
        <button
          className="btn hover:bg-error btn-circle btn-ghost"
          type="button"
        >
          <svg
            aria-labelledby="svgTitle"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="h-5 w-5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="svgTitle">Caution Logo</title>
            <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
            <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0z" />
          </svg>
        </button>
      </div>
      <label className="swap swap-rotate btn btn-circle btn-ghost hidden md:inline-grid">
        <svg
          className="swap-off h-5 w-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title id="svgTitle">Theme Switcher Dark</title>
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>
      </label>
      <div
        role="listbox"
        className="dropdown hidden md:inline-block dropdown-end"
      >
        <label>
          <button className="btn btn-circle btn-ghost" type="button">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="svgTitle">Settings</title>
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" />
              <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
              <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
              <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
              <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
              <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
            </svg>
          </button>
        </label>
        <ul
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-3 w-52"
          role="menu"
        >
          <li>
            <a
              href="https://status.clepher.com/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="svgTitle">Status</title>
                <path
                  fill="none"
                  strokeWidth="2"
                  d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M7,12 L11,15 L16,8"
                />
              </svg>
              Status
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/groups/clepher/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="svgTitle">Community</title>
                <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                <path d="M13 7l0 .01" />
                <path d="M17 7l0 .01" />
                <path d="M17 11l0 .01" />
                <path d="M17 15l0 .01" />
              </svg>{" "}
              Community
            </a>
          </li>
          <li>
            <a
              href="https://clepher.com/support/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="h-5 w-5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="svgTitle">Knowledge Base</title>
                <path d="M426.2 80.4l-170.2 32-170.2-32C64 77 48 97.3 48 118v244.5c0 20.7 16 32.6 37.8 37.6L256 432l170.2-32c21.8-5 37.8-16.9 37.8-37.6V118c0-20.7-16-41-37.8-37.6zm0 282l-151.2 32V149.9l151.2-32v244.5zm-189.2 32l-151.2-32V118L237 150v244.4z" />
              </svg>{" "}
              Knowledge Base
            </a>
          </li>
        </ul>
      </div>
      <div role="listbox" className="dropdown dropdown-end">
        <label>
          <button type="button" className="btn avatar btn-circle btn-ghost">
            <div className="w-10 rounded-full">
              <img
                src="https://avatars.githubusercontent.com/u/21959017?s=400&amp;u=1c2711bcd2713d682bf553835a6dce998c6fd49b&amp;v=4"
                loading="lazy"
                alt="Profile"
              />
            </div>
          </button>
        </label>
      </div>
    </div>
  );
}

export default NavBar;
