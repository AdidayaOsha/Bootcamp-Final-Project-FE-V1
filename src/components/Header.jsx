import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const adminGlobal = useSelector((state) => state.admin);
  const logout = () => {
    dispatch({
      type: "ADMIN_LOGOUT"
    })
    localStorage.removeItem("adminDataEmmerce")
    navigate('/')
  }
  const userGlobal = useSelector((state) => state.user)
  useEffect(() => {
    $("[data-trigger]").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var offcanvas_id = $(this).attr("data-trigger");
      $(offcanvas_id).toggleClass("show");
    });

    $(".btn-aside-minimize").on("click", function () {
      if (window.innerWidth < 768) {
        $("body").removeClass("aside-mini");
        $(".navbar-aside").removeClass("show");
      } else {
        // minimize sidebar on desktop
        $("body").toggleClass("aside-mini");
      }
    });
  }, []);

  return (
    <header className="main-header navbar">
      <div className="col-search">
      </div>
      <div className="col-nav">
        <div className="mx-4">
          Welcome, {adminGlobal.username}
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="/images/user.png" />
            </div>
          </label>
          <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52">
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li onClick={logout}><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
