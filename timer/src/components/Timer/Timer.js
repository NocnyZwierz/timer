import Button from '../Button/Button';
import style from './Timer.module.scss';

const Timer = () => {
    return (
        <div className={style.mainDiv}>
            <h1>Timer</h1>
            <p>Tu będzie świę wyświetlać czas</p>
            <div className={style.buttonDiv}>
                <Button>Start</Button>
                <Button>Stop</Button>
                <Button>Reset</Button>
            </div>
        </div>
    );
};

export default Timer;