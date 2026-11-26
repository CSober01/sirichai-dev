import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import googleIcon from "../assets/google.svg";

const contacts = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: linkedinIcon },
  { label: "GitHub", href: "https://github.com", icon: githubIcon },
  { label: "Google", href: "mailto:hello@example.com", icon: googleIcon },
];

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-6 bg-[#EFEEEB] px-4 py-10 text-base font-medium leading-6 lg:h-36 lg:flex-row lg:justify-between lg:px-[120px] lg:py-0">
      <div className="flex items-center gap-6">
        <p className="text-[#43403B]">Get in touch</p>
        <div className="flex items-center gap-4">
          {contacts.map(({ label, href, icon }) => (
            <a key={label} href={href} aria-label={label}>
              <img src={icon} alt="" className="size-6" />
            </a>
          ))}
        </div>
      </div>

      <a href="/" className="text-[#26231E] underline">
        Home page
      </a>
    </footer>
  );
}
