import React from 'react';
const Footer = ({ font, lan }) => (
  <footer className='page-footer font-small mdb-color pt-2'>
    <div className='container text-center text-md-left'>
      <div className='row d-flex align-items-center'>
        <div className='col-md-7 col-lg-8'>
          <p className='lead text-center mb-0 p-2'>
            {lan === 'bn' ? (
              <>
                <i className='fas heart fa-heart mx-2'></i> এর সাথে ডেভেলপ করেছে
                <a
                  className='text-primary font-weight-bold'
                  href='https://lakshmandev.netlify.app/'
                  target='blank'
                >
                  {' '}
                  মাহামুদ
                </a>
              </>
            ) : (
              <>
                Developed With
                <i className='fas heart fa-heart mx-2'></i>
                by{' '}
                <a
                  className='text-primary font-weight-bold'
                  href='https://mahamudsportfolio.netlify.app/'
                  target='blank'
                >
                  Mahamud
                </a>
              </>
            )}
          </p>
        </div>

        <div className='col-md-5 col-lg-4 ml-lg-0'>
          <div className='text-center text-md-right'>
            <ul className='list-unstyled list-inline'>
              <li className='list-inline-item'>
                <a
                  href='https://github.com/MahamudM90'
                  className='btn-floating btn-sm rgba-white-slight mx-1 github'
                  target='blank'
                >
                  <i className='fab fa-github fa-2x'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  href='https://www.linkedin.com/in/mahamudm90/'
                  className='btn-floating btn-sm rgba-white-slight mx-1 linkedin'
                  target='blank'
                >
                  <i className='fab fa-linkedin fa-2x'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
