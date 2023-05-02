import HeaderComponent from "./header/header.component";
import NavbarComponent from "../navbar/navbar.component";
import FooterComponent from "../footer/footer.component";

export default function Layout({children}: any) {

    return(
        <>
            <HeaderComponent/>
            <NavbarComponent/>
            {children}
            <FooterComponent/>
        </>
    );
}
