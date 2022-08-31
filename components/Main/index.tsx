import Poster from "../Poster";
import { PosterWrap } from "../Poster/styled";
import { IPoster } from '../Poster/types';

const dummyPoster: IPoster[] = [
    {
        name: '엘리자베스',
        location: '블루스퀘어 신한카드홀',
        date: '22-03-13 ~ 22-04-03',
    },
    {
        name: '태양의서커스 뉴 알레그',
        location: '잠실종합운동장 내 빅탑',
        date:'22-03-13 ~ 22-04-03',
    },
    {
        name: '마틸다',
        location: '대성 디큐브 아트센터',
        date:'22-03-13 ~ 22-04-03',
    }
];

const Main: React.FC = () => {
    const a = 1;

    return (
        <PosterWrap>
            { dummyPoster.map((poster) => <Poster poster={poster} />) }
        </PosterWrap>
    )
}

export default Main;