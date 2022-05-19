import AtheleteCard from './AtheleteCard'

const MeetOurAtheletes = ({ children }) => {

    const Atheletes = ["LeBron James", "Roger Federer", "Kevin Durant", "Tiger Woods", "Rafael Nadal", "Kobe Bryant", "Gareth Bale", "Usain Bolt", "Rory McIlroy"]

    return (
        <section className="container mx-auto px-24 lg:px-99 my-99">

            {children}

            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {
                    Atheletes?.map(athelete => (
                        <AtheleteCard athelete={athelete} />
                    ))
                }
            </div>
        </section>
    )
}

export default MeetOurAtheletes;