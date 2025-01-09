
'use client';
import React, { useState } from 'react';

export default function MultiStepForm() {
  const [selected, setSelected] = useState("london");
  const [step, setStep] = useState(1);
  const [showNewForm, setShowNewForm] = useState(false);
  const [formData, setFormData] = useState({

    source: '',
    destination: '',
    account: '',
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
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md border border-cyan-600">
      {!showNewForm ? (
        <>
          {step === 1 && (
            <>
              <div className='mt-3 mb-4'>
                <h1 className="text-xl font-bold text-cyan-500 mb-4">Create New Space</h1>
              </div>

              <form onSubmit={handleForm1Submit} className="space-y-4">
                <div className="relative">
                  <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">
                    Source <span className="text-red-500">*</span>
                  </label>

                  <div className="flex items-center">
                    <select
                      id="source"
                      name="source"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-600 focus:border-cyan-500 text-gray-800 text-sm"
                      value={formData.source}
                      onChange={handleInputChange}
                    >
                      <option className='text-gray-400 text-sm' value="" disabled>Select the source...</option>
                      <option value="gravityform">Gravity Form</option>
                      <option value="myoperator">Myoperator</option>
                      <option value="livechat">Live Chat</option>
                      <option value="googleads">Google Ads</option>
                      <option value="facebookleads">Facebook Leads</option>
                      <option value="twakto">Tawk To</option>
                    </select>
                    {/* <button
                      className="ml-2 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-xl"
                      type="button"
                      onClick={() => setShowNewForm(true)}
                    >
                      Change
                    </button> */}
                  </div>
                </div>
                {/* Additional Fields */}
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                    Destination <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    placeholder="Select the source"
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-gray-800 text-sm"
                    value={formData.destination}
                    onChange={handleInputChange}
                  >
                    <option className='text-gray-400 text-sm' value="" disabled>Select the Destination</option>
                    <option className='text-black' value="odoo">Odoo</option>
                    <option value="zoho">Zoho CRM</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="credentials" className="block text-sm font-medium text-gray-700">
                    Credentials <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="credentials"
                    name="credentials"
                    placeholder="Select the source"
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-gray-800 text-sm"
                    value={formData.destination}
                    onChange={handleInputChange}
                  >
                    <option className='text-gray-400 text-sm' value="" disabled>Select Your Key</option>
                    <option className='text-black' value="newkey">Create new Key</option>
                  
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
                    placeholder="write a name for your new space "
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-black"
                    
                    value={formData.account}
                    onChange={handleInputChange}
                  />
                </div>

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
              <h2 className="text-xl font-bold text-gray-800 mb-4">Create Module Entry</h2>
              <form onSubmit={handleForm2Submit} className="space-y-4">
                {/* Module Dropdown */}
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
                </div>

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

// ---------------------------------------------------------------------------------------------------------------------------

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

