import React from 'react';

const Footer = () => {
    return (
        <footer class="py-1 bg-theme mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <small class="text-silver">Copyright &copy; Fashion Club BD {new Date().getFullYear() } | Version: 0.1.0 Beta</small>
                            <div>
                               <small className='text-silver'> Design & Developed by <a className='text-white' href="https://www.linkedin.com/in/mehedi-hasan-919771185/">Mehadi Hasan</a>
                               
                               </small>
                                
                            </div>
                        </div>
                    </div>
                </footer>
    );
};

export default Footer;