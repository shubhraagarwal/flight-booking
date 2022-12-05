function AccountCreation() {
  return (
    <main className="flex flex-row justify-between items-center">
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Create an account</h3>
          <p className="max-w-prose">
            Tripma is free to use as a guest, but if you create an account
            today, you can save and view flights, manage your trips, earn
            rewards, and more.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="" className="flex flex-row gap-2">
            <input type="radio" name="" id="" />
            Save card and create account for later
          </label>
          <input
            className="w-9/12 rounded-md border-2 p-2"
            type="text"
            name=""
            id=""
            placeholder="Email"
          />
          <label htmlFor="" className="flex flex-col">
            <input
              className="w-9/12 rounded-md border-2 p-2"
              type="password"
              placeholder="Password"
              name=""
              id=""
            />
            <p className="text-xs">Strong Password</p>
          </label>
        </div>

        <div className="flex flex-row items-center gap-2">
          <hr className="w-48" />
          <p>or</p>
          <hr className="w-48" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-9/12 flex-row items-center rounded-md border-[1px] border-black">
            <div className="w-1/12 rounded-md rounded-r-none p-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_154_3948)">
                  <path
                    d="M16.1175 9.1364C16.1175 8.53896 16.069 8.10299 15.9641 7.65088H9.14197V10.3474H13.1464C13.0657 11.0175 12.6297 12.0267 11.6609 12.7049L11.6473 12.7952L13.8044 14.4662L13.9538 14.4811C15.3263 13.2135 16.1175 11.3485 16.1175 9.1364Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M9.14191 16.2411C11.1038 16.2411 12.7507 15.5952 13.9537 14.4811L11.6608 12.7048C11.0473 13.1327 10.2237 13.4315 9.14191 13.4315C7.22042 13.4315 5.58957 12.1639 5.00822 10.412L4.92301 10.4192L2.68009 12.155L2.65076 12.2366C3.84563 14.6102 6.29999 16.2411 9.14191 16.2411Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.00824 10.412C4.85484 9.95993 4.76607 9.47548 4.76607 8.97494C4.76607 8.47435 4.85484 7.98996 5.00017 7.53785L4.9961 7.44156L2.72508 5.67786L2.65077 5.7132C2.15831 6.69818 1.87573 7.80428 1.87573 8.97494C1.87573 10.1456 2.15831 11.2516 2.65077 12.2366L5.00824 10.412Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M9.14191 4.51832C10.5063 4.51832 11.4267 5.10768 11.9515 5.6002L14.0022 3.59795C12.7427 2.42729 11.1038 1.70874 9.14191 1.70874C6.29999 1.70874 3.84563 3.33958 2.65076 5.71319L5.00015 7.53784C5.58957 5.78588 7.22042 4.51832 9.14191 4.51832Z"
                    fill="#EB4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_154_3948">
                    <rect
                      width="14.25"
                      height="14.5825"
                      fill="white"
                      transform="translate(1.875 1.70874)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <button className="w-11/12 rounded-md rounded-l-none p-2 font-['Nunito_Sans'] text-[#007DFE]">
              Sign In with Google
            </button>
          </div>
          <div className="flex w-9/12 flex-row items-center rounded-md border-[1px] border-black">
            <div className="w-1/12 rounded-md rounded-r-none p-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99463 16.0305C5.70717 15.8381 5.45191 15.6024 5.23859 15.3302C5.00582 15.0482 4.79007 14.7516 4.59195 14.4446C4.12641 13.7625 3.76237 13.0165 3.51015 12.2302C3.20628 11.3155 3.05859 10.4397 3.05859 9.58283C3.05859 8.62667 3.26523 7.79231 3.66756 7.09194C3.96536 6.54382 4.40901 6.08523 4.94383 5.76306C5.46042 5.44028 6.06209 5.26366 6.66984 5.25148C6.88255 5.25148 7.1135 5.28193 7.3566 5.34284C7.53284 5.39156 7.74556 5.47073 8.00689 5.56817C8.34115 5.69607 8.52348 5.77524 8.58425 5.79351C8.77873 5.86659 8.94282 5.89704 9.07045 5.89704C9.16769 5.89704 9.30747 5.86659 9.46245 5.81787C9.55057 5.78742 9.7177 5.73261 9.95472 5.62908C10.1893 5.54381 10.3753 5.47073 10.523 5.41592C10.7478 5.34893 10.9654 5.28802 11.1611 5.25757C11.3981 5.22103 11.6333 5.20885 11.8588 5.22712C12.2903 5.25757 12.6853 5.34893 13.0378 5.48291C13.6577 5.73261 14.1579 6.12238 14.5311 6.67659C14.3731 6.77403 14.2272 6.88731 14.0905 7.01155C13.7945 7.27343 13.5435 7.58403 13.3429 7.92813C13.0816 8.39707 12.9479 8.92692 12.9515 9.46286C12.9607 10.1224 13.1278 10.7022 13.462 11.2047C13.6972 11.5701 14.0115 11.8831 14.3943 12.1401C14.5827 12.268 14.748 12.3563 14.9048 12.4142C14.8319 12.6425 14.7517 12.8648 14.6587 13.0841C14.4478 13.5756 14.1968 14.0463 13.899 14.4909C13.6365 14.8746 13.4298 15.1608 13.273 15.3496C13.0287 15.642 12.7929 15.8612 12.5559 16.0177C12.2946 16.1913 11.9876 16.2833 11.6734 16.2833C11.4607 16.2924 11.248 16.265 11.045 16.2059C10.8688 16.1481 10.695 16.0829 10.5248 16.0092C10.3467 15.9276 10.1626 15.8582 9.97478 15.8021C9.74384 15.7412 9.50681 15.712 9.26736 15.7126C9.02426 15.7126 8.78724 15.7431 8.56237 15.8009C8.37397 15.8545 8.19164 15.9203 8.01114 15.9989C7.75589 16.1054 7.58876 16.1755 7.49152 16.2059C7.29461 16.2644 7.09283 16.2997 6.88984 16.3125C6.57382 16.3125 6.27966 16.2211 5.98673 16.0384L5.99463 16.0305ZM10.1601 4.78802C9.74687 4.99509 9.35427 5.08278 8.96105 5.05355C8.90028 4.66013 8.96105 4.25574 9.12515 3.81298C9.27101 3.43539 9.46549 3.09434 9.7329 2.78983C10.0125 2.47314 10.3467 2.21126 10.7235 2.02246C11.1246 1.81539 11.5075 1.70577 11.8722 1.6875C11.9208 2.10163 11.8722 2.50968 11.7202 2.94817C11.5817 3.33794 11.375 3.69727 11.1125 4.02005C10.8481 4.33674 10.5199 4.59861 10.1486 4.78741L10.1601 4.78802Z"
                  fill="#27273F"
                />
              </svg>
            </div>
            <button className="w-11/12 rounded-md rounded-l-none p-2 font-['Nunito_Sans'] text-[#007DFE]">
              Sign In with Apple
            </button>
          </div>
          <div className="flex w-9/12 flex-row items-center rounded-md border-[1px] border-black">
            <div className="w-1/12 rounded-md rounded-r-none p-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0393 2.25H2.96074C2.77634 2.26245 2.6027 2.34133 2.47202 2.47202C2.34133 2.6027 2.26245 2.77634 2.25 2.96074V15.0393C2.25104 15.2274 2.32626 15.4076 2.45932 15.5407C2.59238 15.6737 2.77256 15.749 2.96074 15.75H9.42644V10.4921H7.72068V8.50288H9.49712V7.01074C9.45883 6.65289 9.49993 6.291 9.6175 5.95086C9.73506 5.61071 9.9262 5.30068 10.1773 5.04284C10.4284 4.78501 10.7332 4.58572 11.0701 4.45918C11.407 4.33264 11.7677 4.28195 12.1264 4.31074C12.8372 4.31074 13.4764 4.38141 13.6893 4.38141V6.22932H12.6236C11.7707 6.22932 11.6285 6.65576 11.6285 7.22435V8.50288H13.6178L13.3335 10.5636H11.5579V15.75H15.0393C15.2274 15.749 15.4076 15.6737 15.5407 15.5407C15.6737 15.4076 15.749 15.2274 15.75 15.0393V2.96074C15.7375 2.77634 15.6587 2.6027 15.528 2.47202C15.3973 2.34133 15.2237 2.26245 15.0393 2.25V2.25Z"
                  fill="#407AEA"
                />
              </svg>
            </div>
            <button className="w-11/12 rounded-md rounded-l-none p-2 font-['Nunito_Sans'] text-[#007DFE]">
              Sign In with Facebook
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div>
            <h3 className="text-lg font-semibold">Canellation policy</h3>
            <p className="max-w-prose">
              This flight has a flexible cancellation policy. If you cancel or
              change your flight up to 30 days before the departure date, you
              are eligible for a free refund. All flights booked on Tripma are
              backed by our satisfaction guarantee, however cancellation
              policies vary by airline. See the full cancellation policy for
              this flight.
            </p>
          </div>
          <div className="mt-4 flex flex-row gap-4">
            <button className="rounded border-[1px] border-black p-3">
              Back to seat select
            </button>
            <button className="rounded border-[1px] border-transparent bg-[#007DFE] p-3 text-white">
              Confirm and pay
            </button>
          </div>
        </div>
      </section>

      <div>
        <img src="./images/girlFlightSVG.png" alt="" />
      </div>
    </main>
  );
}

export default AccountCreation;
