import styled from 'styled-components'
import { Container } from 'reactstrap';

const Wrapper = styled(Container)`
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
`;

export default Wrapper;