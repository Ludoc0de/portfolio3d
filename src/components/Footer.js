import { FaTwitter, FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="grid grid-cols-1">
      <ul className="grid grid-cols-2 w-20 lg:w-40">
        <li>
          <a href="https://twitter.com/neographe_org" className="">
            <FaTwitter className="lg:w-10 hover:text-amber-400 ease-linear duration-300" />
          </a>
        </li>
        <li>
          <a href="https://github.com/ludoc0de" className="">
            <FaGithub className="lg:w-10" />
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
