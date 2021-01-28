import styled from "styled-components";

const LINKS = [
  {
    label: "Advanced search",
    to: "https://google.com",
  },
  {
    label: "Arrivals and departures",
    to: "https://google.com",
  },
  {
    label: "Inspire me",
    to: "https://google.com",
  },
  {
    label: "Miles & More",
    to: "https://google.com",
  },
  {
    label: "Check in",
    to: "https://google.com",
  },
];

const Links = () => {
  return (
    <LinksContainer>
      {LINKS.map(({ label, to }) => (
        <a href={to} target="_blank" rel="noopenner noreferrer" key={label}>
          {label}
        </a>
      ))}
    </LinksContainer>
  );
};

const LinksContainer = styled.div`
  grid-area: links;
  display: flex;
  align-items: center;

  a {
    position: relative;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.main};
    text-decoration: none;
    padding-right: 25px;
    margin-right: 20px;

    &:after {
      position: absolute;
      right: 10px;
      top: 7px;
      content: "";
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;

      border-left: 5px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

export { Links };
