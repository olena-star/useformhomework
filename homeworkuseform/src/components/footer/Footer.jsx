// eslint-disable-next-line no-unused-vars
import React from 'react';
import style from './style.module.css'


const links = ['Home', 'Shop', 'About', 'Contact'];
const help = ['Payment Options', 'Returns', 'Privacy Policies'];

const Footer = () => {
  return (
    <footer>

      <div className={style.firstBlockFooter}>
        <div>
          <h2 className={style.funiro}>Funiro.</h2>
          <p className={style.funiroText}>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div>
          <h2>Links</h2>
          <div className={style.links}>
            {links.map((el, idx)=>(
              <a key={idx} href="#">{el}</a>
            ))}
          </div>
        </div>
        <div>
          <h2>Shop</h2>
          <div className={style.links}>
            {help.map((el, idx)=>(
              <a key={idx} href="#">{el}</a>
            ))}
          </div>
        </div>
        <div>
          <h2>Newsletter</h2>
          <div className={style.formEmail}>
            <form id='formEmail'>
              <input type="email" value={'Enter Your Email Address'}/>
            </form>
              <button form="formEmail">SUBSCRIBE</button>
          </div>
      </div>
      </div>

      <div>
        <p>2023 furino. All rights reverved</p>
      </div>
      
    </footer>
  );
};


export default Footer;