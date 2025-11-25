import { Link } from "react-router";

function Home() {
    return (
        <main className="main__container">
            <section className="desc__text">
                <p className="desc__ques">So, you want to travel to</p>
                <h1 className="main__text">Space</h1>
                <p className="main__desc">
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </p>
            </section>
            <div className="link__con">
                <Link to="/Destination" className="exp__cir">
                    Explore
                </Link>
            </div>
        </main>
    );
}

export default Home;
