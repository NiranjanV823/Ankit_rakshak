import React from 'react'
import { FaInstagram,FaLinkedin } from 'react-icons/fa';

const Menu = ({items}) => {
    return(
        <div className='section-center'>
            {
                items.map((menuItem)=>{
                    const {id,title,img,instagram,linkedin} = menuItem;

                    return(
                        <div className="menu-item" key={id}>
                            <img src={img} alt={title} className='photo'/>
                            <div className='item-info'>
                                <header style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <h3 style={{margin:'auto'}}>{title}</h3>
                                {instagram && (
                  <a
                    href={instagram}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ margin: 'auto', color: '#5176ad', textDecoration: 'none' }}
                  >
                    <FaInstagram style={{ marginRight: '5px',marginBottom:'-2px' }} />
                    Instagram
                  </a>
                )}

{linkedin && (
                  <a
                    href={linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      margin: 'auto',
                      color: '#0077b5', // LinkedIn color
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <FaLinkedin style={{ marginRight: '5px', marginBottom: '-2px' }} />
                    LinkedIn
                  </a>
                )}
                                </header>

                               
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
        
    
}

export default Menu;