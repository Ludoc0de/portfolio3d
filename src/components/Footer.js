import { FaTwitter, FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="grid grid-cols-1">
      <ul className="grid grid-cols-2 w-20">
        <li>
          <a href="https://twitter.com/neographe_org" className="">
            <FaTwitter className="pl-0" />
          </a>
        </li>
        <li>
          <a href="https://github.com/ludocode" className="">
            <FaGithub className="" />
          </a>
        </li>
      </ul>
      <ul className="menu text-lg lg:text-xl">
        <li>&copy; Neographe. tous droits réservés.</li>
        <li></li>
      </ul>
    </footer>
  );
}
