import { Data } from "../../data";
import formatCurrency from "../../util";
import './main.css';
function Main() {
    return (
        <div className="main">
            {
                Data.map((item => {
                   return <div className="item">
                        <img src={item.image} alt="" />
                        <div className="info">
                            <div>
                                <h1>
                                    {item.title}
                                </h1>
                                <p>{formatCurrency(item.price)}</p>
                            </div>
                            <button type="submit">افزودن به سبد خرید</button>
                        </div>
                    </div>
                }))
            }
        </div>
    );
}

export default Main;