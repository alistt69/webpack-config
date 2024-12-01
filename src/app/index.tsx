import React, { useState } from "react";
import classes from './app.module.scss';
import { NavLink } from "react-router-dom";
import { paths } from "@/routes/routes";
import arrow from "@/assets/arrow.png";
import kitty from "@/assets/kittykitty.jpg";


export const App: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const TODO = (a: string) => {
        console.log(a)
    }

    return (
        <div data-testid={"wrqdagsbd"} className={classes.container}>
            <h1>platform={__PLATFORM__}</h1>
            <div>
                <img src={arrow} alt="arrow"/>
            </div>
            <div>
                <img height={400} width={650} src={kitty} alt="kitty"/>
            </div>
            <p>Число: {count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Увеличить</button>
            <div></div>
            <br/>
            <NavLink to={paths.ABOUT}>about</NavLink>
            <br/>
            <NavLink to={paths.SHOP}>shop</NavLink>
        </div>
    );
};
