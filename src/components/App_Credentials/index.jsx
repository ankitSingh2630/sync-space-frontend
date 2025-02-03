'use client';
import React, { useState } from 'react';


export default function NewSpace() {
  const [selected, setSelected] = useState("london");
  const [step, setStep] = useState(1);
  const [showNewForm, setShowNewForm] = useState(false);
  const [formData, setFormData] = useState({

    app: '',
    actionEvent: '',
    credentials: '',
    module: 'Leads',
    layout: 'Standard',
    trigger: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleForm1Submit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleForm2Submit = (e) => {
    e.preventDefault();
    alert(`Form Data: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="max-w-md mx-auto justify-center mt-24 bg-white p-6 rounded-lg shadow-md border border-cyan-600">
      {!showNewForm ? (
        <>
          {step === 1 && (
            <>
              <div className='mt-3 mb-4'>
                <h1 className="text-xl font-bold text-cyan-500 mb-4">Create Module Entry in Zoho CRM</h1>
              </div>

              <form onSubmit={handleForm1Submit} className="space-y-4">

              <div>
                  <label htmlFor="credentials" className="block text-medium font-medium text-gray-700">
                    Credentials<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="credentials"
                    name="credentials"
                    type="text"
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="Enter your credentials..."
                    value={formData.credentials}
                    onChange={handleInputChange}
                  />
                </div>


                <div className="relative">
                  <label htmlFor="app" className="block text-sm font-medium text-gray-700 mb-2">
                    App <span className="text-red-500">*</span>
                  </label>

                  <div className="flex items-center">
                    <select
                      id="app"
                      name="app"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500 text-gray-800 text-sm"
                      value={formData.app}
                      onChange={handleInputChange}
                    >
                      <option className='text-gray-400 text-sm' value="" disabled>Select App</option>
                      <option value="Zoho CRM">Zoho CRM</option>
                      <option value="Slack">Slack</option>
                      <option value="Gmail">Gmail</option>
                      <option value="Google Sheets">Google Sheets</option>
                      <option value="Webhook">Webhooks</option>
                    </select>
                    <button
                      className="ml-2 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-xl"
                      type="button"
                      onClick={() => setShowNewForm(true)}
                    >
                      Change
                    </button>
                  </div>
                </div>

                {/* Additional Fields */}

                {/* <div>
                  <label htmlFor="actionEvent" className="block text-sm font-medium text-gray-700">
                    Action Event <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="actionEvent"
                    name="actionEvent"
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-gray-400 text-sm"
                    value={formData.actionEvent}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>Select Action Event</option>
                    <option className='text-black' value="Create Module Entry">Create Module Entry</option>
                    <option value="Update Module Entry">Update Module Entry</option>
                  </select>
                </div> */}

                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-cyan-500 hover:text-cyan-500 text-white rounded-md shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-1"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Add Your App Credentials </h2>
              <form onSubmit={handleForm2Submit} className="space-y-4">
                <h1 className='text-lg text-cyan-500 '>Steps are the following</h1>
              <ol className='text-lg font-medium'>
                <li>In the Odoo URL paste the link</li>
                <li>In the Odoo Database write the name of your database</li>
                <li>In the Odoo User write the username</li>
                <li>In the Odoo password write the password</li>
              </ol>
                {/* Module Dropdown
                <div>
                  <label className="block font-medium mb-2">Module</label>
                  <select
                    name="module"
                    className="w-full border rounded-lg px-3 py-2"
                    value={formData.module}
                    onChange={handleInputChange}
                  >
                    <option value="Leads">Leads</option>
                    <option value="Contacts">Contacts</option>
                    <option value="Accounts">Accounts</option>
                    <option value="Deals">Deals</option>
                    <option value="Tasks">Tasks</option>
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-default-500 text-small">Selected: {selected}</p>
                </div>

                <div>
                  <label className="block font-medium mb-2">Layout</label>
                  <select
                    name="layout"
                    className="w-full border rounded-lg px-3 py-2"
                    value={formData.layout}
                    onChange={handleInputChange}
                  >
                    <option value="Standard">Standard</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>

                <div className="mb-4 flex items-center">
                  <input
                    type="text"
                    name="trigger"
                    placeholder="Enter trigger"
                    className="w-full border rounded-lg px-3 py-2 mr-2"
                    value={formData.trigger}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-2 rounded-lg"
                    onClick={() => setFormData((prev) => ({ ...prev, trigger: '' }))}
                  >
                    Clear
                  </button>
                </div> */}

                <div>
                  <button
                    type="submit"
                    className="bg-cyan-500 hover:text-cyan-500 text-white px-4 py-2 rounded-lg w-full"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          )}
        </>
      ) : (
        // new form
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Change Functionalities </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="newApp" className="block text-sm font-medium text-gray-700">
                New App <span className="text-red-500">*</span>
              </label>
              <input
                id="newApp"
                name="newApp"
                type="text"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Enter app name"
              />
            </div>

            <div>
              <label htmlFor="credentials" className="block text-sm font-medium text-gray-700">
                Credentials <span className="text-red-500">*</span>
              </label>
              <input
                id="credentials"
                name="credentials"
                type="text"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Enter credentials"
              />
            </div>

            <div>
              <button
                type="button"
                className="w-full px-4 py-2 bg-cyan-500 hover:text-cyan-500 text-white rounded-md shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-1"
                onClick={() => setShowNewForm(false)}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}













































// 'use client';
// import React, { useState } from 'react';
// import {
//   Drawer,
//   DrawerContent,
//   DrawerHeader,
//   DrawerBody,
//   DrawerFooter,
//   Button,
//   useDisclosure,
// } from "@nextui-org/react";


// export default function NewSpace() {
//   const {isOpen, onOpen, onClose} = useDisclosure();
//   const [size, setSize] = React.useState("md");
//   const sizes = ["xs", "sm", ];
//   const [selected, setSelected] = useState("london");
//   const [step, setStep] = useState(1);
//   const [showNewForm, setShowNewForm] = useState(false);
//   const [formData, setFormData] = useState({

//     app: '',
//     actionEvent: '',
//     credentials: '',
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

//   const handleOpen = (size) => {
//     setSize(size);
//     onOpen();
//   };

//   return (
//     <div className="max-w-md mx-auto justify-center mt-24 bg-white p-6 rounded-lg shadow-md border border-cyan-600">
//       {!showNewForm ? (
//         <>
//           {step === 1 && (
//             <>
//               <div className='mt-3 mb-4'>
//                 <h1 className="text-xl font-bold text-cyan-500 mb-4">Create Module Entry in Zoho CRM</h1>
//               </div>

//               <form onSubmit={handleForm1Submit} className="space-y-4">

//               <div>
//                   <label htmlFor="credentials" className="block text-medium font-medium text-gray-700">
//                     Credentials<span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     id="credentials"
//                     name="credentials"
//                     type="text"
//                     className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
//                     placeholder="Enter your credentials..."
//                     value={formData.credentials}
//                     onChange={handleInputChange}
//                   />
//                 </div>


//                 <div className="relative">
//                   <label htmlFor="app" className="block text-sm font-medium text-gray-700 mb-2">
//                     App <span className="text-red-500">*</span>
//                   </label>

//                   <div className="flex items-center">
//                     <select
//                       id="app"
//                       name="app"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500 text-gray-800 text-sm"
//                       value={formData.app}
//                       onChange={handleInputChange}
//                     >
//                       <option className='text-gray-400 text-sm' value="" disabled>Select App</option>
//                       <option value="Zoho CRM">Zoho CRM</option>
//                       <option value="Slack">Slack</option>
//                       <option value="Gmail">Gmail</option>
//                       <option value="Google Sheets">Google Sheets</option>
//                       <option value="Webhook">Webhooks</option>
//                     </select>
//                     <button
//                       className="ml-2 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-xl"
//                       type="button"
//                       onClick={() => setShowNewForm(true)}
//                     >
//                       Change
//                     </button>
//                   </div>
//                 </div>

//                 {/* Additional Fields */}

//                 {/* <div>
//                   <label htmlFor="actionEvent" className="block text-sm font-medium text-gray-700">
//                     Action Event <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     id="actionEvent"
//                     name="actionEvent"
//                     className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-gray-400 text-sm"
//                     value={formData.actionEvent}
//                     onChange={handleInputChange}
//                   >
//                     <option value="" disabled>Select Action Event</option>
//                     <option className='text-black' value="Create Module Entry">Create Module Entry</option>
//                     <option value="Update Module Entry">Update Module Entry</option>
//                   </select>
//                 </div> */}

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
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Add Your App Credentials </h2>
//               <form onSubmit={handleForm2Submit} className="space-y-4">
//                 {/* <h1 className='text-lg text-cyan-500 '>Steps are the following</h1>
//               <ol className='text-lg font-medium'>
//                 <li>In the Odoo URL paste the link</li>
//                 <li>In the Odoo Database write the name of your database</li>
//                 <li>In the Odoo User write the username</li>
//                 <li>In the Odoo password write the password</li>
//               </ol> */}

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
                
//                 <div className="flex flex-wrap gap-3">
//                 {sizes.map((size) => (
//                   <Button key={size} onPress={() => handleOpen(size)}>
//                     Open {size}
//                   </Button>
//                 ))}
                
//                 {/* <Drawer isOpen={isOpen} size={size} onClose={onClose}>
//                   <DrawerContent>
//                     {(onClose) => (
//                       <>
//                   <DrawerHeader className="flex flex-col gap-1">Add Your App Credentials </DrawerHeader>
//                   <DrawerBody>
//                 <h1 className='text-lg text-cyan-500 '>Steps are the following</h1>
//                   <ol className='text-lg font-medium'>
//                     <li>In the Odoo URL paste the link</li>
//                     <li>In the Odoo Database write the name of your database</li>
//                     <li>In the Odoo User write the username</li>
//                     <li>In the Odoo password write the password</li>
//                   </ol>
//              </DrawerBody>
//              <DrawerFooter>
//             <Button color="danger" variant="light" onPress={onClose}>
//               Close
//             </Button>
//             <Button color="primary" onPress={onClose}>
//               Action
//             </Button>
//         </DrawerFooter>
//        </>
//     )}
//     </DrawerContent>
//     </Drawer> */






//                 // </div>
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


































// without drawer 



