import styled from "styled-components";

const Body = styled.div`
  display: flex;
`;
const NavigationBarContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 60px;
  background-color: #121212;
`;

const MenuGroupStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = ({ text }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: "60px",
        height: "60px",
        marginLeft: "20px",
        color: "white",
      }}
    >
      {text}
    </div>
  );
};

const Logo = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "60px",
        backgroundImage: `url(http://localhost:3000/public/splice.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
};

const NavigationBar = () => {
  return (
    <NavigationBarContainer>
      <MenuGroupStyle>
        <Logo />
        <Menu text={"Sounds"} />
        <Menu text={"Skills"} />
        <Menu text={"Plugins"} />
        <Menu text={"Studio"} />
        <Menu text={"Community"} />
        <Menu text={"Blog"} />
      </MenuGroupStyle>
      <MenuGroupStyle style={{ marginLeft: "auto" }}>
        <Menu text={"Invite Friends"} />
        <Menu text={"Help"} />
        <Menu text={"Volume"} />
        <Menu text={"Profile"} />
      </MenuGroupStyle>
    </NavigationBarContainer>
  );
};

const SearchBarContainer = styled.div`
  display: flex;
`;
const SearchBar = styled.div`
  height: 49px;
  background-color: green;
`;

const Main = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  width: 203px;
  height: 900px;
  background-color: yellow;
`;

const Contents = styled.div`
  width: 1000px;
  height: 900px;
  background-color: blue;
`;

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <SearchBar />
      <Main>
        <SideBar />
        <Contents />
      </Main>
    </div>
  );
}

export default App;
