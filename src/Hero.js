export default function Hero() {
    return <section className="Hero">
        <CircleText />
        <p className="Hero__text"><span className="Hero__text--accent">T</span>hank you for visiting. <span className="Hero__text--accent">F</span>eel free to <span className="Hero__text--italic">explore</span>.<span className="Hero__arrow">↓</span></p>
    </section>
}

function CircleText() {
    const string = "software developer | javascript expert | ux ui enthusiast | "

    return <div className="CircleText__container">
        <div className="CircleText__outer">
            <h1 className="CircleText">{string.split("").map((char, index) => <span style={{transform: `rotate(${index * 6}deg)`}} className="CircleText__span">{char}</span>)}</h1>
        </div>
        <img className="CircleText__img" src="/facebook-cropped.png" />
    </div>
}