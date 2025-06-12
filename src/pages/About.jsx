import bandPhoto1 from '../assets/DD.jpg'; // Optional image

export default function About() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-10 pt-20 lg:px-0 lg:pt-20 max-w-screen">
        <section className="z-10 mx-auto flex justify-center">
            <div>
                <div className="flex items-center justify-between w-full py-3 border-b-[1px] undefined border-black mb-4">
                    <div className="!text-xl uppercase text-black font-primary font-bold text-2xl">
                        About
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-2.5">
                    <div className="about-text">
                        <div className="structured-text">
                            <p>
                                Duane Dell is a Christian band based in General Santos City, Philippines, known for creating heartfelt and gospel-centered music, mostly in the Cebuano language. Formed in 2024, the band was born out of a desire to share the message of hope, redemption, and truth found in Jesus Christ through original songs that speak to the soul of every believer and seeker. With roots grounded in worship and a heart for ministry, Duane Dell aims to be a vessel of encouragement to the local church and the wider community.
                                <br />
                                <br />
                            </p>
                            <p>
                                The band’s debut single, Taliwala, was released in early 2024, carrying a powerful reminder to cast all our anxieties upon God, who cares deeply for His people. This was soon followed by Gitagbo, a reflective track inspired by the parable of the prodigal son — a call to return to the Father’s embrace no matter how far we’ve gone. These early songs marked Duane Dell’s identity: honest, raw, and anchored in Scripture.
                                <br />
                                <br />
                            </p>
                            <p>
                                Later in 2024, the band released their first EP, Pagkagamhanan, a five-track project that celebrates the power and sovereignty of God. The EP features special guest artists — close friends and fellow believers — making it a deeply personal and collaborative milestone. Each song in the EP explores different facets of God's greatness, from His faithfulness to His redemptive love.
                                <br />
                                <br />  
                            </p>
                            <p>
                                Continuing to grow in their musical journey, Duane Dell released Ngalan, a triumphant anthem about the victory we have in the name of Jesus. Most recently, they released Banwag on April 20, a song that challenges and reminds believers of their role as the light of the world. Through every lyric and melody, Duane Dell hopes to glorify God and point listeners back to the truth of the Gospel.
                            </p>
                            <p>
                                <br />
                                <br />
                            </p>
                            <p>
                                <strong>
                                    THE BAND
                                </strong>
                            </p>
                            <p>Duane Dell Fudereanan - Lead Vocals / Guitar / Composer</p>
                            <p>John Milo Atibula - Guitar / Keys / Producer</p>
                            <p>Dave Valiente - Drums / Composer</p>
                        </div>
                    </div>
                    <div className="order-first flex-col gap-4 lg:sticky lg:top-20 lg:order-1 lg:flex lg:self-start">
                        <div>
                            <div style={{ overflow: 'hidden', position: 'relative', width: '100%', maxWidth: '1200px' }}> 
                                <img
                                    src={bandPhoto1}
                                    alt="Duane Dell Band"
                                    className="object-cover object-center"
                                    style={{ display: 'block', width: '100%' }}
                                />  
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
