import React from 'react'
import styled from 'styled-components'
import store from '../store'

function Home(props){
    const handleStore = () => {
        props.updateStore(store);
        props.playing_song(0);
        props.setStatus(true);
    }
    return (
        <Container>
            <button onClick={() => handleStore()}>Click me to play</button>
            <p>
                I turn the news on when I smell death in the air I prove you wrong, 
                I made it out of here I don't belong, I see my past everywhere Don't stand too close to me, 
                eternal PTSD I got a war zone inside of my head I made it on my own, they said I'd be 
                in jail or dead I've seen my brothers fall, over and over again Don't stand too close to 
                me, I got PTSD I was hearing bangs like Chief Keef Always yelling names that's deceased I 
                go off my mind and my instinct Shootin' at the same time, we was in sync On the same thing, 
                ryna repeat We was in them whips, right back on the enemies Stuffed on my last hit, 
                I was in the middle seat Fuck it, out the sunroof, brodie got a quick release And we i
                n a car real fast, fuck police Shots fired back but his ass in the street When I bought
                 a forty, showed Brittany and Tiffany Knowing if they call, it ain't shit they can't get
                  from me Lot of warfare 17 had a 50 piece Flexed on niggas so you know they wanna kill a
                   G (royalty) Posted in the hood with some Bentley keys (loyalty) Roc died, 
                   showed 'em what it really mean I can't sleep 'cause it's a war zone in my head 
                   My killas good, they know I'm hands on with the bread A million dollars ahead, 
                   I'm still angry and seeing red How the fuck I'm 'posed to have fun? 
                   All my niggas dead I turn the news on when I smell death in the air I prove you wrong,
                    I made it out of here I don't belong, I see my past everywhere Don't stand too
                     close to me, eternal PTSD I got a war zone inside of my head I made it on my own, 
                     they said I'd be in jail or dead I've seen my brothers fall, over and over again Don't 
                     and too close to me, I got PTSD Used to run home from the train stop Runnin' so fast 
                     dodgin' raindrops 'Member got robbed at the park once 'Member thinkin' that that bitch
                      probably ain't caught 'Member I was with my mama one time, seen a nigga through the 
                      glass Hit a nigga with a bankshot Point blank, head hanging off his tank top Walked off,
                       we drove off, went to GameStop (skrrt) Quiet ride there, picked up San Andreas Certai
                       n things we ain't talk about, mama, we just prayed off We seen it all, don't get invo
                       ed Carry the weight of the world like a shawl Conceal and revealing to people in court
                        I still can feel it, I know that the world is evil In case you thought a nigga forg
                        ot it When my homie was bleeding out, another homie went in his pockets Please do no
                        t run up on me, not even as fans Niggas get fanned down on the Dan Ryan I'm flyin', 
                        I'm scary as hell, I need me a Xan, ah The days seem long as life gets shorter We know sex,
                         drugs, money, all in that order Ain't no structure, no peace, we've lost our order Leaving
                          me with anxiety, fucking up my sobriety (Lil Uzi Vert, yeah) It's a war zone layin' insi
                          de my head I still think about all my niggas that's dead I'm too paranoid, yeah, I know
                           you heard what I said I'm too paranoid, I make sure all my opps they bled Drainin' all 
                           my energy, no, I cannot sleep, uh-huh I'm affected by the streets, no appetite, I can't
                            eat I only see red when I see, I think it's my PTSD (gang) I think it's my PTSD (whoa), 
                I think it's my PTSD, yeah I turn the news on when I smell death in the air
            </p>
            <p>
                I turn the news on when I smell death in the air I prove you wrong, 
                I made it out of here I don't belong, I see my past everywhere Don't stand too close to me, 
                eternal PTSD I got a war zone inside of my head I made it on my own, they said I'd be 
                in jail or dead I've seen my brothers fall, over and over again Don't stand too close to 
                me, I got PTSD I was hearing bangs like Chief Keef Always yelling names that's deceased I 
                go off my mind and my instinct Shootin' at the same time, we was in sync On the same thing, 
                ryna repeat We was in them whips, right back on the enemies Stuffed on my last hit, 
                I was in the middle seat Fuck it, out the sunroof, brodie got a quick release And we i
                n a car real fast, fuck police Shots fired back but his ass in the street When I bought
                 a forty, showed Brittany and Tiffany Knowing if they call, it ain't shit they can't get
                  from me Lot of warfare 17 had a 50 piece Flexed on niggas so you know they wanna kill a
                   G (royalty) Posted in the hood with some Bentley keys (loyalty) Roc died, 
                   showed 'em what it really mean I can't sleep 'cause it's a war zone in my head 
                   My killas good, they know I'm hands on with the bread A million dollars ahead, 
                   I'm still angry and seeing red How the fuck I'm 'posed to have fun? 
                   All my niggas dead I turn the news on when I smell death in the air I prove you wrong,
                    I made it out of here I don't belong, I see my past everywhere Don't stand too
                     close to me, eternal PTSD I got a war zone inside of my head I made it on my own, 
                     they said I'd be in jail or dead I've seen my brothers fall, over and over again Don't 
                     and too close to me, I got PTSD Used to run home from the train stop Runnin' so fast 
                     dodgin' raindrops 'Member got robbed at the park once 'Member thinkin' that that bitch
                      probably ain't caught 'Member I was with my mama one time, seen a nigga through the 
                      glass Hit a nigga with a bankshot Point blank, head hanging off his tank top Walked off,
                       we drove off, went to GameStop (skrrt) Quiet ride there, picked up San Andreas Certai
                       n things we ain't talk about, mama, we just prayed off We seen it all, don't get invo
                       ed Carry the weight of the world like a shawl Conceal and revealing to people in court
                        I still can feel it, I know that the world is evil In case you thought a nigga forg
                        ot it When my homie was bleeding out, another homie went in his pockets Please do no
                        t run up on me, not even as fans Niggas get fanned down on the Dan Ryan I'm flyin', 
                        I'm scary as hell, I need me a Xan, ah The days seem long as life gets shorter We know sex,
                         drugs, money, all in that order Ain't no structure, no peace, we've lost our order Leaving
                          me with anxiety, fucking up my sobriety (Lil Uzi Vert, yeah) It's a war zone layin' insi
                          de my head I still think about all my niggas that's dead I'm too paranoid, yeah, I know
                           you heard what I said I'm too paranoid, I make sure all my opps they bled Drainin' all 
                           my energy, no, I cannot sleep, uh-huh I'm affected by the streets, no appetite, I can't
                            eat I only see red when I see, I think it's my PTSD (gang) I think it's my PTSD (whoa), 
                I think it's my PTSD, yeah I turn the news on when I smell death in the air
            </p>
        </Container>
    )
}

export default Home;

const Container = styled.div`
    width: calc(100% - 240px);
    height: 100%;
    padding-top: 5rem;
    margin-left: 240px;

    p {
        color: #717171;
    }
`