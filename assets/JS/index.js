//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Show Menu >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const navMenu = document.getElementById('nav__menu')
    const navToggle = document.getElementById('nav__toggle')
    const navClose= document.getElementById('nav__close')
    const navLink=document.querySelectorAll('.nav--link')

    //<<<<< Menu Show >>>>>
          // Validate if constant is there
            if(navToggle)   
                {
                    navToggle.addEventListener('click', () =>
                    {
                        navMenu.classList.add('show-menu')
                    })
                }
    
    //<<<<< Menu Remove>>>>
        // Validate if constant is there
            if(navClose)
                {
                    navClose.addEventListener('click',() =>
                    {
                        navMenu.classList.remove('show-menu')
                    })
                }
    
     //<<<<< Menu Remove on clicking linking>>>>
            const action = () =>
                {
                    navMenu.classList.remove('show-menu')
                }
            
            navLink.forEach(n => n.addEventListener('click', action))
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Add blur to header >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const blur = () => 
    {
        const header = document.getElementById('header')
        this.scrollY >= 50 ? header.classList.add('blurHeader') : header.classList.remove('blurHeader')
    }
     
    window.addEventListener('scroll' , blur)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
