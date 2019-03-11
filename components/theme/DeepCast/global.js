import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,body {
    
    // FOLLOWING IS A MUST FOR FLEX FIXED FOOTER TO WORK
    height: 100%; 
  }  
  html {
    scroll-behavior: smooth;
    @media screen and (max-width: 991px) {
    	margin-top: 65px;
    }
  }
  body {

    // H1 SIZE FIX FOR MOBILE DEVICES
    @media screen and (max-width: 400px) {
      h1 {
        font-size: 2rem !important;
      }
    }
    
    // FOR A BOOTSTRAP BUGFIX
    line-height: 0;
    
    // FOR REMOVING ROUNDED CORNERS GLOBALLY 
    input, button {
      border-radius: 0px !important;
    }

    // GLOBAL SECTION BORDER LEFT
    .section-container {
      border-left: 1px solid #e3e3e3;
    }

    // GLOBAL DESKTOP SUBNAV & MODAL STYLES
    @media (min-width: 992px) {
      .modal {
        left: 310px !important;
      }
      .modal-backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 310px !important;
        z-index: 1040;
        background-color: #000;
      }
    }

    // GLOBAL ACTIVE LINK ARROW STYLES FOR DESKTOP AND MOBILE
    .nav-item .active-nav-item {
      &:before {
        content: '\f04b';
        font-family: FontAwesome;
        font-style: normal;
        font-weight: normal;
        text-decoration: inherit;
        color: dodgerblue;
        margin-left: -1.25rem;
        padding-right: .5rem;
    }
  } //END BODY

  // GLOBAL LAYOUT STYLES
  #__next {
    // FOR SIDE BAR NAV TO WORK
    @media screen and (min-width: 992px) {

      // MUST FOR FIXED FOOTER
      height: 100% !important; 
      
      display: flex;
      flex-direction: row;
      align-items: stretch;
    }
  }
  
  #main-content-right {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    // border-left: 1px solid #e3e3e3;

    // MUST FOR THE SITE TO HAVE FULL SCREEN WIDTH
    flex-grow: 1; 
  }

  main {
    // MUST FOR FIXED FOOTER
    flex-grow: 1; 
	}

	main,
	footer {
		flex-shrink: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    //BOOTSTRAP 4 BUGFIX
    margin-bottom: 0; 
    padding-bottom: 1rem;
  }

  #app {
    background-color: white;
  }

  p,
  label {
    font-family: Arial;
    line-height: 1.5rem;
  } 

  // NAV BAR GLOBAL STYLES [DESKTOP NAV]
  .navbar-light .navbar-nav .nav-link {
    color: grey;
  }

`;

export default GlobalStyle;
