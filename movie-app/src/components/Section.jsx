import Card from "./Card";

const Section = () => {
    return (
        <main>
            <div className="cards">
                <h2 className="card-kategori">
                    <a >
                        Popular Movies
                    </a>
                </h2>
                <ul className="card-list">
                    <Card image="https://i.pinimg.com/564x/5d/76/04/5d760473f9098038896abb85dc4baaac.jpg" title="Card1" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac augue fermentum interdum. Donec auctor, justo nec ultricies ultricies, justo odio fermentum odio"/>
                    <Card image="https://i.pinimg.com/564x/63/97/a8/6397a80580f0bfdda97eb026f0e0e73f.jpg" title ="Card2" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac augue fermentum interdum. Donec auctor, justo nec ultricies ultricies, justo odio fermentum odio"/>
                    <Card image="https://i.pinimg.com/564x/36/fd/ce/36fdce7e6efaa54b6d75ae614c2f41ce.jpg" title ="Card3" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac augue fermentum interdum. Donec auctor, justo nec ultricies ultricies, justo odio fermentum odio"/>
                </ul>
            </div>
        </main>
    );
}

export default Section;