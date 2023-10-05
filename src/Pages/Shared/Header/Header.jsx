import moment from 'moment';

import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center mt-8 space-y-4'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <h4 className='text-xl'>{moment().format("dddd, MMMM D YYYY")}</h4>
        </div>
    );
};

export default Header;