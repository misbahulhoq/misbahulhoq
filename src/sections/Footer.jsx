const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-10 sm:pb-5 border-t border-black-300 flex justify-between items-center flex-col sm:flex-row gap-5">
      {/* <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div> */}

      <div className="flex gap-3">
        <a href="https://github.com/misbahulhoq" target="_blank" className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/misbahulhoq" target="_blank" className="social-icon">
          <img src="/assets/linkedin.svg" alt="twitter" className="w-8 h-8" />
        </a>
        {/* <a href="" target="_blank" className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a> */}
      </div>

      <p className="text-white-500"> {new Date().getFullYear()}, Md Mezbah Uddin. </p>
    </footer>
  );
};

export default Footer;
