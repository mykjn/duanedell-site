import single1 from '../assets/banwag.jpg';
import single2 from '../assets/ngalan.jpg';
import single3 from '../assets/gitagbo.jpg';
import single4 from '../assets/taliwala.jpg';
import album1 from '../assets/pagkagamhanan.jpg';

const musicData = [
  {
    type: 'single',
    title: 'BANWAG',
    image: single1,
    link: 'https://open.spotify.com/track/4qFn8peLOCMWCtnzFJWYA6?si=41d32168ed4c4c83',
    writer: 'Dave Valiente, Duane Dell Atibula Fuderanan, John Milo Atibula, Michael Ray Nallos, Mykie Jan Quesada, Sherwin Zerda',
    year: '2025',
    lyrics: `Kita ang suga nga nagdan-ag
Banwag nga maoy kahayag
Sa tanan nganhi sa kalibutan
Kita ang piniling katawhan

Sininggit Ka niining among dughan (HALLELUJAH) 
Hesus Ikaw'ng labaw sa tanan! 

Atong isangyaw
ang kaluwasang naangkon ta
Atong ibayaw
ang kadaugang naangkon ta
Hesus Ikaw'ng paingnan
Himayaon Ka

Gipili ug gitagaag bili
Ni Hesus - Diyos ug Hari
Ipaila nga ang Iyang gugma
sa kangitngit mahimong suga

Atong isangyaw
ang kaluwasang naangkon ta
Atong ibayaw
ang kadaugang naangkon ta
Hesus Ikaw'ng paingnan
Himayaon Ka

Atong isayaw
Ang kagawasang naangkon ta
Atong ihugyaw
Milagrosong buhat Niya
Hesus Ikaw'ng paingnan
Himayaon Ka`
    
    
},
  {
    type: 'single',
    title: 'NGALAN',
    image: single2,
    link: 'https://open.spotify.com/track/0Bu8W9juhUBvDKpvOkyN3g?si=550cbc5edf27444b'
  },
  {
    type: 'single',
    title: 'Gitagbo',
    image: single3,
    link: 'https://open.spotify.com/track/6jTuboubtHAgudcIhmgaJa?si=7b653861a3d14788'
  },
  {
    type: 'single',
    title: 'Taliwala',
    image: single4,
    link: 'https://open.spotify.com/track/5T1KzeJw2NjSKX4N09R0i3?si=92987259e0cd43ad'
  },
  {
    type: 'album',
    title: 'Pagkagamhanan EP',
    image: album1,
    tracks: [
        {
            title: 'Bundak Ulan',
            duration: '4:49',
            link: 'https://open.spotify.com/track/3C0ldCpDXXNPvsBSNEOloT?si=ccfc762706684911'
        },
        {
            title: 'Bantugan ft. Krayzel Feb',
            duration: '3:14',
            link: 'https://open.spotify.com/track/2P0HGhLOGDwHUvAXAK45h0?si=c54a73e04bca4625'
        },
        {
            title: 'Sidlak (Balaan Ka) ft. Pastor Ruiz',
            duration: '4:38',
            link: 'https://open.spotify.com/track/5BMYXLKI2mxq9FxSS2Nc5L?si=667c8b772c834b2d'
        },
        {
            title: 'No Longer I ft. Sherry',
            duration: '4:34',
            link: 'https://open.spotify.com/track/4JDBAydhdTWzKPMV7AKLfP?si=028ab31338f84a70'
        },
        {
            title: 'Pagkagamhanan ft. Kearly',
            duration: '5:15',
            link: 'https://open.spotify.com/track/1z3o6tGlBGw371SruNbnTR?si=657c50da09e841f9'
        },
    ]
  },
];

export default musicData;