import { useState } from "react";
import Data from "../data.json";
function Tecnology() {
    const technologyData = Data.technology;
    const [techName, setTechName] = useState("Launch vehicle");

    function changeTech(tech: string) {
        setTechName(tech);
    }
    return (
        <main className="tech__main__con">
            {technologyData.map(
                (technology) =>
                    techName === technology.name && (
                        <section className="tech__con" key={technology.name}>
                            <p className="intro__text tech__intro__text">
                                <span className="index">03</span>Space launch
                                101
                            </p>

                            <section className="tech__dets__con">
                                <div className="tech__img__con">
                                    <img
                                        src={technology.images.landscape.mobile}
                                        className="mobile__img"
                                        alt={`Image of a ${technology.name}`}
                                    />
                                    <img
                                        src={technology.images.landscape.tablet}
                                        className="tablet__img"
                                        alt={`Image of a ${technology.name}`}
                                    />
                                    <img
                                        src={technology.images.portrait}
                                        className="desktop__img"
                                        alt={`Image of a ${technology.name}`}
                                    />
                                </div>
                                <section className="tech__dets">
                                    <nav className="tech__nav__con">
                                        {technologyData.map(
                                            (techNav, index) => (
                                                <div
                                                    onClick={() =>
                                                        changeTech(techNav.name)
                                                    }
                                                    key={techNav.name}
                                                    className={`tech__nav__item ${
                                                        techName ===
                                                        techNav.name
                                                            ? "tech__nav__item--active"
                                                            : ""
                                                    }`}
                                                >
                                                    {index + 1}
                                                </div>
                                            )
                                        )}
                                    </nav>

                                    <section className="tech__details">
                                        <h2 className="tech__cat">
                                            The terminology...
                                        </h2>
                                        <h1 className="tech__name">
                                            {technology.name}
                                        </h1>
                                        <p className="tech__desc">
                                            {technology.description}
                                        </p>
                                    </section>
                                </section>
                            </section>
                        </section>
                    )
            )}
        </main>
    );
}

export default Tecnology;
