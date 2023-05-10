import './dropdown.css'
import { useState } from 'react';
import arrow from "../../assets/arrow.png";

export default function Dropdown ({title, content}) {

    const [isOpen, setOpen] = useState(false);

    const updateIsOpen = () => {
        setOpen(!isOpen)
      }

return (

    <section className={`collapse${isOpen ? " is-open" : " is-close"}`}>

      <h2 className="collapseTitle" onClick={updateIsOpen}>
        <span>{title}</span>
        {isOpen ? (
                        <button onClick={() => setOpen(false)}>
                            <img
                                className="arrow arrowUp"
                                src={arrow}
                                alt="bouton ouvert"
                            />
                        </button>
                    ) : (
                        <button onClick={() => setOpen(true)}>
                            <img
                                className="arrow arrowDown"
                                src={arrow}
                                alt="bouton fermé"
                            />
                        </button>
                    )}
      </h2>
                        
      <ul className={`collapseText ${isOpen ? "is-open" : "is-close"}`}>
      {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
      </ul>
    </section>
  )
}

