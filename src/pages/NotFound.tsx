import Wrapper from "../components/pages/NotFound/Wrapper";
import Figure from "../components/pages/NotFound/Figure";

import Herobrine from "../assets/img/herobrine.png";

const NotFound: React.FC = () =>
{
    return (
        <Wrapper>
            <Figure src={Herobrine} alt="You-Know-Who Figure" />
            <h3>Nothing Found.</h3>
        </Wrapper>
    );
}

export default NotFound;