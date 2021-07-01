import {useEffect} from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';

function Nav({categories, setCurrentCategory, currentCategory, contactSelected, setContactSelected}){

    useEffect(()=>{
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return(
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a data-testid="link" href="./">
                <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                        About me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map(category => (
                        <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                            <span 
                                onClick={() => {
                                    setCurrentCategory(category);
                                    setContactSelected(false);
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;