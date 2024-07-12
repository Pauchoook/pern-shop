import React from 'react';
import {IDevice} from "../utils/types";
import {Link} from "react-router-dom";
import {paths} from "../utils/paths";

export const DeviceCard: React.FC<IDevice> = ({name, img, rating, id, price}) => {
  const deviceLink = paths.DEVICE_ROUTE + `/:${id}`;

  return (
    <div
      className="max-w-[calc(25%-48px)] w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={deviceLink}>
        <img className="rounded-t-lg w-full" src={img} alt={name}/>
      </Link>
      <div className="p-5">
        <Link to={deviceLink}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
          acquisitions of 2021 so far, in reverse chronological order.</p>
        <div className="flex items-center">
          <Link to={deviceLink}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </Link>
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto">
            <path
              d="M14.8035 1.40044L17.8487 7.5709C18.0605 8.00006 18.4699 8.29743 18.9436 8.36614L25.7533 9.35569C26.9462 9.52916 27.4221 10.9946 26.5592 11.8355L21.6318 16.6385C21.2893 16.9725 21.1328 17.454 21.2139 17.9254L22.3769 24.7075C22.5808 25.8953 21.3338 26.8009 20.2671 26.2406L14.1766 23.0387C13.7531 22.8163 13.2468 22.8163 12.8232 23.0387L6.73276 26.2406C5.66605 26.8015 4.41912 25.8953 4.623 24.7075L5.78602 17.9254C5.86712 17.454 5.71055 16.9725 5.36812 16.6385L0.440646 11.8355C-0.422183 10.9941 0.0537243 9.5286 1.24659 9.35569L8.05629 8.36614C8.52995 8.29743 8.9394 8.00006 9.15116 7.5709L12.1964 1.40044C12.7292 0.319647 14.2701 0.319647 14.8035 1.40044Z"
              fill="#fff"/>
          </svg>
          <span className="ml-3 text-lg text-white">{rating}</span>
        </div>
      </div>
    </div>
  );
};