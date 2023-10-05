import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const RightSideNav = () => {
    const {googleLogin} =useContext(AuthContext);

    const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user);
            alert('google login')
        })
        .catch(error=>console.error(error))
    
    }
   
    

    return (
        <div>
            <div className='mb-12'>
            <h2 className="text-3xl">Login With</h2>
            <button onClick={handleGoogleLogin}
             className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                Google login
            </button>
            <button className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                GitHub login
            </button>
            </div>

            {/* Find us on */}
            <div className='mb-12'>
            <h2 className="text-3xl">Find us on</h2>
            <a href="" className='flex p-2 gap-4 text-lg items-center border border-black rounded-t-lg'>
            <FaFacebook></FaFacebook> 
            <span>Facebook</span>
            </a>
            <a href="" className='flex p-2 gap-4 text-lg items-center border-x border-black '>
            <FaTwitter></FaTwitter> 
            <span>Twitter</span>
            </a>
            <a href="" className='flex p-2 gap-4 text-lg items-center border border-black '>
            <FaInstagram></FaInstagram> 
            <span>Instagram</span>
            </a> 
            </div>

            {/* Q Zone */}
            <div className='p-4 space-y-2 mb-4'>
                <h2 className='text-3xl'>Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

            </div>

            
        </div>
    );
};

export default RightSideNav;