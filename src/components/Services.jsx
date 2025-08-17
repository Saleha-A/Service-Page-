import React from 'react'
const services = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="services-section max-w-6xl mx-auto mt-12 p-12 bg-green-900 text-white rounded-xl shadow-lg">
        <h2 className="text-5xl font italic text-center text-white-500 mb-8">My Services</h2>
        <ul className="space-y-4">
          <li className="border-l-7 border-white-700 pl-4 font-semibold text-2xl 	hover:text-black hover:scale-105">
            <strong>Website Development</strong> – Create responsive and user-friendly websites
          </li>
          <li className="border-l-7 border-white-700 pl-4 font-semibold text-2xl hover:text-black hover:scale-105 ">
            <strong>UI/UX Design</strong> – Attractive and easy-to-use interfaces
          </li>
          <li className="border-l-7 border-white-700 pl-4 font-semibold text-2xl hover:text-black hover:scale-105">
            <strong> Web Development</strong> – Responsive, accessible websites
          </li>
          <li className="border-l-7 border-white-700 pl-4 font-semibold text-2xl hover:text-black hover:scale-105">
            <strong>Mobile App UI Design</strong> – Design layouts for Android & iOS
          </li>
          <li className="border-l-7 border-white-700 pl-4 font-semibold text-2xl hover:text-black hover:scale-105">
            <strong>Automation Solutions</strong> – Google Apps Script, Excel macros, workflow tools
          </li>
          <li className="border-l-7 border-white-700 pl-4 font-semibold text-2xl hover:text-black hover:scale-105">
            <strong>Data Entry & Management</strong> – Accurate and organized record handling
          </li>
          <li className="border-l-7 border-white-700 pl-4 font-semibold text-2xl hover:text-black hover:scale-105">
            <strong>SEO Optimization</strong> – Improve search engine rankings
          </li>
        </ul>
      </div>
    </div>
  )
}


export default services