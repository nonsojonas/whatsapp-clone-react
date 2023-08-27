function Welcome() {
  return (
    <div className="bg-glaring color">
      <div className="welcome">
        <div className="welcome-inner">
          <div className="align-center">
            <div className="whatsapp-icon">
              <i className="fa fa-whatsapp"></i>
            </div>

            <div className="desktop-view">
              <h1>WhatsApp Clone</h1>
              <p className="end2end"><i className="fa fa-lock"></i> End-to-end encrypted</p>
            </div>

            <div className="mobile-view">
              <span>not from</span><br/>
              <span className="bold w3-large">Meta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
