const Clients = () => {
  return (
    <div>
      <section className="row clients">
        <div className="sectionTitle">
          <h5>our partners &amp;</h5>
          <h2>clients</h2>
        </div>

        <div className="p-10 px-20 md:px-36 m-auto flex flex-col w-full justify-center align-middle items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 m-auto  gap-20">
            <img
              src="../../../assets/images/clients/mtn.jpg"
              className="inline"
            />
            <img
              src="../../../assets/images/clients/glo.jpg"
              className=" inline"
            />
            <img
              src="../../../assets/images/clients/airtel.jpg"
              className="inline"
            />
            <img
              src="../../../assets/images/clients/eko-electricity.jpg"
              className="inline"
            />
            <img
              src="../../../assets/images/clients/dstv.jpg"
              className="inline"
            />
            <img
              src="../../../assets/images/clients/ph-electricity.jpg"
              className="inline"
            />
            <img
              src="../../../assets/images/clients/gotv.jpg"
              className=" inline"
            />
            <img
              src="../../../assets/images/clients/startimes.jpg"
              className="inline"
            />
          </div>

          <a
            href="#"
            className="register_popup_btn my-10 mb-0 block relative mt-20 font-semibold rounded text-white w-max bg-blue-500 hover:text-white hover:bg-blue-700 transition-all py-5 px-10 m-auto"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Clients;