import style from './Button.module.scss';

const Button = props => {
    return (
        <button className={style.button} onClick={props.onClick}>{props.children}</button> // przez props.children możemy przekazać treść jak w tym wypadku buttona, alternatywa to props.text a w miejscu gdzie deklarujemy guzik text="nasz tekst"
    );
};

export default Button;