import { Button } from '../button/button';
import style from './startButtons.module.css';
import { StartButtonsPropsType } from './startButtons.props';

export const StartButtons = ({setStart}: StartButtonsPropsType) => {

    return (
        <div className={style['container']}>
            <Button dataSize={32} setStart={setStart}>Small Data</Button>
            <Button dataSize={1000} setStart={setStart}>Big Data</Button>
        </div>
    );
};