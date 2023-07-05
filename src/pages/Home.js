import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import {FaLeaf} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {AiFillGoogleCircle} from 'react-icons/ai'


export default function Home() {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
            {/* <h3><FaLeaf/>&nbsp;MemoraVerse</h3> */}
            <Link to=""><FaLeaf/>&nbsp;MemoraVerse</Link>
            </li>
            <li className="nav-item">
              <Link to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
      <h2>Preserve your memories with MemoraVerse</h2>
      <h3>Honor your passed loved ones</h3>
      <div className='container1'>
                    <p class="ptag">The importance of memories cannot be overstated when it comes to preserving the legacy of a loved one who has passed away. Whether they're
                   captured in photos, video, audio, the written word, or in the  form of physical objects, preserving those memories helps famil and friends
                    honor their loved  ones for years to come.</p>
                    <img id='img' src='https://st2.depositphotos.com/2117297/5594/i/600/depositphotos_55948991-stock-photo-mother-spending-time-with-daughter.jpg'/>
      </div>
      <h3>Commemerate special events</h3>
      <div className='container1'>
                    <p class="ptag">Memories preserved in a home video on VHS are at the mercy of how well the technology holds up. VHS tapes can get damaged and discolored over 
                    time if exposed to heat, moisture, or if broken. VCR players are not as widely available as they once were. Even DVDs are being phased out. Transferring these memories 
                    in to digital lives longer.</p>
                    <img id='img' src='https://cdn-bcfmk.nitrocdn.com/fYEZdJKjvuXkKgFpeJrbqdViLvHKUQUB/assets/images/optimized/rev-b721f14/wp-content/uploads/2022/05/03-events-2048x1365.jpeg'/>
      </div>
      <h3>Keep your find memories close</h3>
      <div className='container1'>
                    <p class="ptag">When you leave a place, and no longer have the daily reminders of the people from that environment, memories begin to fade. It’s just how our brains work 
                    to keep us focused on the present day’s immediate needs. Sometimes we have to leave a place, or a group of cherished friends, and we wish we could take them with us.
                     Preserving those memories helps us do just that. .</p>
                    <img id='img' src='https://cdn-bcfmk.nitrocdn.com/fYEZdJKjvuXkKgFpeJrbqdViLvHKUQUB/assets/images/optimized/rev-b721f14/wp-content/uploads/2022/05/07-record-2048x1365.jpeg'/>
      </div>
      <h3>Echoes of yesterday </h3>
      <div className='container1'>
                    <p class="ptag">Important memories are created at events like birthdays, anniversaries, weddings, and graduations. Memories preserved in the form of photos, video or through 
                    another medium can also be shared during these events, too. What better time than when friends and family are all together?.</p>
                    <img id='img' src='https://cdn-bcfmk.nitrocdn.com/fYEZdJKjvuXkKgFpeJrbqdViLvHKUQUB/assets/images/optimized/rev-b721f14/wp-content/uploads/2022/05/09-stories-2048x1365.jpeg'/>
      </div>
      <h3>Make your life project</h3>
      <div className='container1'>
                    <p class="ptag">Taking photos of vacations, holidays, and everyday life is one of the best ways to preserve memories. It’s easier than ever to snap photos on your smartphone 
                    and organize them within your device. To take it to the next level,There’s just something about holding 
                    a physical photo album in your hands and passing it around to share with friends and family.</p>
                    <img id='img' src='https://imgv3.fotor.com/images/blog-richtext-image/Family-photo-collage-ideas.png'/>
      </div>
      <footer class="footer">
                  <a href='' target="blank"><FaInstagramSquare className='icon'/> </a>
                  <a href='' target='blank'><FaFacebook className='icon'/> </a>
                  <a href='' target='_blank'><BsTwitter className='icon'/> </a>
                  <a href='' target='_blank'><AiFillGoogleCircle className='icon'/> </a>
                  {/* <hr class="footer-line"/> */}
                  <div class='footerhead'>
                  <h2>Contact us:</h2>
                  <h4 class="mobile">Mobile: +91 7895421386</h4>
                  <h4>Email: mermoraverse@gmail.com</h4>
                  <h1 className="title"><FaLeaf/>&nbsp;MemoraVerse</h1>
                  </div>
                </footer>
      </div>
    </div>
  );
}
