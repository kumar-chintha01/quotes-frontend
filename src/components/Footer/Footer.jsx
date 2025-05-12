import React from 'react'
import Styles from './Footer.module.css'

function Footer() {

  const date=new Date();

  return (
    <footer id={Styles['footer']}>
      <div id={Styles['container']}>
      <h2>Quotes.io</h2>
      <div id={Styles['info']}>
        <ul id={Styles['links']}>
          <ul>
            <li>blah asdnbsadb</li>
            <li>blah asdnbsadb</li>
            <li>blah asdnbsadb</li>
          </ul>
          <ul>
            <li>blah asdnbsadb</li>
            <li>blah asdnbsadb</li>
            <li>blah asdnbsadb</li>
          </ul>
          <ul>
            <li>blah asdnbsadb</li>
            <li>blah asdnbsadb</li>
            <li>blah asdnbsadb</li>
          </ul>
        </ul>
      </div>
      </div>
      Coprights©️{
        date.getFullYear()
      }
    </footer>
  )
}

export default Footer