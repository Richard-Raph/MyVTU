const Testimonial = () => {
  return (
    <div className="p-0 pt-20 pb-10 md:p-10 lg:p-20 bg-gray-200 testimonials ">
      <div className="p-0 px-5 pb-10 md:px-5 lg:px-10 m-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="bg-white border-t-2 border-blue-400 p-2 rounded shadow-lg p-10">
          <span className="icon m-auto block text-center py-5">
            <i className="fas fa-wallet text-6xl"></i>
          </span>
          <h2
            style={{ fontFamily: "Poppins" }}
            className="font-semibold text-3xl text-center block relative py-5"
          >
            Instant Wallet Funding?
          </h2>

          <div className="pt-5 text-center" style={{ fontFamily: "Poppins" }}>
            Yes, we got you covered. Enjoy easy, fast and instant funding of
            your wallet after payment. You will receive your personal VTU.ng
            bank account details for instant funding of wallet after
            registration. Any payment made into the bank account gets your
            wallet credited automatically. Oh my goodness!
          </div>

          <a
            style={{
              fontFamily: "Poppins",
              backgroundColor: "#0099db !important",
            }}
            className="login_popup_btn my-10 py-2 px-7 text-white font-normal bg-blue-400 hover:bg-blue-800 hover:text-white border border-blue-400 transition-all rounded relative block w-max m-auto"
          >
            Withdraw Balance
          </a>
        </div>
        <div className="bg-white border-t-2 border-blue-400 p-2 rounded shadow-lg p-10">
          <span className="icon m-auto block text-center py-5">
            <i className="fas fa-wallet text-6xl"></i>
          </span>
          <h2
            style={{ fontFamily: "Poppins" }}
            className="font-semibold text-3xl text-center block relative py-5"
          >
            Make Money as an Affiliate
          </h2>

          <div className="pt-5 text-center" style={{ fontFamily: "Poppins" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </div>

          <a
            style={{
              fontFamily: "Poppins",
              backgroundColor: "#0099db !important",
            }}
            className="login_popup_btn my-10 py-2 px-7 text-white font-normal bg-blue-400 hover:bg-blue-800 hover:text-white border border-blue-400 transition-all rounded relative block w-max m-auto"
          >
            Become an Affiliate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;