import { SortType } from '../../constants';
import style from './triangleIcon.module.css';
import { TriangleIconPropsType } from './triangleIcon.props';

export const TriangleIcon = ({sortName}: TriangleIconPropsType) => {
    
    switch (sortName) {
        case SortType.Descending:
            return <svg className={style['icon']} fill="#000000" width="10px" height="10px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,21H3L12,3Z"/></svg>;
        case SortType.Ascending:
            return <svg className={`${style['icon']} ${style['rotate']}`} fill="#000000" width="10px" height="10px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,21H3L12,3Z"/></svg>;
        default:
            return <></>;
    }
};

