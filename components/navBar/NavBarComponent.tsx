import CardNav from './CardNav'

const items = [
  {
    label: "About",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "", ariaLabel: "", href: "/company" },
      { label: "", ariaLabel: "About Careers", href: "/careers" }
    ]
  },
  {
    label: "Projects", 
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "", ariaLabel: "", href: "/projects/featured" },
      { label: "", ariaLabel: "Project Case Studies", href: "/projects/case-studies" }
    ]
  },
  {
    label: "Contact",
    bgColor: "#271E37", 
    textColor: "#fff",
    links: [
      { label: "github", ariaLabel: "my github", href: "https://github.com/anuragbagri" },
      { label: "x", ariaLabel: "Twitter", href: "https://x.com/noob_anurag" },
      { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/anurag-bagri-476a33255/" }
    ]
  }
];


  function NavBarComponent(){
    return (
      <CardNav
        logoAlt="Company Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
    );
  };

 export default NavBarComponent ;