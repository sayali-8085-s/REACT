//  import "./app.css"
// export function Footer(){
//     return(
//         <> 
//         <h1 className="para">footer</h1></>
//     )
// }

// // export {footer1,footer} for diffrent function



function Footer() {
  return (
    <footer className="bg-dark text-white text-center text-lg-start mt-auto">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">MyApp</h5>
            <p>
              This is a simple footer using Bootstrap classes.
              You can add links, info, or anything here.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Social</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-white">Facebook</a></li>
              <li><a href="#!" className="text-white">Twitter</a></li>
              <li><a href="#!" className="text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-secondary">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
