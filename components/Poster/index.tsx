import { Wrap, Img, ContentWrap } from './styled';
import { IPoster } from './types';

interface Props {
    poster: IPoster;
}

const Poster: React.FC<Props> = ({ poster }) => {
    const { name, location, date } = poster;

    return (
        <Wrap>
            <Img>이미지</Img>
            <ContentWrap>
                <div>{name}</div>
                <div>{location}</div>
                <div>{ date }</div>           
            </ContentWrap>
     
        </Wrap>
    )
}

export default Poster;