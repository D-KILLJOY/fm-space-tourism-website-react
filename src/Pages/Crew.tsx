import { useState } from "react";
import Data from "../data.json";

function Crew() {
    const crewData = Data.crew;
    const [crewName, setCrewName] = useState("Douglas Hurley");

    function changeCrew(name: string) {
        setCrewName(name);
    }

    return (
        <main className="crew__main__con">
            {crewData.map(
                (crew) =>
                    crew.name === crewName && (
                        <section className="crew__dets__con" key={crew.name}>
                            <p className="intro__text">
                                <span className="index">02</span>Meet your crew
                            </p>
                            <section className="crew__dets">
                                <article className="crew__detail">
                                    <div className="crew__det">
                                        <h2 className="crew__position">
                                            {crew.role}
                                        </h2>
                                        <h1 className="crew__name">
                                            {crew.name}
                                        </h1>
                                        <p className="crew__bio">{crew.bio}</p>
                                    </div>
                                    <nav className="crew__nav__con">
                                        {crewData.map((crewNav) => (
                                            <div
                                                onClick={() =>
                                                    changeCrew(crewNav.name)
                                                }
                                                key={crewNav.name}
                                                className={`crew__nav__item ${
                                                    crewNav.name === crewName
                                                        ? "crew__nav__item--active"
                                                        : ""
                                                }`}
                                            ></div>
                                        ))}
                                    </nav>
                                </article>
                                <article className="crew__img__con">
                                    <picture className="crew__img">
                                        <source
                                            srcSet={`src/${crew.images.webp}`}
                                            type="image/webp"
                                        />
                                        <img
                                            src={`src/${crew.images.png}`}
                                            alt="Image of ${data.crew[crewIndex].name}"
                                        />
                                    </picture>
                                </article>
                            </section>
                        </section>
                    )
            )}
        </main>
    );
}

export default Crew;
