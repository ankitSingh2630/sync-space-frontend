
'use client'
import React, { useState } from 'react';
import { Select, SelectItem, Avatar } from "@nextui-org/react";

export const users = [
  {
    id: 1,
    name: "Gravity Form",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "/gravityform.png",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Web hook",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "/webhook.png",
    email: "tony.reichert@example.com",
  },
  {
    id: 3,
    name: "Zoho CRM",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "/zoho-logo.png",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "Gmail",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "/gmail.png",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Google Sheets",
    role: "S. Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "/sheets.jpg",
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "Live Chat",
    role: "S. Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "/livechat.png",
    email: "kristen.cooper@example.com",
  }
];

const MultiStepForm = () => {
  // const [step, setStep] = useState(1);
  const [dynamicFields, setDynamicFields] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    credentials: '',
    dynamicFields:'',
    nameofspace:'',

  });

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'destination') {
      if (value === 'odoo') {
        setDynamicFields({
          field1: 'Odoo Field 1',
          field2: 'Odoo Field 2',
          
        }
        
      );
      } else if (value === 'zoho') {
        setDynamicFields({
          field1: 'Zoho Field 1',
          field2: 'Zoho Field 2',
        });
      } else {
        setDynamicFields({});
      }
    }
  };

  const handleDynamicFieldChange = (field, value) => {
    setDynamicFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };
  
    const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData)
    
    alert(`Form Data: ${JSON.stringify(formData, null, 2)}`);
    
  };
  // 

  // const handleForm1Submit = (e) => {
  //   e.preventDefault();
  //   setStep(2);
  // };

  // const handleForm2Submit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   setStep(1);
  // };

  return (
    <div className="max-w-lg mx-auto mt-20 bg-white p-6 rounded-lg shadow-md border border-cyan-600">
      {/* {step === 1 && ( */}
        <>
          <h1 className="text-xl font-bold text-black mb-4">Create New Space</h1>
          
          <form onSubmit={handleFormSubmit}  className="space-y-5">
            {/* Source Select */}
            <div>
              <label htmlFor="source" className="block text-base font-medium text-gray-700 mt-2">
                Source <span className="text-red-500">*</span>
              </label>
              
              <Select
                className="w-full text-primary-50 rounded-small px-2 py-1 border-cyan-400 "
                classNames={{
                  label: "group-data-[filled=true]:-translate-y-5",
                  trigger: "min-h-16",
                  listboxWrapper: "max-h-[200px]",
                  input : "placeholder:text-cyan-300",
                  radius: {
                    small: "8px",
                  },

                }}
                items={users}
                value={formData.source}
                label="Source"
                listboxProps={{
                  itemClasses: {
                    base: [
                      "rounded-small"
                    ],
                  },           
                }}
                renderValue={(items) => {
                  return items.map((item) => (
                    <div key={item.key} className="flex items-center gap-2">
                      <Avatar
                        alt={item.data.name}
                        className="flex-shrink-0 "
                        size="sm"
                        src={item.data.avatar} 
                        imgProps={{
                          onLoad: (e) => e.target.style.opacity = 1,
                        }}
                      />
                      <div className="bg-cyan-100 rounded-small px-3 flex flex-col">
                        <span>{item.data.name}</span>
                        {/* <span className="text-default-500 text-tiny">({item.data.email})</span> */}
                      </div>
                    </div>
                  ));
                }}
                variant="bordered"
              >
                {(user) => (
                  <SelectItem key={user.id} textValue={user.name}>
                    <div className="flex gap-2 items-center">
                      <Avatar alt={user.name} className="flex-shrink-0 custom-avatar" size="sm" src={user.avatar} />
                      <div className="flex flex-col">
                        <span className="text-small">{user.name}</span>
                        <span className="text-tiny text-default-400">{user.email}</span>
                      </div>
                    </div>
                  </SelectItem>
                )}
              </Select>
            </div>

            {/* Destination Select */}
            <div className='mt-10'>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                Destination <span className="text-red-500">*</span>
              </label>
              <select
                id="destination"
                name="destination"
                className="w-full px-3 py-2 
                border border-gray-300 rounded-small focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
                value={formData.destination}
                onChange={handleInputChange}
              >
                <option value="">Select the destination...</option>
                <option value="odoo">Odoo</option>
                <option value="zoho">Zoho CRM</option>
              </select>
              {/* Render dynamic input fields */}
              {dynamicFields.field1 && (
                <>
                  <div className='p-3'>
                    <label htmlFor="field1" className="block text-sm font-medium text-gray-700">
                      {console.log(dynamicFields.field1)} Field 1
                    </label>
                    <input
                      type="text"
                      name="field1"
                      value={dynamicFields.field1}
                      onChange={(e) => handleDynamicFieldChange('field1', e.target.value)}
                      className="w-full px-3 py-2 rounded-small
                      border border-gray-300 focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
                    />
                  </div>
                  <div className='p-2'>
                    <label htmlFor="field2" className="block text-sm font-medium text-gray-700">
                      { console.log(dynamicFields.field2)} Field 2
                    </label>
                    <input
                      type="text"
                      name="field2"
                      value={dynamicFields.field2}
                      onChange={(e) => handleDynamicFieldChange('field2', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-small 
                      focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
                    />
                  </div>
                </>
              )}
            </div>
            {/* Other fields */}
            <div>
              <label htmlFor="credentials" className="block text-sm font-medium text-gray-700">
                Credentials <span className="text-red-500">*</span>
              </label>
              <select
                id="credentials"
                name="credentials"
                className="w-full px-3 py-2 border border-gray-300 rounded-small focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
                value={formData.credentials}
                onChange={handleInputChange}
                
              >
                <option value="" disabled>Select Your Key</option>
                <option value="existingkey">Existing Key</option>
                <option value="newkey">Create new Key</option>
              </select>
            </div>
            <div>
              <label htmlFor="nameofspace" className="block text-sm font-medium text-gray-700">
                Name of Space <span className="text-red-500">*</span>
              </label>
              <input
                id="nameofspace"
                name="nameofspace"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-small focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
                value={formData.nameofspace}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-cyan-500 text-white rounded-small focus:outline-none focus:ring-2 focus:ring-cyan-600"
                // onClick={() => setStep(1)}
              >
                Continue
              </button>
            </div>
          </form>
        </>
      {/* )} */}

      {/* {step === 2 && (
        <>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Change Functionalities</h2>
          <form onSubmit={handleForm2Submit} className="space-y-4 w-full">
            <div>
              <label htmlFor="newApp" className="block text-sm font-medium text-gray-700">
                New App <span className="text-red-500">*</span>
              </label>
              <input
                id="newApp"
                name="newApp"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
                value={formData.newApp}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="trigger" className="block text-sm font-medium text-gray-700">
                Trigger <span className="text-red-500">*</span>
              </label>
              <input
                id="trigger"
                name="trigger"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
                value={formData.trigger}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-cyan-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
              >
                Submit
              </button>
            </div>
            <div>
              <button
                type="button"
                className="w-full px-4 py-2 bg-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                onClick={() => setStep(1)}
              >
                Back
              </button>
            </div>
          </form>
        </>
      )} */}
    </div>
  );
};

export default MultiStepForm;




// 'use client'
// import React, { useState } from 'react';
// import {Select, SelectItem, Avatar} from "@nextui-org/react"

// export const users = [
//   {
//     id: 1,
//     name: "Gravity Form",
//     role: "CEO",
//     team: "Management",
//     status: "active",
//     age: "29",
//     avatar: "",
//     email: "tony.reichert@example.com",
//   },
//   {
//     id: 2,
//     name: "Web hook",
//     role: "Tech Lead",
//     team: "Development",
//     status: "paused",
//     age: "25",
//     avatar: "",
//   },
//   {
//     id: 3,
//     name: "Zoho CRM",
//     role: "Sr. Dev",
//     team: "Development",
//     status: "active",
//     age: "22",
//     avatar: "",
//     email: "jane.fisher@example.com",
//   },
//   {
//     id: 4,
//     name: "Live Chat",
//     role: "C.M.",
//     team: "Marketing",
//     status: "vacation",
//     age: "28",
//     avatar: "",
//     email: "william.howard@example.com",
//   },
//   {
//     id: 5,
//     name: "Google Sheets",
//     role: "S. Manager",
//     team: "Sales",
//     status: "active",
//     age: "24",
//     avatar: "",
//     email: "kristen.cooper@example.com",
//   },
//   // {
//   //   id: 1,
//   //   name: "Tony Reichert",
//   //   role: "CEO",
//   //   team: "Management",
//   //   status: "active",
//   //   age: "29",
//   //   avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
//   //   email: "tony.reichert@example.com",
//   // },

// ];

// const MultiStepForm = () => {

//   const [step, setStep] = useState(1);
//   const [dynamicFields, setDynamicFields] = useState({});
//   const [modalOpen, setModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     source: '',
//     destination: '',
//     credentials: '',
//     account: '',
//     module: 'Leads',
//     layout: 'Standard',
//     trigger: '',
//     newApp: '',
//     app: '',
//     url:'',
//     database:'',
//     user:'',
//     password:'',
//   });

//   const toggleModal = () => {
//     setModalOpen(!modalOpen);
    
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (name === 'destination') {
//       if (value === 'odoo' || value === 'odoo') {
//         setDynamicFields({
//           field1: '',
//           field2: '',
//         });
//       } else {
//         setDynamicFields({});
//       }
//     }

  
//     // if (name === 'credentials' && value === 'newkey') {
//     //   toggleModal();
//     // }
//   };
//   };

//   const handleDynamicFieldChange = (field, value) => {
//     setDynamicFields((prevFields) => ({
//       ...prevFields,
//       [field]: value,
//     }));
//   };


//   const handleForm1Submit = (e) => {
//     e.preventDefault();
//     setStep(2);
//   };

//   const handleForm2Submit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setStep(1);
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-24 bg-white p-6 rounded-lg shadow-md border border-cyan-600">
//       {step === 1 && (
//         <>
//           <h1 className="text-xl font-bold text-cyan-500 mb-4">Create New Space</h1>
//           <form onSubmit={handleForm1Submit} className="space-y-4">
//             <div>
//               {/* <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">
//                 Source <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="source"
//                 name="source"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 value={formData.source}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled>Select the source...</option>
//                 <option value="gravityform">Gravity Form</option>
//                 <option value="myoperator">My Operator</option>
//                 <option value="livechat">Live Chat</option>
//                 <option value="googleads">Google Ads</option>
//                 <option value="facebookleads">Facebook Leads</option>
//                 <option value="twakto">Tawk To</option>
//               </select>
//               //*/}
              
//               <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">
//                 Source <span className="text-red-500">*</span>
//               </label>
 

//               <Select
//                 className="max-w-xl"
//                 classNames={{
//                   label: "group-data-[filled=true]:-translate-y-5",
//                   trigger: "min-h-16",
//                   listboxWrapper: "max-h-[400px]",
//                 }}
//                 items={users}
//                 label="Source"
//                 listboxProps={{
//                   itemClasses: {
//                     base: [
//                       "rounded-md", 
//                     ],
//                   },           
//                 }}

//                 // popoverProps={{
//                 //   classNames: {
//                 //     base: "before:bg-default-200",
//                 //     content: "p-0 border-small border-divider bg-white",
//                 //   },
//                 // }}

//                 renderValue={(items) => {
//                   return items.map((item) => (
//                     <div key={item.key} className="flex items-center gap-2">
//                       <Avatar
//                         alt={item.data.name}
//                         className="flex-shrink-0 "
//                         size="sm"
//                         src={item.data.avatar} 
//                         imgProps={{
//                           onLoad: (e) => e.target.style.opacity = 1,
//                         }}
//                       />
//                       <div className="flex flex-col">
//                         <span>{item.data.name}</span>
//                         {/* <span className="text-default-500 text-tiny">({item.data.email})</span> */}
//                       </div>
//                     </div>
//                   ));
//                 }}
//                 variant="bordered"
//               >
//                 {(user) => (
//                   <SelectItem key={user.id} textValue={user.name}>
//                     <div className="flex gap-2 items-center">
//                       <Avatar alt={user.name} className="flex-shrink-0 custom-avatar" size="sm" src={user.avatar} />
//                       <div className="flex flex-col">
//                         <span className="text-small">{user.name}</span>
//                         <span className="text-tiny text-default-400">{user.email}</span>
//                       </div>
//                     </div>
//                   </SelectItem>
//                 )}
//               </Select>
            
//             </div> 
             

             
//             {/* <div>
//               <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
//                 Destination <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="destination"
//                 name="destination"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 value={formData.destination}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled>Select the destination...</option>
//                 <option value="odoo">Odoo</option>
//                 <option value="zoho">Zoho CRM</option>
//               </select>
//             </div> */}

//             <div>
//               <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
//                 Destination <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="destination"
//                 name="destination"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 value={formData.destination}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled>Select the destination...</option>
//                 <option value="odoo">Odoo</option>
//                 <option value="zoho">Zoho CRM</option>
//               </select>

//               {/* Render dynamic input fields */}
//               {dynamicFields.field1 !== undefined && (
//                 <>
//                   <div className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500' >

//                     <label htmlFor="field1" className="block text-sm font-medium text-black">
//                       Field 1
//                     </label>
//                     <input
//                       type="text"
//                       name="field1"
//                       value={dynamicFields.field1}
//                       onChange={(e) => handleDynamicFieldChange('field1', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="field2" className="block text-sm font-medium text-gray-700">
//                       Field 2
//                     </label>
//                     <input
//                       type="text"
//                       name="field2"
//                       value={dynamicFields.field2}
//                       onChange={(e) => handleDynamicFieldChange('field2', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                     />
//                   </div>
//                 </>
//               )}
//             </div>
//             <div>
//               <label htmlFor="credentials" className="block text-sm font-medium text-gray-700">
//                 Credentials <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="credentials"
//                 name="credentials"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 value={formData.credentials}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled>Select Your Key</option>
//                 <option value="existingkey">Existing Key</option>
//                 <option value="newkey">Create new Key</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="nameofspace" className="block text-sm font-medium text-gray-700">
//                 Name of Space <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="nameofspace"
//                 name="account"
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 value={formData.account}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-cyan-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
//               >
//                 Continue
//               </button>
//             </div>
//           </form>
//         </>
//       )}

//       {step === 2 && (
//         <>
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Change Functionalities</h2>
//           <form onSubmit={handleForm2Submit} className="space-y-4 w-full">
//             <div>
//               <label htmlFor="newApp" className="block text-sm font-medium text-gray-700">
//                 New App <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="newApp"
//                 name="newApp"
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 value={formData.newApp}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="trigger" className="block text-sm font-medium text-gray-700">
//                 Trigger <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="trigger"
//                 name="trigger"
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 value={formData.trigger}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-cyan-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
//               >
//                 Submit
//               </button>
//             </div>
//             <div>
//               <button
//                 type="button"
//                 className="w-full px-4 py-2 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
//                 onClick={() => setStep(1)}
//               >
//                 Back
//               </button>
//             </div>
//           </form>
//         </>
//       )}

//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="w-1/3 bg-white mt-4 px-6 py-6 rounded-lg shadow-lg">
//             <h2 className="text-lg font-bold mb-4">Create New Key</h2>
//             <form className="space-y-4">
//             <div>
//                <label htmlFor="app" className="block text-md font-medium text-gray-700">
//                   Select App
//                 </label>
//               <select
//                 id="app"
//                 name="app"
//                 className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 value={formData.app}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled>Select app..</option>
//                 <option value="odoo">Odoo</option>
//                 <option value="zoho">Zoho CRM</option>
//               </select>
//               </div>

//               <div>
//                 <label htmlFor="credential" className="block text-md font-medium text-gray-700">
//                   Credential Name:
//                 </label>
//                 <input
//                   id="credential"
//                   name="credential"
//                   type="text"
//                   className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="url" className="block text-md font-medium text-gray-700">
//                   url
//                 </label>
//                 <input
//                   id="url"
//                   name="url"
//                   type="text"
//                   placeholder='Enter you domain name'
//                   className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="database" className="block text-sm font-medium text-gray-700">
//                   Databse
//                 </label>
//                 <input
//                   id="database"
//                   name="database"
//                   type="text"
//                   placeholder='Enter you domain name'
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 />

//               </div>
//               <div>
//               <label htmlFor="user" className="block text-sm font-medium text-gray-700">
//                   User
//                 </label>
//                 <input
//                   id="user"
//                   name="user"
//                   type="text"
//                   placeholder='Enter you domain name'
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 />
//             </div>
//             <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   placeholder='Enter you domain name'
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 />
//             </div>

//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-gray-300 rounded-lg"
//                   onClick={toggleModal}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-cyan-500 text-white rounded-lg"
//                 >
//                   Save Key
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//       )}
//     </div>
//   );
// };

// export default MultiStepForm



























// export default function App() {
//   return (
//     <div className='flex justify-center items-center mt-20' >
//     <Select
//       className="max-w-xs"
//       classNames={{
//         label: "group-data-[filled=true]:-translate-y-5",
//         trigger: "min-h-16",
//         listboxWrapper: "max-h-[400px]",
//       }}
//       items={users}
//       label="Assigned to"
//       listboxProps={{
//         itemClasses: {
//           base: [
//             "rounded-md",
//             "text-default-500",
//             "transition-opacity",
//             "data-[hover=true]:text-foreground",
//             "data-[hover=true]:bg-default-100",
//             "dark:data-[hover=true]:bg-default-50",
//             "data-[selectable=true]:focus:bg-default-50",
//             "data-[pressed=true]:opacity-70",
//             "data-[focus-visible=true]:ring-default-500",
//           ],
//         },
//       }}
//       popoverProps={{
//         classNames: {
//           base: "before:bg-default-200",
//           content: "p-0 border-small border-divider bg-background",
//         },
//       }}
//       renderValue={(items) => {
//         return items.map((item) => (
//           <div key={item.key} className="flex items-center gap-2">
//             <Avatar
//               alt={item.data.name}
//               className="flex-shrink-0"
//               size="sm"
//               src={item.data.avatar}
//             />
//             <div className="flex flex-col">
//               <span>{item.data.name}</span>
//               <span className="text-default-500 text-tiny">({item.data.email})</span>
//             </div>
//           </div>
//         ));
//       }}
//       variant="bordered"
//     >
//       {(user) => (
//         <SelectItem key={user.id} textValue={user.name}>
//           <div className="flex gap-2 items-center">
//             <Avatar alt={user.name} className="flex-shrink-0" size="sm" src={user.avatar} />
//             <div className="flex flex-col">
//               <span className="text-small">{user.name}</span>
//               <span className="text-tiny text-default-400">{user.email}</span>
//             </div>
//           </div>
//         </SelectItem>
//       )}
//     </Select>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------

// const MultiStepForm = () => {
//   const [step, setStep] = useState(1);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     source: '',
//     destination: '',
//     credentials: '',
//     account: '',
//     module: 'Leads',
//     layout: 'Standard',
//     trigger: '',
//     newApp: '',
//     app: '',
//     url:'',
//     database:'',
//     user:'',
//     password:'',
//   });

//   const toggleModal = () => {
//     setModalOpen(!modalOpen);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (name === 'credentials' && value === 'newkey') {
//       toggleModal();
//     }
//   };

//   const handleForm1Submit = (e) => {
//     e.preventDefault();
//     setStep(2);
//   };

//   const handleForm2Submit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setStep(1);
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-24 bg-white p-6 rounded-lg shadow-md border border-cyan-600">
//       {step === 1 && (
//         <>
//           <h1 className="text-xl font-bold text-cyan-500 mb-4">Create New Space</h1>
//           <form onSubmit={handleForm1Submit} className="space-y-4">
//             <div>
//               <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">
//                 Source <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="source"
//                 name="source"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 value={formData.source}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled>Select the source...</option>
//                 <option value="gravityform">Gravity Form</option>
//                 <option value="myoperator">My Operator</option>
//                 <option value="livechat">Live Chat</option>
//                 <option value="googleads">Google Ads</option>
//                 <option value="facebookleads">Facebook Leads</option>
//                 <option value="twakto">Tawk To</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
//                 Destination <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="destination"
//                 name="destination"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 value={formData.destination}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled>Select the destination...</option>
//                 <option value="odoo">Odoo</option>
//                 <option value="zoho">Zoho CRM</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="credentials" className="block text-sm font-medium text-gray-700">
//                 Credentials <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="credentials"
//                 name="credentials"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 value={formData.credentials}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled>Select Your Key</option>
//                 <option value="existingkey">Existing Key</option>
//                 <option value="newkey">Create new Key</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="nameofspace" className="block text-sm font-medium text-gray-700">
//                 Name of Space <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="nameofspace"
//                 name="account"
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 value={formData.account}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-cyan-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
//               >
//                 Continue
//               </button>
//             </div>
//           </form>
//         </>
//       )}

//       {step === 2 && (
//         <>
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Change Functionalities</h2>
//           <form onSubmit={handleForm2Submit} className="space-y-4 w-full">
//             <div>
//               <label htmlFor="newApp" className="block text-sm font-medium text-gray-700">
//                 New App <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="newApp"
//                 name="newApp"
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 value={formData.newApp}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="trigger" className="block text-sm font-medium text-gray-700">
//                 Trigger <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="trigger"
//                 name="trigger"
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 value={formData.trigger}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-cyan-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
//               >
//                 Submit
//               </button>
//             </div>
//             <div>
//               <button
//                 type="button"
//                 className="w-full px-4 py-2 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
//                 onClick={() => setStep(1)}
//               >
//                 Back
//               </button>
//             </div>
//           </form>
//         </>
//       )}

//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="w-1/3 bg-white mt-4 px-6 py-6 rounded-lg shadow-lg">
//             <h2 className="text-lg font-bold mb-4">Create New Key</h2>
//             <form className="space-y-4">
//             <div>
//                <label htmlFor="app" className="block text-md font-medium text-gray-700">
//                   Select App
//                 </label>
//               <select
//                 id="app"
//                 name="app"
//                 className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 value={formData.app}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled>Select app..</option>
//                 <option value="odoo">Odoo</option>
//                 <option value="zoho">Zoho CRM</option>
//               </select>
//               </div>

//               <div>
//                 <label htmlFor="credential" className="block text-md font-medium text-gray-700">
//                   Credential Name:
//                 </label>
//                 <input
//                   id="credential"
//                   name="credential"
//                   type="text"
//                   className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="url" className="block text-md font-medium text-gray-700">
//                   url
//                 </label>
//                 <input
//                   id="url"
//                   name="url"
//                   type="text"
//                   placeholder='Enter you domain name'
//                   className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="database" className="block text-sm font-medium text-gray-700">
//                   Databse
//                 </label>
//                 <input
//                   id="database"
//                   name="database"
//                   type="text"
//                   placeholder='Enter you domain name'
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 />

//               </div>
//               <div>
//               <label htmlFor="user" className="block text-sm font-medium text-gray-700">
//                   User
//                 </label>
//                 <input
//                   id="user"
//                   name="user"
//                   type="text"
//                   placeholder='Enter you domain name'
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 />
//             </div>
//             <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   placeholder='Enter you domain name'
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500"
//                 />
//             </div>

//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-gray-300 rounded-lg"
//                   onClick={toggleModal}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-cyan-500 text-white rounded-lg"
//                 >
//                   Save Key
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MultiStepForm;


















// 'use client';
// import React, { useState } from 'react';

// export default function MultiStepForm() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selected, setSelected] = useState("london");
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     source: '',
//     destination: '',
//     credentials: '',
//     account: '',
//     module: 'Leads',
//     layout: 'Standard',
//     trigger: '',
//   });

//   const toggleModal = () => {
//     setModalOpen(!modalOpen);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     // Automatically open modal if "Create new Key" is selected
//     if (name === 'credentials' && value === 'newkey') {
//       toggleModal();
//     }
//   };

//   const handleForm1Submit = (e) => {
//     e.preventDefault();
//     setStep(2);
//   };

//   const handleForm2Submit = (e) => {
//     e.preventDefault();
//     alert(`Form Data: ${JSON.stringify(formData, null, 2)}`);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md border border-cyan-600">
//       {step === 1 && (
//         <>
//           <div className="mt-3 mb-4">
//             <h1 className="text-xl font-bold text-cyan-500 mb-4">Create New Space</h1>
//           </div>

//           <form onSubmit={handleForm1Submit} className="space-y-4">
//             <div className="relative">
//               <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">
//                 Source <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="source"
//                 name="source"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500 text-gray-800 text-sm"
//                 value={formData.source}
//                 onChange={handleInputChange}
//               >
//                 <option className="text-gray-400 text-sm" value="" disabled>Select the source...</option>
//                 <option value="gravityform">Gravity Form</option>
//                 <option value="myoperator">Myoperator</option>
//                 <option value="livechat">Live Chat</option>
//                 <option value="googleads">Google Ads</option>
//                 <option value="facebookleads">Facebook Leads</option>
//                 <option value="twakto">Tawk To</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
//                 Destination <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="destination"
//                 name="destination"
//                 className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-gray-800 text-sm"
//                 value={formData.destination}
//                 onChange={handleInputChange}
//               >
//                 <option className="text-gray-400 text-sm" value="" disabled>Select the Destination</option>
//                 <option value="odoo">Odoo</option>
//                 <option value="zoho">Zoho CRM</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="credentials" className="block text-sm font-medium text-gray-700">
//                 Credentials <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="credentials"
//                 name="credentials"
//                 className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-gray-800 text-sm"
//                 value={formData.credentials}
//                 onChange={handleInputChange}
//               >
//                 <option className="text-gray-400 text-sm" value="" disabled>Select Your Key</option>
//                 <option value="existingkey">Existing Key</option>
//                 <option value="newkey">Create new Key</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="nameofspace" className="block text-sm font-medium text-gray-700">
//                 Name of Space <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="nameofspace"
//                 name="nameofspace"
//                 type="text"
//                 className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-black"
//                 value={formData.account}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-cyan-500 hover:text-cyan-500 text-white rounded-md shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-1"
//               >
//                 Continue
//               </button>
//             </div>
//           </form>
//         </>
//       )}

//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
//             <h2 className="text-lg font-bold mb-4">Create New Key</h2>
//             <form className="space-y-4">
//               <div>
//                 <label htmlFor="newKey" className="block text-sm font-medium text-gray-700">
//                   Key Name
//                 </label>
//                 <input
//                   id="newKey"
//                   name="newKey"
//                   type="text"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-gray-300 rounded-md"
//                   onClick={toggleModal}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-cyan-500 text-white rounded-md"
//                 >
//                   Save Key
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




// 'use client';
// import React, { useState } from 'react';

// export default function MultiStepForm() {
//   const [modalOpen, setModalOpen] = useState(false);

//   const toggleModal = () => {
//     setModalOpen(!modalOpen);
//   };
//   const [selected, setSelected] = useState("london");
//   const [step, setStep] = useState(1);
//   const [showNewForm, setShowNewForm] = useState(false);
//   const [formData, setFormData] = useState({

//     source: '',
//     destination: '',
//     account: '',
//     module: 'Leads',
//     layout: 'Standard',
//     trigger: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleForm1Submit = (e) => {
//     e.preventDefault();
//     setStep(2);
//   };

//   const handleForm2Submit = (e) => {
//     e.preventDefault();
//     alert(`Form Data: ${JSON.stringify(formData, null, 2)}`);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md border border-cyan-600">
//       {!showNewForm ? (
//         <>
//           {step === 1 && (
//             <>
//               <div className='mt-3 mb-4'>
//                 <h1 className="text-xl font-bold text-cyan-500 mb-4">Create New Space</h1>
//               </div>

//               <form onSubmit={handleForm1Submit} className="space-y-4">
//                 <div className="relative">
//                   <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">
//                     Source <span className="text-red-500">*</span>
//                   </label>

//                   <div className="flex items-center">
//                     <select
//                       id="source"
//                       name="source"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500 text-gray-800 text-sm"
//                       value={formData.source}
//                       onChange={handleInputChange}
//                     >
//                       <option className='text-gray-400 text-sm' value="" disabled>Select the source...</option>
//                       <option value="gravityform">Gravity Form</option>
//                       <option value="myoperator">Myoperator</option>
//                       <option value="livechat">Live Chat</option>
//                       <option value="googleads">Google Ads</option>
//                       <option value="facebookleads">Facebook Leads</option>
//                       <option value="twakto">Tawk To</option>
//                     </select>
//                     {/* <button
//                       className="ml-2 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-xl"
//                       type="button"
//                       onClick={() => setShowNewForm(true)}
//                     >
//                       Change
//                     </button> */}
//                   </div>
//                 </div>
//                 {/* Additional Fields */}
//                 <div>
//                   <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
//                     Destination <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     id="destination"
//                     name="destination"
//                     placeholder="Select the source"
//                     className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-gray-800 text-sm"
//                     value={formData.destination}
//                     onChange={handleInputChange}
//                   >
//                     <option className='text-gray-400 text-sm' value="" disabled>Select the Destination</option>
//                     <option className='text-black' value="odoo">Odoo</option>
//                     <option value="zoho">Zoho CRM</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label htmlFor="credentials" className="block text-sm font-medium text-gray-700">
//                     Credentials <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     id="credentials"
//                     name="credentials"
//                     placeholder="Select the source"
//                     className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-gray-800 text-sm"
//                     value={formData.destination}
//                     onChange={handleInputChange}
//                   >
//                     <option className='text-gray-400 text-sm' value="" disabled>Select Your Key</option>
//                     <option className='text-black' value="newkey">Create new Key</option>
                  
//                   </select>
//                 </div>
//                 <div>
      
//                    {/* Modal toggle */}
//                   <button
//                     onClick={toggleModal}
//                     className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none              focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     type="button"
//                   >
//                     Toggle modal
//                   </button>

//                 {/* Main modal */}
//                 {modalOpen && (
//                   <div
//                     id="authentication-modal"
//                     tabIndex="-1"
//                     aria-hidden="true"
//                     className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex           justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
//                   >
//                   <div className="relative p-4 w-full max-w-md max-h-full">
//                     {/* Modal content */}
//                     <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                       {/* Modal header */}
//                       <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t          dark:border-gray-600">
//                         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                           Sign in to our platform
//                         </h3>
//                         <button
//                           type="button"
//                           onClick={toggleModal}
//                           className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900          rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center         dark:hover:bg-gray-600 dark:hover:text-white"
//                          >
//                           <svg
//                              className="w-3 h-3"
//                              aria-hidden="true"
//                              xmlns="http://www.w3.org/2000/svg"
//                              fill="none"
//                              viewBox="0 0 14 14"
//                           >
//                           <path
//                              stroke="currentColor"
//                              strokeLinecap="round"
//                              strokeLinejoin="round"
//                              strokeWidth="2"
//                               d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                             />
//                           </svg>
//                          <span className="sr-only">Close modal</span>
//                        </button>
//                       </div>
//                             {/* Modal body */}
//                   <div className="p-4 md:p-5">
//                       <form className="space-y-4" action="#">
//                   <div>
//                       <label
//                       htmlFor="email"
//                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                     >
//                        Your email
//                       </label>
//                       <input
//                           type="email"
//                           name="email"
//                           id="email"
//                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500     dark:placeholder-gray-400 dark:text-white"
//                           placeholder="name@company.com"
//                           required
//                     />
//                       </div>
//                     <div>
//                       <label
//                           htmlFor="password"
//                             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                        >
//                                        Your password
//                                     </label>
//                                     <input
//                                       type="password"
//                                        name="password"
//                                       id="password"
//                                       placeholder="••••••••"
//                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600                  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                                       required
//                                     />
//                                    </div>
//                                    <div className="flex justify-between">
//                                      <div className="flex items-start">
//                                        <div className="flex items-center h-5">
//                                          <input
//                                            id="remember"
//                                            type="checkbox"
//                                            value=""
//                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3                  focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500                  dark:focus:ring-blue-600 dark:ring-offset-gray-800                  dark:focus:ring-offset-gray-800"
//                                            required
//                                          />
//                                        </div>
//                                        <label
//                                          htmlFor="remember"
//                                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                                        >
//                                          Remember me
//                                        </label>
//                                      </div>
//                                      <a
//                                        href="#"
//                                        className="text-sm text-blue-700 hover:underline dark:text-blue-500"
//                                      >
//                                        Lost Password?
//                                      </a>
//                                    </div>
//                                    <button
//                                      type="submit"
//                                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4                  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.                 5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                                    >
//                                      Login to your account
//                                    </button>
//                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
//                                      Not registered?{" "}
//                                      <a
//                                        href="#"
//                                        className="text-blue-700 hover:underline dark:text-blue-500"
//                                      >
//                                        Create account
//                                      </a>
//                                    </div>
//                                   </form>
//                                  </div>
//                               </div>
//                           </div> 
//                         </div>
//                          )}
//                          </div>
  
//                 <div>
//                   <label htmlFor="nameofspace" className="block text-sm font-medium text-gray-700">
//                     Name of Space <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     id="nameofspace"
//                     name="nameofspace"
//                     type="text"
                    
//                     className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-black"
                    
//                     value={formData.account}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <div>
//                   <button
//                     type="submit"
//                     className="w-full px-4 py-2 bg-cyan-500 hover:text-cyan-500 text-white rounded-md shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-1"
//                   >
//                     Continue
//                   </button>
//                 </div>
//               </form>
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Create Module Entry</h2>
//               <form onSubmit={handleForm2Submit} className="space-y-4">
//                 {/* Module Dropdown */}
//                 <div>
//                   <label className="block font-medium mb-2">Module</label>
//                   <select
//                     name="module"
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={formData.module}
//                     onChange={handleInputChange}
//                   >
//                     <option value="Leads">Leads</option>
//                     <option value="Contacts">Contacts</option>
//                     <option value="Accounts">Accounts</option>
//                     <option value="Deals">Deals</option>
//                     <option value="Tasks">Tasks</option>
//                   </select>
//                 </div>

//                 <div className="flex flex-col gap-3">
//                   <p className="text-default-500 text-small">Selected: {selected}</p>
//                 </div>

//                 <div>
//                   <label className="block font-medium mb-2">Layout</label>
//                   <select
//                     name="layout"
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={formData.layout}
//                     onChange={handleInputChange}
//                   >
//                     <option value="Standard">Standard</option>
//                     <option value="Custom">Custom</option>
//                   </select>
//                 </div>

//                 <div className="mb-4 flex items-center">
//                   <input
//                     type="text"
//                     name="trigger"
//                     placeholder="Enter trigger"
//                     className="w-full border rounded-lg px-3 py-2 mr-2"
//                     value={formData.trigger}
//                     onChange={handleInputChange}
//                   />
//                   <button
//                     type="button"
//                     className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-2 rounded-lg"
//                     onClick={() => setFormData((prev) => ({ ...prev, trigger: '' }))}
//                   >
//                     Clear
//                   </button>
//                 </div>

//                 <div>
//                   <button
//                     type="submit"
//                     className="bg-cyan-500 hover:text-cyan-500 text-white px-4 py-2 rounded-lg w-full"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </>
//           )}
//         </>
//       ) : (
//         // new form
//         <div>
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Change Functionalities </h2>
//           <form className="space-y-4">
//             <div>
//               <label htmlFor="newApp" className="block text-sm font-medium text-gray-700">
//                 New App <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="newApp"
//                 name="newApp"
//                 type="text"
//                 className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
//                 placeholder="Enter app name"
//               />
//             </div>

//             <div>
//               <label htmlFor="credentials" className="block text-sm font-medium text-gray-700">
//                 Credentials <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="credentials"
//                 name="credentials"
//                 type="text"
//                 className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
//                 placeholder="Enter credentials"
//               />
//             </div>

//             <div>
//               <button
//                 type="button"
//                 className="w-full px-4 py-2 bg-cyan-500 hover:text-cyan-500 text-white rounded-md shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-1"
//                 onClick={() => setShowNewForm(false)}
//               >
//                 Back
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// ---------------------------------------------------------------------------------------------------------------------------
// the copy of code

// 'use client';
// import React, { useState } from 'react';

// export default function MultiStepForm() {
//   const [selected, setSelected] = useState("london");
//   const [step, setStep] = useState(1);
//   const [showNewForm, setShowNewForm] = useState(false);
//   const [formData, setFormData] = useState({

//     source: '',
//     destination: '',
//     account: '',
//     module: 'Leads',
//     layout: 'Standard',
//     trigger: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleForm1Submit = (e) => {
//     e.preventDefault();
//     setStep(2);
//   };

//   const handleForm2Submit = (e) => {
//     e.preventDefault();
//     alert(`Form Data: ${JSON.stringify(formData, null, 2)}`);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md border border-cyan-600">
//       {!showNewForm ? (
//         <>
//           {step === 1 && (
//             <>
//               <div className='mt-3 mb-4'>
//                 <h1 className="text-xl font-bold text-cyan-500 mb-4">Create New Space</h1>
//               </div>

//               <form onSubmit={handleForm1Submit} className="space-y-4">
//                 <div className="relative">
//                   <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">
//                     Source <span className="text-red-500">*</span>
//                   </label>

//                   <div className="flex items-center">
//                     <select
//                       id="source"
//                       name="source"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500 text-gray-800 text-sm"
//                       value={formData.source}
//                       onChange={handleInputChange}
//                     >
//                       <option className='text-gray-400 text-sm' value="" disabled>Select the source...</option>
//                       <option value="gravityform">Gravity Form</option>
//                       <option value="myoperator">Myoperator</option>
//                       <option value="livechat">Live Chat</option>
//                       <option value="googleads">Google Ads</option>
//                       <option value="facebookleads">Facebook Leads</option>
//                       <option value="twakto">Tawk To</option>
//                     </select>
//                     {/* <button
//                       className="ml-2 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-xl"
//                       type="button"
//                       onClick={() => setShowNewForm(true)}
//                     >
//                       Change
//                     </button> */}
//                   </div>
//                 </div>
//                 {/* Additional Fields */}
//                 <div>
//                   <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
//                     Destination <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     id="destination"
//                     name="destination"
//                     placeholder="Select the source"
//                     className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-gray-800 text-sm"
//                     value={formData.destination}
//                     onChange={handleInputChange}
//                   >
//                     <option className='text-gray-400 text-sm' value="" disabled>Select the Destination</option>
//                     <option className='text-black' value="odoo">Odoo</option>
//                     <option value="zoho">Zoho CRM</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label htmlFor="credentials" className="block text-sm font-medium text-gray-700">
//                     Credentials <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     id="credentials"
//                     name="credentials"
//                     placeholder="Select the source"
//                     className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-gray-800 text-sm"
//                     value={formData.destination}
//                     onChange={handleInputChange}
//                   >
//                     <option className='text-gray-400 text-sm' value="" disabled>Select Your Key</option>
//                     <option className='text-black' value="newkey">Create new Key</option>
                  
//                   </select>
//                 </div>

//                 <div>
//                   <label htmlFor="nameofspace" className="block text-sm font-medium text-gray-700">
//                     Name of Space <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     id="nameofspace"
//                     name="nameofspace"
//                     type="text"
                    
//                     className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-black"
                    
//                     value={formData.account}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <div>
//                   <button
//                     type="submit"
//                     className="w-full px-4 py-2 bg-cyan-500 hover:text-cyan-500 text-white rounded-md shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-1"
//                   >
//                     Continue
//                   </button>
//                 </div>
//               </form>
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Create Module Entry</h2>
//               <form onSubmit={handleForm2Submit} className="space-y-4">
//                 {/* Module Dropdown */}
//                 <div>
//                   <label className="block font-medium mb-2">Module</label>
//                   <select
//                     name="module"
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={formData.module}
//                     onChange={handleInputChange}
//                   >
//                     <option value="Leads">Leads</option>
//                     <option value="Contacts">Contacts</option>
//                     <option value="Accounts">Accounts</option>
//                     <option value="Deals">Deals</option>
//                     <option value="Tasks">Tasks</option>
//                   </select>
//                 </div>

//                 <div className="flex flex-col gap-3">
//                   <p className="text-default-500 text-small">Selected: {selected}</p>
//                 </div>

//                 <div>
//                   <label className="block font-medium mb-2">Layout</label>
//                   <select
//                     name="layout"
//                     className="w-full border rounded-lg px-3 py-2"
//                     value={formData.layout}
//                     onChange={handleInputChange}
//                   >
//                     <option value="Standard">Standard</option>
//                     <option value="Custom">Custom</option>
//                   </select>
//                 </div>

//                 <div className="mb-4 flex items-center">
//                   <input
//                     type="text"
//                     name="trigger"
//                     placeholder="Enter trigger"
//                     className="w-full border rounded-lg px-3 py-2 mr-2"
//                     value={formData.trigger}
//                     onChange={handleInputChange}
//                   />
//                   <button
//                     type="button"
//                     className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-2 rounded-lg"
//                     onClick={() => setFormData((prev) => ({ ...prev, trigger: '' }))}
//                   >
//                     Clear
//                   </button>
//                 </div>

//                 <div>
//                   <button
//                     type="submit"
//                     className="bg-cyan-500 hover:text-cyan-500 text-white px-4 py-2 rounded-lg w-full"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </>
//           )}
//         </>
//       ) : (
//         // new form
//         <div>
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Change Functionalities </h2>
//           <form className="space-y-4">
//             <div>
//               <label htmlFor="newApp" className="block text-sm font-medium text-gray-700">
//                 New App <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="newApp"
//                 name="newApp"
//                 type="text"
//                 className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
//                 placeholder="Enter app name"
//               />
//             </div>

//             <div>
//               <label htmlFor="credentials" className="block text-sm font-medium text-gray-700">
//                 Credentials <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="credentials"
//                 name="credentials"
//                 type="text"
//                 className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
//                 placeholder="Enter credentials"
//               />
//             </div>

//             <div>
//               <button
//                 type="button"
//                 className="w-full px-4 py-2 bg-cyan-500 hover:text-cyan-500 text-white rounded-md shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-1"
//                 onClick={() => setShowNewForm(false)}
//               >
//                 Back
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }





// --------------------------------------------------------------------------------------------------

// 'use client';

// import React, { useState } from 'react';
// import {RadioGroup, Radio} from "@nextui-org/radio";

// export default function MultiStepForm() {
//   const [selected, setSelected] = React.useState("london");

//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     app: '',
//     actionEvent: '',
//     account: '',
//     module: 'Leads',
//     layout: 'Standard',
//     trigger: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleForm1Submit = (e) => {
//     e.preventDefault();
//     // Proceed to the next step
//     setStep(2);
//   };

//   const handleForm2Submit = (e) => {
//     e.preventDefault();
//     alert(`Form Data: ${JSON.stringify(formData, null, 2)}`);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md border border-cyan-600">
//       {step === 1 && (
//         <>
//         <div className='mt-3 mb-4'>
//         <h1 className="text-xl font-bold text-cyan-500 mb-4 ">Create Module Entry in Zoho CRM</h1>
//         </div>
//           <form onSubmit={handleForm1Submit} className="space-y-4">
//             {/* App Field */}

//             <div className="relative">
//             <label htmlFor="app" className="block text-sm font-medium text-gray-700 mb-2">
//               App <span className="text-red-500">*</span>
//             </label>
//             <div className="flex items-center">
//             <select
//             id="app"
//             name="app"
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500 text-gray-400 text-sm "
//             value={formData.app}
//             onChange={handleInputChange}
//             >
//           <option className='text-gray-400 text-sm' value="" disabled>Select App</option>
//           <option value="Zoho CRM">Zoho CRM</option>
//           <option value="Slack">Slack</option>
//           <option value="Gmail">Gmail</option>
//           <option value="Google Sheets">Google Sheets</option>
//           <option value="Webhook">Webhooks</option>
//           </select>
//           <button
//             className="ml-2 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-xl"
//             onClick={() => alert('Button Clicked')}
//           >
//           Change
//          </button>
//        </div>
//       </div>
//       {/* Action Event Field */}
//             <div>
//               <label htmlFor="actionEvent" className="block text-sm font-medium text-gray-700 ">
//                 Action Event <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="actionEvent"
//                 name="actionEvent"
//                 className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-gray-400 text-sm"
//                 value={formData.actionEvent}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled>Select Action Event</option>
//                 <option className='text-black' value="Create Module Entry">Create Module Entry</option>
//                 <option value="Update Module Entry">Update Module Entry</option>
//               </select>
//             </div>

//             {/* Account Field */}
//             <div>
//               <label htmlFor="account" className="block text-sm font-medium text-gray-700">
//                 Account <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="account"
//                 name="account"
//                 type="text"
//                 className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
//                 placeholder="Enter your account email"
//                 value={formData.account}
//                 onChange={handleInputChange}
//               />
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-cyan-500 hover:text-cyan-500 text-white rounded-md shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-1"
//               >
//                 Continue
//               </button>
//             </div>
//           </form>
//         </>
//       )}

//       {step === 2 && (
//         <>
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Create Module Entry</h2>
//           <form onSubmit={handleForm2Submit} className="space-y-4">
//             {/* Module Dropdown */}
//             <div>
//               <label className="block font-medium mb-2">Module</label>
//               <select
//                 name="module"
//                 className="w-full border rounded-lg px-3 py-2"
//                 value={formData.module}
//                 onChange={handleInputChange}
//               >
//                 <option value="Leads">Leads</option>
//                 <option value="Contacts">Contacts</option>
//                 <option value="Accounts">Accounts</option>
//                 <option value="Deals">Deals</option>
//                 <option value="Tasks">Tasks</option>
//               </select>
//             </div>

//             <div className="flex flex-col gap-3">
//                <RadioGroup label="Select your favorite city" value={selected} onValueChange={setSelected}>
//                 <Radio value="buenos-aires">Buenos Aires</Radio>
//                 <Radio value="sydney">Sydney</Radio>
//                 <Radio value="san-francisco">San Francisco</Radio>
//                 <Radio value="london">London</Radio>
//                 <Radio value="tokyo">Tokyo</Radio>
//               </RadioGroup>
//               <p className="text-default-500 text-small">Selected: {selected}</p>
//             </div>

//             {/* Layout Dropdown */}
//             <div>
//               <label className="block font-medium mb-2">Layout</label>
//               <select
//                 name="layout"
//                 className="w-full border rounded-lg px-3 py-2"
//                 value={formData.layout}
//                 onChange={handleInputChange}
//               >
//                 <option value="Standard">Standard</option>
//                 <option value="Custom">Custom</option>
//               </select>
//             </div>

//             {/* Trigger Input Field with Clear Button */}
//             <div className="mb-4 flex items-center">
//               <input
//                 type="text"
//                 name="trigger"
//                 placeholder="Enter trigger"
//                 className="w-full border rounded-lg px-3 py-2 mr-2"
//                 value={formData.trigger}
//                 onChange={handleInputChange}
//               />
//               <button
//                 type="button"
//                 className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-2 rounded-lg"
//                 onClick={() => setFormData((prev) => ({ ...prev, trigger: '' }))}
//               >
//                 Clear
//               </button>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="bg-cyan-500 hover:text-cyan-500 text-white px-4 py-2 rounded-lg w-full"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </>
//       )}
//     </div>
//   );
// }














// import React from "react";
// import { Form, Input, Button, Dropdown, Checkbox, Textarea } from "@nextui-org/react";
// import {Select, SelectSection, SelectItem} from "@nextui-org/select";

// export default function App() {
//   const [step, setStep] = React.useState(1);
//   const [formData, setFormData] = React.useState({});

//   const handleNext = () => setStep((prev) => prev + 1);
//   const handlePrev = () => setStep((prev) => prev - 1);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-6">
//       <h2 className="text-xl font-bold mb-4">Create Module Entry</h2>
//       <Form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
//         {step === 1 && (
//           <>
//           <div className="mb-4">
//           <Input 
//               isRequired
//               className={"block font-medium mb-2"}
//               label="App"
//               name="app"
//               placeholder="Zoho CRM"
//               value="Zoho CRM"
//               bordered
//               fullWidth
//               disabled
//             />
//           </div>

//             <Input
//               isRequired
//               label="Action Event"
//               name="actionEvent"
//               placeholder="Create Module Entry"
//               value="Create Module Entry"
//               bordered
//               fullWidth
//               disabled
//             />
//             <Input
//               isRequired
//               label="Account"
//               name="account"
//               placeholder="Select your account"
//               bordered
//               fullWidth
//             />
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <Dropdown
//               isRequired
//               label="Module"
//               name="module"
//               placeholder="Select value for Module"
//               selection
//               onChange={(key) => setFormData((prev) => ({ ...prev, module: key }))}
//             >
//               <Dropdown.Item key="leads">Leads</Dropdown.Item>
//               <Dropdown.Item key="contacts">Contacts</Dropdown.Item>
//               <Dropdown.Item key="accounts">Accounts</Dropdown.Item>
//               <Dropdown.Item key="deals">Deals</Dropdown.Item>
//               <Dropdown.Item key="tasks">Tasks</Dropdown.Item>
//             </Dropdown>
//             <Input
//               isRequired
//               label="Layout"
//               name="layout"
//               placeholder="Standard"
//               bordered
//               fullWidth
//             />
//             <Dropdown
//               isRequired
//               label="Trigger"
//               name="trigger"
//               placeholder="Choose a value"
//               selection
//               onChange={(key) => setFormData((prev) => ({ ...prev, trigger: key }))}
//             >
//               <Dropdown.Item key="workflow">Workflow</Dropdown.Item>
//               <Dropdown.Item key="approval">Approval</Dropdown.Item>
//             </Dropdown>
//             <Textarea
//               label="Record Image"
//               name="recordImage"
//               placeholder="Enter text or URL"
//               rows={3}
//               bordered
//               fullWidth
//             />
//           </>
//         )}

//         {step < 2 && (
//           <div className="flex justify-between">
//             <Button auto disabled={step === 1} onClick={handlePrev}>
//               Previous
//             </Button>
//             <Button auto onClick={handleNext}>
//               Next
//             </Button>
//           </div>
//         )}
//         {step === 2 && (
//           <div className="flex justify-between">
//             <Button auto onClick={handlePrev}>
//               Previous
//             </Button>
//             <Button color="gradient" type="submit" auto>
//               Submit
//             </Button>
//           </div>
//         )}
//       </Form>
//     </div>
//   );
// }































// // import React from "react";
// // import {Form, Input, Button} from "@nextui-org/react";

// // export default function App() {
// //   const [action, setAction] = React.useState(null);

// //   return (
// //     <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-6">
// //       <h2 className="text-xl font-bold mb-4">Create Module Entry</h2>
// //     <Form
// //       className="flex flex-col justify-center items-center "
// //       validationBehavior="native"
// //       onReset={() => setAction("reset")}
// //       onSubmit={(e) => {
// //         e.preventDefault();
// //         let data = Object.fromEntries(new FormData(e.currentTarget));
// //         setAction(`submit ${JSON.stringify(data)}`);
// //       }}
// //     >
      
// //       <Input
// //         isRequired
// //         errorMessage="Please enter a valid username"
// //         labelPlacement="outside"
// //         name="username"
// //         placeholder="Enter your Module"
// //         type="text"
// //       />

// //       <Input
// //         isRequired
// //         errorMessage="Please enter a valid email"
// //         labelPlacement="outside"
// //         name="email"
// //         placeholder="Enter your email"
// //         type="email"
// //       />
// //       <div className="flex gap-2">
// //         <Button color="primary" type="submit">
// //           Submit
// //         </Button>
// //         <Button type="reset" variant="flat">
// //           Reset
// //         </Button>
// //       </div>
// //       {action && (
// //         <div className="text-small text-default-500">
// //           Action: <code>{action}</code>
// //         </div>
// //       )}
// //     </Form>
// //     </div>
// //   );
// // }

