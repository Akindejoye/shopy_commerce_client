import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
   padding: 2rem; 
`;

const Logo = styled.h1``;


const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    color: #fff; 
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;  
    margin-right: 2rem;
`;

const Center = styled.div`
    flex: 1;
    padding: 2rem;
`;

const Title = styled.h3`
    margin-bottom: 3rem;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 1rem;
`;

const Right = styled.div`
    flex: 1;
    padding: 2rem;
`;

const ContactItem = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return ( 
        <Container>
            <Left>
                <Logo>TAYE.</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023" >
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: '1rem'}} /> 844 Allen Way, West Beachside 243999
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: '1rem'}} /> + 444 15 99
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: '1rem'}} /> tydruhill@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
     );
}
 
export default Footer;