import { useState, useContext, useRef } from "react";
import { AdultCountContext } from "@/pages/_app";
import { date } from "zod";

type Props = {}



const PassengerInfoForm1 = (props: Props) => {

    const PassengerCount = useContext(AdultCountContext);
    console.log(PassengerCount.GlobalAdultCount);

    interface mainPassenger extends passenger {
        email : string,
        address : string,
        mobile : string,
    }

    interface passenger {
        firstName : string,
        middleName? : string,
        lastName : string,
        dob : string,
        id : string,
    }

    interface emergency {
        firstName : string,
        lastName : string,
        email : string,
        mobile : string,
    }

    const [mainPass, setMainPass] = useState<mainPassenger>();
    const [pass, setPass] = useState<passenger[]>([]);
    const [emergency, setEmergency] = useState<emergency>();
    const [emergencySame, setEmergencySame] = useState(false);
    const fields = [];
    for (let i = 0; i < PassengerCount.GlobalAdultCount; i++) {
      fields.push(i);
    }

    console.log(mainPass);
    const handleChange = (e) => {
        setMainPass({ ...mainPass, [e.target.name]: e.target.value });
      };

    const handleEmergency = (e) => {
        setEmergency({ ...emergency, [e.target.name]: e.target.value });
      };
      
    const handleChangeForPass = (i:number, e:any) => {
        let newPass = [...pass];
        // let miniPass = [...newPass[i]]
        console.log();
        
        // newPass[i][e.target.name] = e.target.value;
        setPass(newPass);
        console.log(pass);
      } 
    
  return (
    <div>
        <form>
            <div className="flex flex-col gap-4">
            <h2 className="font-medium">Passenger 1 Adult</h2>
            <div className="flex gap-2 lg:flex-wrap">
                {}
                <input
                    className="rounded-md border-2 p-2 sm:w-[135px]"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    id=""
                    value={mainPass?.firstName}
                    onChange={handleChange}
                />
                <input
                    className="rounded-md border-2 p-2 sm:w-[135px]"
                    placeholder="Middle"
                    type="text"
                    name="middleName"
                    id=""
                    value={mainPass?.middleName}
                    onChange={handleChange}
                />
                <input
                    className="rounded-md border-2 p-2 sm:w-[135px]"
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    id=""
                    value={mainPass?.lastName}
                    onChange={handleChange}
                />
            </div>
            <div className="flex gap-2">
            <input
                className="rounded-md border-2 p-2 sm:w-[135px]"
                placeholder="Date of Birth"
                type="text"
                name="dob"
                id=""
                onFocus={(e) => {
                    e.target.type = 'date'
                }}

                onBlur={(e) => {
                    e.target.type = 'text'
                }}

                onChange={handleChange}

                />
            </div>
        <div className="flex gap-2">
          <input
            placeholder="Enter your Email"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="text"
            name="email"
            id=""
            value={mainPass?.email}
            onChange={handleChange}
          />
          <input
            placeholder="ID-Card Number"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="text"
            name="id"
            id=""
            value={mainPass?.id}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2">
          <input
            placeholder="Address"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="text"
            name="address"
            id=""
            value={mainPass?.address}
            onChange={handleChange}
          />
          <input
            placeholder="Mobile Number"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="number"
            name="mobile"
            id=""
            value={mainPass?.mobile}
            onChange={handleChange}
          />
        </div>

        {/* DYNAMIN PASSENGERS<<<<<<<<<<<<<<<<< */}
        {fields.map((ele,index) => {
        return(
          <div  className="flex flex-col gap-4"  key={index}>
            <h2 className="mt-8 font-medium">Passenger {index+1}</h2>
            <div className="flex gap-2">
            <input
                placeholder="First Name"
                className="rounded-md border-2 p-2 sm:w-[135px]"
                type="text"
                name=""
                id=""
                value={ele.firstName || " "} 
                onChange={e => handleChangeForPass(index, e)}
            />
            <input
                placeholder="Last Name"
                className="rounded-md border-2 p-2 sm:w-[135px]"
                type="text"
                name=""
                id=""
                value={ele.lastName || " "} 
                onChange={e => handleChangeForPass(index, e)}
            />
            </div>
            <div className="flex gap-2">
            <input
                placeholder="Email Address"
                className="rounded-md border-2 p-2 sm:w-[135px]"
                type="text"
                name=""
                id=""
                value={ele.email || " "} 
                onChange={e => handleChangeForPass(index, e)}
            />
            <input
                placeholder="Mobile Numbers"
                className="rounded-md border-2 p-2 sm:w-[135px]"
                type="number"
                name="emergency-mobile"
                id=""
                value={ele.mobile || " "} 
                onChange={e => handleChangeForPass(index, e)}
            />
            </div>
          </div>
        )
      })}
        {/* >>>>>>>>>>>>>>>>>DYNAMIC PASSENGERS */}

        <div className="flex flex-col gap-4">
            <h2 className="mt-8 font-medium">Emergency contact information</h2>
            <label htmlFor="">
                <input
                    className="mr-2 rounded-md border-2"
                    type="checkbox"
                    name=""
                    id=""
                    checked={emergencySame}
                    onChange={() => {
                    setEmergencySame(!emergencySame);
                    }}
                />
                Same as Passenger 1
            </label>
            <div className="flex gap-2">
            <input
                placeholder="First Name"
                className="rounded-md border-2 p-2 sm:w-[135px]"
                type="text"
                name=""
                id=""
                value={emergencySame ? mainPass?.firstName : emergency?.firstName}
                onChange={handleEmergency}
            />
            <input
                placeholder="Last Name"
                className="rounded-md border-2 p-2 sm:w-[135px]"
                type="text"
                name=""
                id=""
                value={emergencySame ? mainPass?.lastName : emergency?.lastName}
                onChange={handleEmergency}
            />
            </div>
            <div className="flex gap-2">
            <input
                placeholder="Email Address"
                className="rounded-md border-2 p-2 sm:w-[135px]"
                type="text"
                name=""
                id=""
                value={emergencySame ? mainPass?.email : emergency?.email}
                onChange={handleEmergency}
            />
            <input
                placeholder="Mobile Numbers"
                className="rounded-md border-2 p-2 sm:w-[135px]"
                type="number"
                name="emergency-mobile"
                id=""
                value={emergencySame ? mainPass?.mobile : emergency?.mobile}
                onChange={handleEmergency}
            />
            </div>
        </div>
        </div>
        </form>
    </div>
  )
}

export default PassengerInfoForm1