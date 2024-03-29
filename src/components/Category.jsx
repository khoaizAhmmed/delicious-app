import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { GiChopsticks, GiNoodles } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Category() {
    return (
        <List>
            <SLink to="/cuisine/Italian">
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to="/cuisine/American">
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to="/cuisine/thai">
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to="/cuisine/japanese">
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
        </List>
    );
}
const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0rem;
`;
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    background: linear-gradient(35deg, #494949, #313131);
    height: 5rem;
    width: 5rem;
    cursor: pointer;
    transform: scale(0.7);
    h4 {
        color: white;
        font-size: 0.7rem;
        padding: 0.4rem;
    }
    svg {
        color: white;
        font-size: 1.5rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e98057);
        svg {
            color: white;
        }
        h4 {
            color: white;
        }
    }
`;

export default Category;
