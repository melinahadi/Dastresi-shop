import React from "react";

const FooterLinks = ({ title, links = [] }) => {
  return (
    <div className="mx-5">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="text-gray-600">
        {links.length > 0 ? (
          links.map((link) => (
            <li key={link.id} className="mb-2">
              <a href={link.url} className="">
                <p className="mb-4 hover:text-blue-500"> {link.text}</p>
              </a>
            </li>
          ))
        ) : (
          <p className="text-gray-400">لینکی موجود نیست</p>
        )}
      </ul>
    </div>
  );
};

export default FooterLinks;
