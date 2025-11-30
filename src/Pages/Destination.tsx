import { useState } from "react";
import Data from "../data.json";

function Destination() {
    const destinationData = Data.destinations;
    const [destName, setDestName] = useState("Moon");

    function changeDest(name: string) {
        setDestName(name);
    }

    return (
        <main className="dest__main__con">
            <p className="intro__text">
                <span className="index">01</span>Pick your destination
            </p>
            {destinationData.map(
                (destination) =>
                    destName === destination.name && (
                        <section
                            className="dest__details"
                            key={destination.name}
                        >
                            <div className="dest__img__con">
                                <picture className="dest__image">
                                    <source
                                        srcSet={destination.images.webp}
                                        type="image/webp"
                                    />
                                    <img
                                        src={destination.images.png}
                                        alt={`image of ${destination.name}`}
                                    />
                                </picture>
                            </div>
                            <section className="dest__info">
                                <article className="dest__desc">
                                    <nav className="dest__nav">
                                        <ul className="dest__nav__con">
                                            {destinationData.map((item) => (
                                                <li
                                                    key={item.name}
                                                    onClick={() =>
                                                        changeDest(item.name)
                                                    }
                                                    className={`dest__nav__item  ${
                                                        destName === item.name
                                                            ? "dest__nav__item--active"
                                                            : ""
                                                    }`}
                                                >
                                                    {item.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>

                                    <article className="dest__loc">
                                        <h1 className="loc__header">
                                            {destination.name}
                                        </h1>
                                        <p className="loc__desc">
                                            {destination.description}
                                        </p>
                                    </article>
                                    <article className="dest__specs">
                                        <div className="spec">
                                            <p className="spec__text">
                                                Avg. distance
                                            </p>
                                            <h2 className="spec__val">
                                                {destination.distance}
                                            </h2>
                                        </div>
                                        <div className="spec">
                                            <p className="spec__text">
                                                Est. travel time
                                            </p>
                                            <h2 className="spec__val">
                                                {destination.travel}
                                            </h2>
                                        </div>
                                    </article>
                                </article>
                            </section>
                        </section>
                    )
            )}
        </main>
    );
}

export default Destination;
