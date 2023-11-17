import mealsImage from "../../../assets/meals.jpg";
import "./CaffeMenu.css"
import Header from "../../Layout/Header";
const CaffeMenu = () => {
    return (
        <div>
            {/*<head>*/}
            {/*    <meta charSet="utf-8"/>*/}
            {/*    <title>Cafe Menu</title>*/}
            {/*</head>*/}
            <div className={"body"}>

            <div id="menu">
                <main>
                    <h1>CAMPER CAFE</h1>
                    <p className={"established"}>Est. 2020</p>
                   <hr/>
                    <section>
                        <h2>Coffee</h2>
                        <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="coffee icon"/>
                        <article className={"item"}>
                            <p className="flavor">French Vanilla</p>
                            <p className={"price"}>3.00</p>
                        </article>
                        <article className={"item"}>
                            <p className="flavor">Caramel Macchiato</p>
                            <p className={"price"}>3.75</p>
                        </article>
                        <article className={"item"}>
                            <p className="flavor">Pumpkin Spice</p>
                            <p className={"price"}>3.50</p>
                        </article>
                        <article className={"item"}>
                            <p className="flavor">Hazelnut</p>
                            <p className={"price"}>4.00</p>
                        </article>
                        <article className={"item"}>
                            <p className="flavor">Mocha</p>
                            <p className={"price"}>4.50</p>
                        </article>
                        <section>
                            <h2>Desserts</h2>
                        </section>

                        <article className="item">
                            <p className="dessert">Donut</p><p className="price">1.50</p>
                        </article>
                        <article className="item">
                            <p className="dessert">Cherry Pie</p><p className="price">2.75</p>
                        </article>
                        <article className="item">
                            <p className="dessert">Cheesecake</p><p className="price">3.00</p>
                        </article>
                        <article className="item">
                            <p className="dessert">Cinnamon Roll</p><p className="price">2.50</p>
                        </article>

                        {/*<div className={"prov"}>*/}
                        {/*    <div className={"price"}>*/}
                        {/*    <h1>kot</h1>*/}
                        {/*    <h1>kot</h1>*/}
                        {/*    <h1>kot</h1>*/}
                        {/*    </div>*/}
                        {/*    <div className={"flavor"}>*/}
                        {/*        <h1>kot</h1>*/}
                        {/*        <h1>kot</h1>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </section>
                </main>
                <hr className="bottom-line"/>
                <footer>
                    <p>
                        <a href="https://www.freecodecamp.org" target="_blank">Visit our website</a>
                    </p>
                    <p>123 Free Code Camp Drive</p>
                </footer>
            </div>
            </div>

        </div>

    )
}
export default CaffeMenu