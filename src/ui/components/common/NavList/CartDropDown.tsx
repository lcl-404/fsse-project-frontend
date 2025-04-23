import {useEffect} from "react";

export default function CartDropDown(){
  useEffect(() => {

  }, []);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator text-newblue dark:text-lightyellow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <span className="badge badge-sm indicator-item bg-orange-400 text-oyster">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold text-newblue">8 Items</span>
          <span className="text-cyanblue">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-block text-newblue">View cart</button>
          </div>
        </div>
      </div>
    </div>

  )
}