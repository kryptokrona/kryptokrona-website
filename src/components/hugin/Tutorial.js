import * as React from 'react'
import { Card, Container } from 'react-bootstrap'

const HuginTutorial = (props) => {
    return (
        <Container className='mb-5'>
            <Card>
        <div className='hugin-tutorial-section'>
            <div className='hugin-title'>Tutorial</div>

            <div className='tutorial1'>
                Första start
                När du startar Hugin Messenger första gången möts du av en välkomstskärm som skapar ett nytt konto till dig.
                Nu är du snart redo att börja använda Hugin, men först måste du föra över lite kryptokronor till ditt konto.
            </div>

            <div className='tutorial2'>
                Hugin-adresser
                Lägst upp i appen kan du se din Hugin-adress. Adressen har två delar, en vanlig kryptokrona-adress som används för att föra över kryptokronor, och sedan en meddelande-nyckel som behövs för att skicka meddelanden.
                När du ska föra över kryptokronor till ditt huginkonto är du bara intresserad av ”Payment address”-delen.
                Om du vill chatta med en kompis kan du klicka på ”COPY” för att kopiera båda delarna, som du sedan skickar till din chattpartner.
                Du kan också skapa en xkr.se-adress här för att göra adressen enklare att minnas. Kopiera din huginadress och klicka på länken.
            </div>

            <div className='tutorial3'>
                För över XKR
                När du ska föra över kryptokronor till ditt huginkonto är du bara intresserad av ”Payment address”-delen. Kopiera denna och för över från din plånbok.
                Ett meddelande kostar 0.00001 XKR att skicka plus 0.0001 XKR i mining-avgift. Totalt kostar ett meddelande 0.00011 XKR.
                Så 1 XKR räcker till nästan 10 000 meddelanden.
                På bilden ser du att det står 0 (+1000). Detta betyder att pengarna är på väg, men inte bekräftade ännu. Vänta någon minut tills det bara står 1000, sedan är du reda att börja använda Hugin Messenger!
            </div>

            <div className='tutorial4'>
                Skicka meddelanden
                För att skicka ett meddelande klickar du på + -tecknet vid sökfältet och skriver in din mottagares huginadress eller xkr.se-adress. Om adressen stämmer kommer det fram två gröna bockar, en vid mottagaradressen och en vid meddelandenyckeln.
                Sen är det bara att chatta på!
            </div>
        </div>
        </Card>
        </Container>

    )
}

export default HuginTutorial