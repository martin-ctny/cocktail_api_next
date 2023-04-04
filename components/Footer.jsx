import { Box } from "@mui/system";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        height: "300px",
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className="footer__logo-box">
        <img
          src="https://previews.123rf.com/images/dstarky/dstarky1701/dstarky170100422/69262793-ic%C3%B4ne-ou-logo-de-cocktail-en-style-ligne-moderne-pictogramme-noir-de-haute-qualit%C3%A9-pour-la.jpg"
          alt="Logo"
          style={{ width: "200px" }}
        />
      </Box>
    </footer>
  );
};

export default Footer;
